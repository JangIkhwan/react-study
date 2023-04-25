import ReactDom from "react-dom";
import { CssModule } from "./CssModule";
import { StyledJsx } from "./StyledJsx";

const App = ()=>{
    return (
        <StyledJsx />
    );
};

ReactDom.render(<App />, document.getElementById("root"));