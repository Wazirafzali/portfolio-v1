import test from 'node:test';
import assert from 'node:assert/strict';
import { readContactBody } from '../lib/contact-input.ts';
const valid = {turnstileToken:'test-token',budget:'',name:'Example'};
const request = (body,headers={}) => new Request('https://example.com/api/contact',{method:'POST',headers:{'content-type':'application/json',...headers},body});
for (const [name,body,status] of [
 ['malformed JSON','{',400], ['null body','null',400], ['array body','[]',400],
 ['missing token','{}',400], ['empty token',JSON.stringify({...valid,turnstileToken:' '}),400],
 ['long token',JSON.stringify({...valid,turnstileToken:'x'.repeat(2049)}),400],
 ['long budget',JSON.stringify({...valid,budget:'x'.repeat(101)}),400],
 ['wrong budget type',JSON.stringify({...valid,budget:99}),400],
 ['large streamed body','x'.repeat(49153),413],
]) test(name,async()=>assert.rejects(readContactBody(request(body)),e=>e.status===status));
test('accepts JSON with charset and unicode',async()=>{
 const data={...valid,name:'سلام'};
 assert.deepEqual(await readContactBody(request(JSON.stringify(data),{'content-type':'application/json; charset=utf-8'})),data);
});
test('rejects unsupported content type',async()=>assert.rejects(readContactBody(request('{}',{'content-type':'text/plain'})),e=>e.status===415));
test('rejects excessive declared length',async()=>assert.rejects(readContactBody(request('{}',{'content-length':'100000'})),e=>e.status===413));
test('counts bytes rather than characters',async()=>assert.rejects(readContactBody(request(JSON.stringify({...valid,message:'🌍'.repeat(13000)}))),e=>e.status===413));
