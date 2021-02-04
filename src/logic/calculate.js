import operate from './operate';

export default function calculate(calcData, buttonName) {
  let { total, next, operation } = calcData;
  switch (buttonName) {
    case '+':
    case '-':
    case 'X':
    case '÷':
    case '%':
      total = operate(total, next, operation);
      next = null;
      operation = buttonName;
      break;
    case '=':
      total = operate(total, next, operation);
      next = null;
      operation = null;
      break;
    case '+/-':
      next *= -1;
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
