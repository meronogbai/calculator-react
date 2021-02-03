import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  let result;
  switch (operation) {
    case '-':
      result = x.minus(y).toString();
      break;
    case '+':
      result = x.plus(y).toString();
      break;
    case 'x':
      result = x.times(y).toString();
      break;
    case '÷':
      result = x.div(y).toString();
      break;
    case '%':
      result = `${y.div(100)}%`;
      break;
    case '+/-':
      result = x.times(y).times(-1).toString();
      break;
    default:
      break;
  }
  return result;
}
