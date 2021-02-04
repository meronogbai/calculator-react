import operate from './operate';

export default function calculate(calcData, buttonName) {
  let { total, next, operation } = calcData;
  let result;
  switch (buttonName) {
    case '+':
    case '-':
    case 'X':
    case '÷':
      result = operate(total, next, operation);
      total = result;
      next = null;
      operation = buttonName;
      break;
    case '=':
      result = operate(total, next, operation);
      total = result;
      next = null;
      operation = null;
      break;
    case '%':
      result = operate(operate(total, next, operation), '100', '÷');
      total = result;
      next = null;
      operation = null;
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    default:
      break;
  }
  return result;
}
