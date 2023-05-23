import style from "styled-components"

export const StyledComponents = ()=>{
    return(
        <SContainer>
            <STitle>이것은 Styled component입니다.</STitle>
            <SButton>버튼</SButton>
        </SContainer>
    );
};

const SContainer = style.div`
    border : 1px solid #aaa;
    border-radius : 20px;
    padding : 8px;
    margin : 8px;
    display : flex;
    justify-content : space-around;
    align-items : center;
`;

const STitle = style.p`
    margin : 0;
    color : #aaa;
`;

const SButton = style.button`
    background-color : #ddd;
    border : none;
    padding : 8px;
    border-radius : 8px;
    &:hover{
        background-color : #aaa;
        color : #fff;
        cursor : pointer;
    }
`;