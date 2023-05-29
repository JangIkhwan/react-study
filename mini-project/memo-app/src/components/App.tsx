import { ChangeEvent, useState, useCallback, FC} from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = ()=>{
    const [ text, setText ] = useState<string>("");
    //const [ memos, setMemos ] = useState<string[]>([]);

    const { memos, addToDo, deleteToDo } = useMemoList();

    const onChangeText = (e: ChangeEvent<HTMLInputElement>)=>{ setText(e.target.value)};

    const onClickAdd = ()=>{
        // const newMemos = [...memos];
        // newMemos.push(text);
        // setMemos(newMemos);
        addToDo(text);
        setText("");
    };

    const onClickDelete = useCallback((index: number)=>{
        // const newMemos = [...memos];
        // newMemos.splice(index, 1);
        // setMemos(newMemos);
        deleteToDo(index);
    }, [deleteToDo]);

    return (
    <>
        <h1>간단 메모 어플리케이션</h1>
        <input type="text" value={text} onChange={onChangeText}></input>
        <SButton onClick={onClickAdd}>추가</SButton>
        <MemoList memos={memos} onClickDelete={onClickDelete}></MemoList>
    </>
    );
};

const SButton = styled.button`
    margin-left: 16px; 
`;

