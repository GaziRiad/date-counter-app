import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const day = new Date();
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p style={{ fontWeight: 600, fontSize: "2rem" }}>Step: {step}</p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      {/*  */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p style={{ fontWeight: 600, fontSize: "2rem" }}>counter: {count}</p>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p style={{ fontWeight: 600, fontSize: "2rem" }}>
        {count === 0
          ? `Today is ${day.toDateString()}`
          : `${count} days from today is ${new Date(
              day.setDate(day.getDate() + count)
            ).toDateString()}`}
      </p>
    </div>
  );
}
