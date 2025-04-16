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
  const [step, setStep] = useState(1);

  // Count increment and decrement
  function countIncrement() {
    setCount((c) => (c += step));
  }
  function countDecrement() {
    setCount((c) => (c -= step));
  }

  // Step increment and decrement
  function stepIncrement() {
    setStep((s) => (s += 1));
  }
  function stepDecrement() {
    setStep((s) => (s -= 1));
  }
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="card">
      <h1>Date Counter</h1>
      <div className="step">
        <button className="decrement" onClick={stepDecrement}>
          -
        </button>
        <h2>Step: {step}</h2>
        <button className="increment" onClick={stepIncrement}>
          +
        </button>
      </div>
      <div className="count">
        <button className="decrement" onClick={countDecrement}>
          -
        </button>
        <h2>Count: {count}</h2>
        <button className="increment" onClick={countIncrement}>
          +
        </button>
      </div>
      <div className="show-date">
        <span>
          {count === 0
            ? "Today Is "
            : count > 0
            ? `${count} Days From Today Is `
            : `${Math.abs(count)} Days Ago Was `}
        </span>
        <span>
          {date.toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
