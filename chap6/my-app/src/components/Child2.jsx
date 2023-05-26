import { memo } from "react";

const divStyle = {
    height : "50px",
    backgroundColor : "lightgray",
};

export const Child2 = memo(()=>{
    console.log("Child2");
    return(
        <div style={divStyle}>
            <p>Child2</p>            
        </div>
    );
});