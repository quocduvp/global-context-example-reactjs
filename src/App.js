import React, { useContext } from "react";
import { NumberContext } from "./context/NumberContext";
import Content from "./component/Content";
import SubContentOne from "./component/SubContentOne";
import SubContentTwo from "./component/SubContentTwo";

function App() {
  const numberContext = useContext(NumberContext);
  const { number } = numberContext.state;
  return (
    <>
      <Content />
      <SubContentOne />
      <SubContentTwo number={number} dispatch={numberContext.dispatch} />
    </>
  );
}

export default App;
