// App.js
import { useState, useMemo } from "react";

const hardCalculate = (number) => {
  console.log("시간이 많이 걸리는 계산");
  for (let i = 0; i < 999999999; i++) {} // 대략 1초 지연
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("짱 쉬운 시간 계산");
  return number + 1;
};

const App = () => {
  const [hardNumber, setHardNumber] = useState(1);
  // hardNumber=1 저장
  const [easyNumber, setEasyNumber] = useState(1);
  // easyNumber=1 저장
  // state변수인 hardNumber 또는 easyNumber값이 업데이트(변경)되면 처음부터 렌더링이 된다.
  // easyCalculate()함수만 호출하고 싶은데 state값이 변경되었기 때문에 hardCalculate()도
  // 호출이 되어서 시간이 많이 걸리게 됨

  // const hardSum = hardCalculate(hardNumber);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  // 메모이제이션을 하게 되면 처음 렌더링할떄만 실행되어서 그 값을 메모리에 저장한다.
  // }, [hardNumber]);에서 hardNumber값이 변경될때만 hardCalculate()함수가 호출되어서 다시 계산.

  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3> 시간이 많이 걸리는 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span>+10000={hardSum}</span>

      <h3> 짱 쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span>+1={easySum}</span>
    </div>
  );
};
export default App;
