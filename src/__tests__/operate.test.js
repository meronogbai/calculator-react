import operate from '../logic/operate';

test('can add numbers', () => {
  expect(operate('1', '2', '+')).toBe('3');
});

test('can subtract numbers', () => {
  expect(operate('1', '2', '-')).toBe('-1');
});

test('can multiply numbers', () => {
  expect(operate('1', '2', 'X')).toBe('2');
});

test('can divide numbers', () => {
  expect(operate('1', '2', '÷')).toBe('0.5');
});
