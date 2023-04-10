import { useState, useEffect } from "react";


const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // Info 컴포넌트가 마운트 될 때 useEffect가 2번 호출
    useEffect(() => {
        console.log('렌더링 완료됨')
        console.log({
            name,
            nickname,
        });
        console.log("마운트 될때만 실행됩니다.")
    })

    const onChangeName = (e) => {
        setName(e.target.value);
        // name값 변경
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
        // nickname값 변경
    }

    return (
        <div>
            <div>
                <input valuse={name} onChange={onChangeName}/>
                <input valuse={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <b>이름: </b> {name}
            </div>
            <div>
                <b>닉네임: </b> {nickname}
            </div>
        </div>
    )
}

export default Info;