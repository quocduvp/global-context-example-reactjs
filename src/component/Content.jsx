import React, { useContext } from "react";
import { NumberContext } from "../context/NumberContext";
const Content = () => {
  const numberContext = useContext(NumberContext);
  const { number } = numberContext.state;
  return (
    <div style={{ backgroundColor: "gray" }}>
      <h1>Root Content</h1>
      <p>Number: {number}</p>
      <button onClick={() => numberContext.dispatch({ type: "TANG" })}>
        Tăng
      </button>
      <button onClick={() => numberContext.dispatch({ type: "GIAM" })}>
        Giảm
      </button>
    </div>
  );
};

export default Content;
