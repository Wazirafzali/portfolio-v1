import test from "node:test";
import assert from "node:assert/strict";
import { escapeHtml, hasControlCharacters, rateLimitUnavailable } from "../lib/contact-security.ts";

test("email HTML treats malicious markup as text", () => {
  const attack = '<img src=x onerror="alert(1)"> & <script>alert(1)</script>';
  const escaped = escapeHtml(attack);
  assert.equal(escaped.includes("<"), false);
  assert.ok(escaped.includes("&lt;img"));
  assert.ok(escaped.includes("&quot;"));
  assert.equal(escapeHtml("O'Brien"), "O&#039;Brien");
});
test("header control characters rejected, international names allowed", () => {
  for (const value of ["Alice\r\nBcc: victim@example.com", "Alice\0", "a\tb"]) assert.equal(hasControlCharacters(value), true);
  for (const value of ["O'Brien", "حکمت", "Anne-Marie"]) assert.equal(hasControlCharacters(value), false);
});
test("rate limiter timeout fails closed even when provider says success", () => {
  assert.equal(rateLimitUnavailable({ success: true, reason: "timeout" }), true);
  assert.equal(rateLimitUnavailable({ success: true }), false);
  assert.equal(rateLimitUnavailable({ success: false }), false);
});

test("Turnstile requires success and an explicitly approved hostname", async () => {
  const { validTurnstileResult } = await import("../lib/contact-security.ts");
  for (const hostname of ["appfolor.vercel.app", "appfolor-preview.wazirafzali57.workers.dev"]) {
    assert.equal(validTurnstileResult({ success: true, hostname }), true);
    assert.equal(validTurnstileResult({ success: false, hostname }), false);
  }
  for (const hostname of ["evil.example", "appfolor.vercel.app.evil.example", "other.vercel.app", "localhost", "appfolor.vercel.app:443", "https://appfolor.vercel.app", ""]) {
    assert.equal(validTurnstileResult({ success: true, hostname }), false);
  }
  for (const result of [null, {}, [], { success: "true", hostname: "appfolor.vercel.app" }, { success: true }]) {
    assert.equal(validTurnstileResult(result), false);
  }
});
