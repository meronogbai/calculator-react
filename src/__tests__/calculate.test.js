import calculate from '../logic/calculate';

test('number buttons when total and next are not empty', () => {
  const calcData = calculate({ total: '1', next: '2', operation: '+' }, '9');
  expect(calcData).toEqual({ total: '1', next: '29', operation: '+' });
});

test('number buttons when total and next are empty', () => {
  const calcData = calculate({ total: null, next: null, operation: '+' }, '9');
  expect(calcData).not.toEqual({ total: '9', next: null, operation: '+' });
});

test('AC button', () => {
  const calcData = calculate({ total: '1', next: '2', operation: '+' }, 'AC');
  expect(calcData).toEqual({ total: null, next: null, operation: null });
});

test('% button', () => {
  const calcData = calculate({ total: '1', next: '2', operation: '+' }, '%');
  expect(calcData).toEqual({ total: '1', next: '0.02', operation: '+' });
});

test('+/- button', () => {
  const calcData = calculate({ total: '1', next: '2', operation: '+' }, '+/-');
  expect(calcData).toEqual({ total: '1', next: '-2', operation: '+' });
});

test('. button', () => {
  const calcData = calculate({ total: '1', next: '2', operation: '+' }, '.');
  expect(calcData).toEqual({ total: '1', next: '2.', operation: '+' });
});

test('operation after operation', () => {
  const calcData = calculate({ total: '1', next: '2', operation: '+' }, '-');
  expect(calcData.total).toBe('3');
});

test('equal after operation', () => {
  const calcData = calculate({ total: '1', next: '2', operation: '+' }, '=');
  expect(calcData.total).toBe('3');
});
