import { useState, useCallback } from "react";

export const useMemoList = ()=>{
    const [ memos, setMemos ] = useState<string[]>([]);

    const addToDo = useCallback((text: string)=>{
        const newMemos = [...memos];
        newMemos.push(text);
        setMemos(newMemos);
    }, [memos]);

    const deleteToDo = useCallback((index: number)=>{
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        setMemos(newMemos);
    }, [memos]);

    return { memos, addToDo, deleteToDo };
};
