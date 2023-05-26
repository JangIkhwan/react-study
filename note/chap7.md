# 글로벌 State

## 1. 버킷릴레이

어떤 컴포넌트가 다른 컴포넌트의 State를 참조할 때, props를 이용하여서 참조하게 된다. 그런데 리액트 프로젝트의 계층구조에서 불필요하게 여러 컴포넌트를 거쳐서 props를 전달해야할 수 있다. 이러한 상황을 `버킷릴레이`라고 한다.

버킷렐레이는 불필요한 재렌더링을 발생시킬 수 있다. 그래서 그동안 사용해온 로컬 State 대신에 글로벌 State를 이용하면 불필요한 재렌더링을 해결할 수 있다.

## 2. Context를 이용한 State 관리

리액트에서는 글로벌 State를 관리하기 위해서 Context라는 기능을 제공한다.

다음 3단계를 거쳐서 Context로 글로벌 State를 관리한다.

   1. `createContext()` 함수로 Context를 만들고, 관리할 State를 설정하는 Provider 컴포넌트를 작성한다. 
   2. Context에 대응되는 Provider 컴포넌트로 State를 참조할 컴포넌트들을 감싼다. 
   3. State를 참조할 부분에서 `useContext()` 함수를 이용해서 참조한다.

예시 코드는 다음과 같다.

1번 과정

```jsx

import { useState, createContext } from "react";

/** 빈 객체로 컨텍스트 생성 */
const sampleContext = createContext({}); 

const SampleProvider = (props)=>{
    const { children } = props;

    /**state 생성 */
    const { val, setVal } = useState(true);

    /** value 속성에 글로벌 State 설정*/
    return(
        <SampleContext.Provider value={ {val, setVal} }>
            {children}
        </SampleContext.Provider>
    );
};
```

2번 과정
```jsx
/** State 참조할 모든 컴포넌트(주로 루트 컴포넌트)를 감싸기 */
ReactDOM.render(
    <SampleProvider>
        <App />
    </SampleProvider>
, document.getElementById("root"));

```

3번 과정
```jsx
import { useContext } from "react";
import { sampleContext } from "./SampleProvider.jsx";

export const App = ()=>{
    /** State 사용 */
    const { val, setVal } = useContext(SampleContext);

    const onClick = ()=>{ 
        setVal(!val);
    };

    return( 
        <>
            <p>{val}</p>
            <button onClick={onClick}></button>
        </>
    );
};

```

## Context로 인한 재렌더링

Context의 한 변수가 변경되면, 해당 Context를 참조하는 모든 컴포넌트가 재렌더링된다. 컴포넌트가 Context의 변경되지 않은 변수를 참조하더라도 재렌더링된다는 점에 주의해야 한다.

불필요한 렌더링을 줄이기 위해서는 한 Context에 서로 다른 성격의 State를 저장하지 않아야 한다. 때로는 State 변수와 set 함수를 서로 다른 Context로 관리하는 것도 방법이다.


## Redux
글로벌 State를 관리하기 위한 리액트의 라이브러리이다. 많은 리액트 프로젝트에서 사용되고 있다. `Flux 아키텍처`라는 점과 데이터가 한 방향으로 진행된다는 점이 특징이다.

주요 용어를 설명하면 다음과 같다.
 - Store : 모든 State를 저장하는 객체이다. 
 - Action의 dispatch : Action이 dispatch되면 State가 변경되는 계기를 발생시킨다.
 - Reducer : dispatch된 Action을 받아서 새로운 State를 반환한다. 새로운 State는 Store에 저장된다.
