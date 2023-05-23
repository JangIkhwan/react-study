import ReactDom from "react-dom";
import "./index.css";
import { CssModule } from "./CssModule";
import { StyledJsx } from "./StyledJsx";
import { StyledComponents } from "./StyledComponents";
import { Emotion } from "./Emotion";
import { TailwindCss } from "./Tailwindcss";

const App = ()=>{
    return (
        <TailwindCss />
    );
};

ReactDom.render(<App />, document.getElementById("root"));