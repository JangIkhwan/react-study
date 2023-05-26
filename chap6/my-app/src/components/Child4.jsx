import { memo } from "react";

const divStyle = {
    height : "200px",
    backgroundColor : "wheat",
    padding : "8px",
};

export const Child4 = memo(()=>{
    console.log("Child4");
    return(
        <div style={divStyle}>
            <p>Child4</p>            
        </div>
    );
});