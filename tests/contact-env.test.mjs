import test from 'node:test';
import assert from 'node:assert/strict';
import { getContactEnv } from '../lib/contact-env.ts';

test('reads current Worker bindings without falling back to build-time secrets', () => {
  const key = Symbol.for('__cloudflare-context__');
  const original = globalThis[key];
  try {
    globalThis[key] = { env: { APPFOLOR_HOST: 'cloudflare', UPSTASH_REDIS_REST_TOKEN: 'first' } };
    assert.equal(getContactEnv().UPSTASH_REDIS_REST_TOKEN, 'first');
    globalThis[key] = { env: { APPFOLOR_HOST: 'cloudflare', UPSTASH_REDIS_REST_TOKEN: 'rotated' } };
    assert.equal(getContactEnv().UPSTASH_REDIS_REST_TOKEN, 'rotated');
    assert.equal(getContactEnv().RESEND_API_KEY, undefined);
    delete globalThis[key];
    assert.equal(getContactEnv(), process.env);
  } finally {
    if (original === undefined) delete globalThis[key];
    else globalThis[key] = original;
  }
});
