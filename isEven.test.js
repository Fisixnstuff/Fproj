const isEven = require('./isEven');

test('returns true for even numbers', () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(0)).toBe(true);
});

test('returns false for odd numbers', () => {
  expect(isEven(3)).toBe(false);
  expect(isEven(-1)).toBe(false);
});

test('handles negative even numbers', () => {
  expect(isEven(-2)).toBe(true);
});
