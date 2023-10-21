import { useState } from "react";

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200 flex justify-center align-middle"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-center place-items-center">
          <div
            className="p-5 rounded bg-black"
            style={{ width: "200px", textAlign: "center" }}
          >
            <h1
              className="text-3xl uppercase text-white"
              style={{ color: color }}
            >
              {color}
            </h1>
          </div>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md">
            <button
              onClick={() => setColor("Red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("Orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("Yellow")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-slate-600"
              style={{ backgroundColor: "Yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("Green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("Blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("White")}
              className="border border-slate-300 px-4 py-1 rounded-full text-slate-600 shadow-lg"
              style={{ backgroundColor: "White" }}
            >
              White
            </button>
            <button
              onClick={() => setColor("Purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Purple" }}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
