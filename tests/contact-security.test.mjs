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
