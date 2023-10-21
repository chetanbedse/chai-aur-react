import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);
  const [msg, setMsg] = useState(null);

  const addValue = () => {
    setCounter(counter < 20 ? (prevCounter) => prevCounter + 1 : counter);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    setMsg(counter < 20 ? null : "Maximum limit has been reached!");
  };

  const removeValue = () => {
    // setCounter(counter > 0 ? counter - 1 : counter);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setMsg(counter > 0 ? null : "Minimum limit has been reached!");
  };

  return (
    <>
      <h1>Counter</h1>
      <div style={{ display: "inline-flex", gap: "20px" }}>
        <button onClick={removeValue} className="btn-action">
          DECREASE
        </button>
        <button className="btn-counter">{counter}</button>
        <button onClick={addValue} className="btn-action">
          INCREASE
        </button>
      </div>
      <p style={{ fontWeight: "600", color: "red", height: "50px" }}>{msg}</p>
    </>
  );
}

export default App;
