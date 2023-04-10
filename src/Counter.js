import {useState} from 'react';

const Counter = ( ) => {
    const [value, setValue] = useState(0);
    /* 
    이 배열의 첫번째 요소는 상태값(변수값)을 나타내고
    두번째 요소는 상태(변수)값을 설정 또는 변경하는 함수이다.
    상태(변수)는 소문자로 표현하고,
    함수는 set접두사를 붙이고 상태변수의 첫글자는 대문자로 표현
    */

    return (
        <div>
            <p>
                현재 카운터 값은 <b> {value} </b> 입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    )
}

export default Counter;