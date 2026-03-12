import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const profileReadme = fs.readFileSync(new URL('../profile/README.md', import.meta.url), 'utf8');

test('org profile presents the governed-system topology clearly', () => {
  assert.match(profileReadme, /1 hub \+ 7 delivery repos/i);
  assert.match(profileReadme, /governed decision system/i);
  assert.match(profileReadme, /bounded agentic assistance/i);
  assert.match(profileReadme, /start here/i);
});
