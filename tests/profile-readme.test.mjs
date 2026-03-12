import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const profileReadme = fs.readFileSync(new URL('../profile/README.md', import.meta.url), 'utf8');

test('org profile opens with the single internal pre-review gate story', () => {
  assert.match(profileReadme, /internal engineering teams/i);
  assert.match(profileReadme, /review.?ready/i);
  assert.match(profileReadme, /human review required/i);
  assert.match(profileReadme, /deterministic baseline/i);
  assert.match(profileReadme, /start here/i);

  // Keep repo topology out of the front door.
  assert.ok(!/1 hub \+ 7 delivery repos/i.test(profileReadme));
  assert.ok(!/governance workbench/i.test(profileReadme));

  // Ban/flag promise creep.
  const banned = [
    /autonomous approval/i,
    /auto-?approve/i,
    /enterprise onboarding platform/i,
    /replaces reviewers/i,
  ];
  for (const rx of banned) {
    assert.ok(!rx.test(profileReadme), `banned claim present: ${rx}`);
  }
});
