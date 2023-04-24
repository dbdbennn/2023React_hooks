import React, { useEffect, useState, useMemo } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = isKorea ? "한국" : "외국";
  // location은 일반 변수(기본변수)

  // const location = {
  //   country: isKorea ? "한국" : "외국",
  // };
  // 위의 코드는 일반변수 형태가 아니라 객체 타입으로 만들어진 것이다.
  // 여기서 location은 객체변수이다.
  // location객체는 새로 만들어지기 때문에 계속해서 렌더링이 발생한다.

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);
  // 메모이제이션을 하게되면 isKorea값이 바뀔때만 렌더링을 한다.

  useEffect(() => {
    console.log("useEffect호출");
  }, [location]);

  return (
    <div>
      <h2>하루 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라:{location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
};
export default App;
