/* export const ColoredMessage = (props)=>{
    console.log(props);
    
    const contentStyle = {
        color : props.color,
        fontSize : "50px"
    };
    
    return <p style={contentStyle}>{props.children}</p>;
}; */

export const ColoredMessage = (props)=>{
    const {color, children} = props;

    /* const contentStyle={
        color : color,
        fontSize : "50px"  
    }; */

    const contentStyle={
        color,
        fontSize : "50px"  
    };

    return <p style={contentStyle}>{children}</p>;
} 


