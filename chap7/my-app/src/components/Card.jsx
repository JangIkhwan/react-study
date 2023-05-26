import { EditButton } from "./EditButton";

const style={
    width : "300px",
    height : "200px",
    margin : "8px",
    borderRadius : "8px",
    backgroundColor : "wheat",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center"
};

export const Card = ()=>{
    return (
        <div style={style}>
            <p>야마다 타로</p>
            <EditButton></EditButton>
        </div>
    );
};