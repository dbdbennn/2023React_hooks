import React, { useState, useRef } from "react";
const App = () => {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);

  let countVar = 0;

  console.log(countRef);
  console.log("렌더링");
  
  const doRendering = () => {
    setRenderer(renderer + 1);
  };
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref : ", countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("var : ", countVar);
  };
  const printResult = () => {
    console.log(`ref : ${countRef.current}, var:
    ${countVar}`);
  };
    return (
      <div>
        <p>Ref: {countRef.current}</p>
        <p>Var: {countVar}</p>
        <button onClick={doRendering}>렌더!!</button>
        <button onClick={increaseCountRef}>
        Ref증가
        </button>
        <button onClick={increaseVar}>Var증가</button>
        <button onClick={printResult}>Ref Var 값 출력
        
        </button>
      </div>
    );
  };
  export default App;