import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  let result;
  if (operation === '-') {
    result = x.minus(y).toString();
  } else if (operation === '+') {
    result = x.plus(y).toString();
  } else if (operation === 'x') {
    result = x.times(y).toString();
  } else if (operation === '÷') {
    result = x.div(y).toString();
  } else if (operation === '%') {
    result = `${y.div(100)}%`;
  } else if (operation === '+/-') {
    result = x.times(y).times(-1).toString();
  } else {
    return null;
  }
  return result;
}
