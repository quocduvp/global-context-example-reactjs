import React from "react";
const SubContentTwo = (props) => {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <h1>Root Content</h1>
      <p>Number: {props.number}</p>
      <button onClick={() => props.dispatch({ type: "TANG" })}>Tăng</button>
      <button onClick={() => props.dispatch({ type: "GIAM" })}>Giảm</button>
    </div>
  );
};

export default SubContentTwo;
