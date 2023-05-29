import { useState } from "react";

const divStyle = {
    border : "1px solid grey",
    width : "300px"
}

export const App = ()=>{
    const [ memoList, useMemoList ] = useState<Array<string>>([]);

    const onClickAddItem = ()=>{
        const memo = document.getElementById("memo");
    
    };

    return(
        <>
            <h1>간단 메모 어플리케이션</h1>
            <input id="memo" type="text"></input><button onClick={onClickAddItem}>추가</button>
            <div style={divStyle}>
                <p>메모 목록</p>
                <ul>
                    {memoList.map((item)=>(
                        <li>{`${item}`}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};