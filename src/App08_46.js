import React, { useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  // count=0, state 변수
  // count이 변경될때마다 렌더링이 발생한다.

  const countRef = useRef(0);
  // countRef.current = 0, 전역변수 개념이다.
  // ountRef.current 이값은 바뀌어도 렌더링이 되지 않는다.

  const increaseCountState = () => {
    setCount(count + 1);
    // count값을 1씩 증가하면 count값이 변경될때 다시 렌더링을 한다
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref : ", countRef.current);
  };

  return (
    <div>
      <p> State : {count}</p>
      <p> Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>State증가</button>
      <button onClick={increaseCountRef}>Ref증가</button>
    </div>
  );
};
export default App;
