import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  function countIncrement() {
    setCount((c) => (c += step));
  }
  function countDecrement() {
    if (count > 0) {
      setCount((c) => (c -= step));
    }
  }
  function stepIncrement() {
    setStep((s) => (s += 1));
  }
  function stepDecrement() {
    if (step > 0) {
      setStep((s) => (s -= 1));
    }
  }
  return (
    <>
      <div className="step">
        <button onClick={stepDecrement}>-</button>
        <h1>Step: {step}</h1>
        <button onClick={stepIncrement}>+</button>
      </div>
      <div className="count">
        <button onClick={countDecrement}>-</button>
        <h1>Count: {count}</h1>
        <button onClick={countIncrement}>+</button>
      </div>
      <div className="show-date">
        <p></p>
      </div>
    </>
  );
}
