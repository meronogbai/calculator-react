import operate from './operate';

export default function calculate(calcData, buttonName) {
  let { total, next, operation } = calcData;
  switch (buttonName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (next) {
        next += buttonName;
      } else {
        next = buttonName;
      }
      break;
    case '+':
    case '-':
    case 'X':
    case '÷':
    case '%':
      if (!operation) {
        operation = buttonName;
      }
      if (total) {
        total = operate(total, next, operation);
      } else {
        total = next;
      }
      operation = buttonName;
      next = null;
      break;
    case '=':
      if (total) {
        total = operate(total, next, operation);
      } else {
        total = next;
      }
      operation = null;
      next = null;
      break;
    case '+/-':
      next = (Number(next) * -1).toString();
      break;
    case '.':
      if (!next.includes('.')) {
        next += '.';
      }
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    default:
      break;
  }
  return { total, next, operation };
}
