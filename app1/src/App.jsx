/**
import {Fragment} from "react";

const App = ()=>{
    //return null;
    return (
        <Fragment>
            <h1>안녕하세요!</h1>
            <p>잘 지내시죠?</p>
        </Fragment>
    );
}
 */
import { ColoredMessage } from "./components/ColoredMessage";
import { useState, useEffect } from "react";

export const App = ()=>{
    console.log("렌더링");

    const [num, setNum] = useState(0);

    const onClickButton = ()=>{
        //alert();
        setNum(num + 1);
   };

   useEffect(()=>{ 
    alert(); 
    }, [num]);
     
   // 객체로 지정할 때는 중괄호를 하나만 사용
    return (
        <>
            <h1 style={{color:"red"}}>안녕하세요!</h1>
            <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
            <ColoredMessage color="pink">잘 지냅니다.</ColoredMessage>
            <button onClick={onClickButton}>버튼</button>
            <p>{num}</p>
        </>
    );
}