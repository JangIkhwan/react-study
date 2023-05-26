import { useState, useMemo } from "react";
import { LanguageList } from "./components/LanguageList";

export const App2 = ()=>{
    console.log("앱 렌더링");

    const [ num, setNum ] = useState(0);

    const onClickButton = ()=>{
        setNum(num + 1);
    };

    const options = useMemo(()=>{ 
        return ["korean", "english", "chinese", "japanese"]; 
    }, []);

    return (
        <>
            <button onClick={onClickButton}>버튼</button>
            <p>{num}</p>
            <br></br>
            <p>옵션</p>
            
            <LanguageList options={options}></LanguageList>
        </>
    );
};