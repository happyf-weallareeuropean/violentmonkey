import { cmpVersion } from '@/common/util';

test('accepts alphabet-only parts', () => {
  expect(cmpVersion('a',  'b')).toBeLessThan(0);
  expect(cmpVersion('aa', 'ab')).toBeLessThan(0);
  expect(cmpVersion('a.a', 'a.b')).toBeLessThan(0);
});

test('keeps numeric precedence', () => {
  expect(cmpVersion('0a', 'a')).toBeGreaterThan(0);
  expect(cmpVersion('1',  'a')).toBeGreaterThan(0);
});
