import { memo } from "react";

const divStyle = {
    height : "50px",
    backgroundColor : "lightgray",
};

export const Child3 = memo(()=>{
    console.log("Child3");
    return(
        <div style={divStyle}>
            <p>Child3</p>            
        </div>
    );
});