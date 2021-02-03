import operate from './operate';

export default function calculate(calcData, buttonName) {
  let { total, next, operation } = calcData;
  let result;
  switch (buttonName) {
    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%':
    case '+/-':
    case '=':
      result = operate(total, next, operation);
      total = result;
      next = null;
      operation = null;
      break;

    default:
      break;
  }
  return result;
}
