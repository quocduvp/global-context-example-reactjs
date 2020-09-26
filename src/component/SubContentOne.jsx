import React, { useContext } from "react";
import { NumberContext } from "../context/NumberContext";
const SubContentOne = () => {
  const numberContext = useContext(NumberContext);
  const { number } = numberContext.state;
  return (
    <div style={{ backgroundColor: "coral" }}>
      <h1>Sub Content One (Get data from global context)</h1>
      <p>Number: {number}</p>
    </div>
  );
};

export default SubContentOne;
