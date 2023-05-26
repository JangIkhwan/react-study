export const LanguageList = (props)=>{
    const {options} = props;
    
    console.log("옵션 재랜더링");

    const list = options.map((item)=>{
        return(
            <>
                <p>{item}</p>
            </>
        );
    })      

    return list;
}