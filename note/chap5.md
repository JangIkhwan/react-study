# 리액트 CSS

## 1. inline styles

JS의 객체 형태로 CSS 속성과 값을 지정한 다음에 태그의 style 속성에 설정하는 방식이다.

```jsx
export const Comp = ()=>{
    const pStyle = {
        color : "red",
        size : "20px",
    };

    return (
        <div style={{width:"100%", padding: "16px"}}> 
            <p style={pStyle}></p>
        </div>
    );
};
``` 

사용시 주의 사항
- 속성명은 캐멀케이스로 작성한다. ex> textAlign
- 값은 문자열이나 수치이다. ex> color : "10px"
- 너무 많이 쓰면 복잡해질 수 있다. 이후에 나오는 방법을 사용하는 것이 나을 수도 있다.

## 2. CSS Modules

기존의 CSS 작성법과 유사하며, 디자이너와 같이 협업할 때 효과를 볼 수 있는 방법이다. 컴포넌트 파일마다 CSS파일을 작성할 수 있다.

다음과 같이 sass 모듈을 설치해야 한다.

```
 npm install sass
```

컴포넌트에 대응되는 CSS 파일의 이름은 '파일명.module.scss'로 작성한다. 확장자는 .css나 .scss 모두 가능하다. 스타일은 scss 표기법을 이용해서 작성한다.


  ```css
  /* Comp.module.scss*/
  .title{
    size : 100px;
    color : red;
    &:hover{
        color : black;
    }
  }
  ```

컴포넌트 파일에서는 CSS를 원하는 이름으로 임포트할 수 있다. 스타일을 적용할 태그의 className 속성에 적절한 클래스를 설정하면 된다.

```jsx
// Comp.jsx
import classes from "Comp.module.scss" 
export const Comp=()=>{
    return(
        <>
            <p className={classes.title}>Comp</p>
        </>
    )
};

```

장점
- 기존의 CSS 작성법과 유사하다.
- CSS 클래스 명의 스코프가 해당 컴포넌트로 한정된다. 다른 컴포넌트에 동일한 이름의 클래스가 있어도 충돌이 일어나지 않아서 이름을 짓는데 많은 노력을 들이지 않아도 된다.
  

## 2. Styled JSX
    컴포넌트 파일에서 CSS 스타일을 작성하는 방법이다. 자주 쓰이지는 않지만, 리액트 프레임워크인 Next.js에 내장된 라이브러리이다.

    다음과 같이 모듈을 설치해야 한다.

```
npm install styled-jsx
```

스타일은 CSS-In-JS 방식으로 작성한다. return 이하를 Fragment로 감싸고, 그 안에 <style jsx> 태그를 추가한다. 스타일은 백쿼트 사이에 작성한다. 스타일을 적용할 태그에는 ClassName에 클래스명을 설정하면 된다.  
```jsx
export const Comp = ()=>{
    return(
        <>
            <p className="title">Comp</p>
            <style jsx>{`
            .title{
                size : 100px;
                color : red;
            }
            `}</style>
        </>
    );
}

```
주의할 점
- 기본적으로 scss 표기법을 사용할 수 없다. 별도의 라이브러리를 설치해야 한다.
- 순수 리액트 프로젝트에 억지로 사용하는 것보다는 Next.js 프로젝트에 사용하는 것이 더 적절하다.