import { useState } from "react";
import "./App.css";

function InputColor() {
  const [dan, setDan] = useState("");

  return (
    <div className="App">
      <input onChange={(e) => setDan(e.target.value)} />
      <div
        style={{
          margin: "auto",
          marginTop: "20px",
          width: "400px",
          height: "400px",
          border: "3px solid",
          background: dan,
        }}
      ></div>
    </div>
  );
}

export default InputColor;
