import classes from "./CssModules.module.scss";

export const CssModule = ()=>{
    return(
        <div className={classes.container}>
            <p className={classes.title}>CSS Modules 입니다.</p>
            <button className={classes.button}>버튼</button>
        </div>
    );
};    