# 리액트 기초

## 1. JSX

- jsx는 자바스크립트 코드에 html 태그가 들어가는 형태임.
- html 태그를 return할 수 있음. 
  - *주의: return의 행이 여러개 일때는 ()로 감쌈 
- 주의: return에서는 반드시 하나의 html 태그로 감싸야 함!
  - 여러 태그 리턴시 다음 3가지 방법 중 하나 사용
   ```jsx
    1. <div></div> 태그
    2. import { Fragment } from "react" 후에 <Fragment></Fragment> 
    3. <> </>
    ```
- *SPA에서 html 파일은 하나이므로 다음과 같이 루트에 컴포넌트를 렌더링함*

## 2. 컴포넌트

- 컴포넌트들을 분리해서 여러 개의 파일로 관리하는 것이 좋음
- *컴포넌트를 담은 파일은 jsx 확장자로 설정하는 것이 관리하기 편함*
  ```jsx
  // /index.js
  import { ReactDOM } from "react-dom";
  import { App } from "./App";

  ReactDOM.render(<App />, document.getElementById("root"));

  // /App.jsx
  export const App = ()=>{
    return (
      컴포넌트1
      컴포넌트2
      ...
    );
  };
  ```


  ## 3. props
  - 컴포넌트에 전달되는 변수라고 생각하면 됨
  - props에 의해서 컴포넌트의 결과가 달라짐
  - props를 사용하면 유용할 때가 있음. 예를 들어서 색깔과 내용에 따라서 컴포넌트를 일일이 만들지 않고 props를 이용해서 하나의 컴포넌트를 만들 수 있음. 이렇게 하면 컴포넌트를 유연하게 사용할 수 있음 
  ```jsx
  // /App.jsx
  import { ColorMessage } from "./colorMessage";
  
  export const App = ()=>{
    return (
      <ColorMessage color="red" message="잘 지내?"></ColorMessage>
      <ColorMessage color="blue" message="응 잘 지내지"></ColorMessage>
    );
  };

  // /colorMessage.jsx
  export const ColorMessage = (props)=>{
    const [ color, message ] = props;
    const contentStyle = {
      color,
      fontSize:"40px"
    };

    return <p style={contentStyle}>{message}</p>;
  };
  ```

- 참고 : `return`에서 js 코드가 들어가는 부분은 {} 으로 감쌈
- 참고 : `style={{ color : "red" }}`과 같은 식으로 작성 가능

## State(useState)
- State는 컴포넌트가 가지는 상태임
- 리액트 훅에서는 함수형 컴포넌트에게 State 개념을 제공하기 위해서 useState 함수를 제공함
- useState의 사용법
  ```jsx
  num, setNum = useState(0);
  ```

  


