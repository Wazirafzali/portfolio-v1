import test from 'node:test';
import assert from 'node:assert/strict';
import { cleanContactSetting, resendFailureCode } from '../lib/contact-config.ts';

test('accepts raw values and copied dotenv assignments', () => {
  for (const raw of ['re_example', '  re_example\n', '"re_example"', 'RESEND_API_KEY="re_example"', "RESEND_API_KEY = 're_example'"]) {
    assert.equal(cleanContactSetting('RESEND_API_KEY', raw), 're_example');
  }
  assert.equal(cleanContactSetting('CONTACT_FROM_EMAIL', 'AppFolor <onboarding@resend.dev>'), 'AppFolor <onboarding@resend.dev>');
  assert.equal(cleanContactSetting('RESEND_API_KEY', 'OTHER_KEY=re_example'), 'OTHER_KEY=re_example');
  assert.equal(cleanContactSetting('RESEND_API_KEY', '""'), undefined);
  assert.equal(cleanContactSetting('RESEND_API_KEY', undefined), undefined);
});

for (const [input, expected] of [
  [{name:'validation_error',statusCode:403,message:'You can only send testing emails to your own email address (private@example.com).'}, 'MAIL-TEST-RECIPIENT'],
  [{name:'validation_error',message:'The private.example domain is not verified.'}, 'MAIL-DOMAIN'],
  [{name:'validation_error',message:'Invalid from field'}, 'MAIL-FIELDS'],
  [{name:'invalid_api_key',message:'API key is invalid: re_private'}, 'MAIL-KEY'],
  [{name:'restricted_api_key'}, 'MAIL-PERMISSION'],
  [{name:'invalid_permission'}, 'MAIL-PERMISSION'],
  [{name:'suspended_api_key'}, 'MAIL-SUSPENDED'],
  [{name:'daily_quota_exceeded'}, 'MAIL-QUOTA'],
  [{statusCode:429}, 'MAIL-LIMIT'],
  [{message:'Unknown private provider detail'}, 'MAIL-PROVIDER'],
]) test(expected + ' safely classifies provider response', () => {
  assert.equal(resendFailureCode(input), expected);
});
