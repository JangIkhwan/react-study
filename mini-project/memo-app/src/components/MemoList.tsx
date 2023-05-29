import { FC } from "react";
import styled from "styled-components";

type Prop = {
    memos : string[];
    onClickDelete: (index: number) => void;
}

export const MemoList: FC<Prop> = (props)=>{
    const { memos, onClickDelete } = props;

    return (
        <SContainer>
            <p>메모 목록</p>
            <ul>
                {memos.map((memo: string, index: number)=>(       
                    <li key={memo}>
                        <SMemoWrapper>
                            <p>{memo}</p>
                            <button onClick={()=>onClickDelete(index)}>삭제</button> { /**onClick?? */}
                        </SMemoWrapper>
                    </li>
                ))}
            </ul>
        </SContainer>
    );
};


const SContainer = styled.div`
    border: 1px solid #ccc;
    padding : 16px;
    margin : 8px;
`;

const SMemoWrapper = styled.div`
    display : flex;
    align-items : center;
`;