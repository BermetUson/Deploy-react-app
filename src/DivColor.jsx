import { useState } from "react";
import "./App.css";

function DivColor() {
  const [color, setColor] = useState("black");

  return (
    <div className="App">
      <div
        style={{
          margin: "auto",
          width: "400px",
          height: "400px",
          border: "3px solid",
          backgroundColor: color,
        }}
      >
        
        <h1 style={{ color: "white" }}>{color}</h1>
      </div>
      <button onClick={() => setColor("black")}>black</button>
      <button onClick={() => setColor("gray")}>gray</button>
      <button onClick={() => setColor("yellow")}>yellow</button>
      <button onClick={() => setColor("orange")}>orange</button>
      <button onClick={() => setColor("pink")}>pink</button>
      <button onClick={() => setColor("red")}>red</button>
    </div>
  );
}

export default DivColor;
