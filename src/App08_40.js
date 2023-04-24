import { useEffect, useState, useCallback } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  // number = 0

  // someFunction은 처음 렌더링이 될때 실행하고 그 다음에는
  // 메모리에 함수 객체를 저장하기 떼문에 실행을 안함.
  // 따라서 number값이 0일때 메모리에 저장하기 때문에
  // input박스의 값을 변경해도
  // call someFunc버튼을 누르면 number값이 0이 출력
  // useCallback함수의 2번쨰 인자값을 [number]으로 설정하면
  // number값이 변경되면 함수를 다시 호출하게 된다.
  const someFunction = useCallback(() => {
    console.log(`someFunc:number:${number}`);
    return;
  }, [number]);

  // number state가 변경되면 처음부터 다시 렌더링이 되기 때문에
  // someFunction변수는 함수 객체를 가리킨다. 따라서 객체변수는
  // 렌더링이 될때마다 새롭게 객체가 만들어진다.
  // 그래서 useCallback이 필요함.
  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={someFunction}>call someFunc</button>
    </div>
  );
};
export default App;
