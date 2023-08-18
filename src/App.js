import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const day = new Date();
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

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
        <input
          // style={{ height: "2rem" }}
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        ></input>
        <p style={{ fontWeight: 600, fontSize: "2rem" }}>{step}</p>
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
        {/* <p style={{ fontWeight: 600, fontSize: "2rem" }}>counter: {count}</p> */}
        <input
          type="number"
          style={{ fontWeight: 500, fontSize: "2rem" }}
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        ></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p style={{ fontWeight: 600, fontSize: "2rem" }}>
        {count === 0
          ? `Today is ${day.toDateString()}`
          : count > 0
          ? `${count} days from today is ${new Date(
              day.setDate(day.getDate() + count)
            ).toDateString()}`
          : `${Math.abs(count)} days ago was ${new Date(
              day.setDate(day.getDate() + count)
            ).toDateString()}`}
      </p>

      {count !== 0 || step !== 1 ? (
        <button
          style={{ fontWeight: 500, fontSize: "1.6rem" }}
          onClick={handleReset}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
