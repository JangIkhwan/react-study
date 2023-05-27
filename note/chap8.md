# 타입스크립트

## 타입스크립트
자바스크립트에 타입이 추가된 언어이다. 오늘날 리액트 프로젝트 대부분에서 채택되고 있는 언어이다. 실수로 인한 버그를 방지할 수 있고 개발 경험을 향상시킬 수 있다는 장점이 있다.

## 기본 타입

수치 
```jsx
let n: number = 10;
```

문자열 
```jsx
let s: string = "A";
```

불리언
```jsx
let b: boolean = true;
```

배열
```jsx

let arr: number[] = [ 1, 2, 3];
let arr: Array<number> = [ 1, 2, 3]; // 위의 코드와 동일 
```

null
```jsx
let n: null = null;
```

undefined
```jsx
let u: undefined = undefined;
```
- null이나 undefined가 단독으로 쓰이는 일은 거의 없다. 복합적으로 타입을 적용할 때 사용한다.

any
```jsx
let a: any = "A";
a = 1;
a = false;
```
- 어떤 값이든 저장할 수 있다. 타입스크립트의 본래 취지를 생각하면 사용하지 않는 것이 좋다. 레거시 코드를 타입스크립트로 변환하는 과정이나  변수의 타입을 결정하기 위해서 고민하는 단계에서 일시적으로 사용된다. 
  
객체
```jsx
let o: { str:string, num:number } = {
    str : "A",
    num : 10,
};
```
- 객체의 각 속성의 타입을 명시하면 된다. 변수의 타입에 맞지 않은 객체를 할당하면 에러가 발생한다.

함수의 타입

```jsx
const func = (num: number): void => {
    console.log(num);
}; 

func(10);
```
- 함수의 인수 타입과 반환 타입을 명시하면 된다. 타입추론 덕분에 void를 작성하지 않아도 되지만, 이를 명시해두면 함수 내부에서 return을 쓸 때 에러가 발생해서 실수를 방지할 수 있다.

복합타입
- 복합타입을 이용하면 새로운 타입을 만들 수 있다. `intersection`과 `union`이 있다.
  
1. intersection 
2. union

옵셔널 체이닝

