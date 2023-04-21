# 리액트를 사용하기 전에 알아야할 모던 자바스크립트 문법

## 1. let와 const
- 과거 자바스크립트에서는 var를 이용해서 변수를 선언했음.
- 그런데 var를 이용하면 변수의 값을 덮어 써서 의도치 않은 상황이 발생하거나, 같은 이름으로 변수를 재선언할 수 있어서 어떤 변수를 사용하는지 모호한 문제가 발생했음.
- 이러한 문제를 해결하기 위해서 let와 const를 도입함
- let는 덮어 쓰기는 가능하지만, 재선언이 불가능함
- const는 덮어 쓰기와 재선언 모두 불가능함

## 2. 화살표 함수 =>
- 다른 언어의 익명함수와 유사함
- 다음과 같은 식으로 작성하고, 변수에 저장해서 사용함.
  
    ```javascipt
   (매개변수) => { 함수 몸체 } 
    ```

- 다음과 같이 작성할 수도 있음

    ```javascript
    name => { console.log(name); } 
    
    name => console.log(name)
    ```

## 스프레드 구문 ...
- 배열 복사
    ```javascript
     const arr = [1, 2, 3, 4, 5];
     const copiedArr = [...arr];
    
    ```
- 배열 일부 추출
    ```javascript
    
    ```
- 

## map함수와 filter함수
- map함수
  
  ```javascript
  const arr = [1, 2, 3, 4, 5];
  const newArr = arr.map((num)=>{
     return num;
  }); 
  ```

- filter함수
    ```javascript
    const arr = [1, 2, 3, 4, 5]
    const oddArr = arr.filter((num)=>{
        return num % 2 == 1;
    });
    ```