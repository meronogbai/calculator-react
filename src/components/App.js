import '../App.css';
import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default function App() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const handleClick = buttonName => {
    const {
      total: newTotal,
      next: newNext,
      operation: newOperation,
    } = calculate({ total, next, operation }, buttonName);
    setTotal(newTotal);
    setNext(newNext);
    setOperation(newOperation);
  };
  return (
    <div className="App">
      <Display result={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}
