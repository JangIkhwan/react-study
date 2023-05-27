import { useState } from "react";
 
export const App = ()=>{
    let str: string = "A";
    str = "10";
    //str = 10;

    let num: number = 0;
    num = 10;
    //num = "10";

    let bool : boolean = true;
    bool = false;
    //bool = 1;

    let arr1: Array<number> = [0, 1, 2];
    let arr2: number[] = [0, 1, 2];
    arr1.push(10);
    //arr1.push("10");
    arr2.push(10);
    //arr2 = 10;

    let null1: null 
    null1 = null;
    //null1 = 10;

    let undef1: undefined;
    undef1 = undefined;
    //undef1 = null;

    let any1: any;
    any1 = 10;
    any1 = false;
    any1 = null;
    any1 = undefined;

    const func1 = (num: number): void =>{
        console.log(num);
        //return num;
    }
    func1(10);
    //func1("10");
    //func1();

    let obj: { str: string, num: number} = {
        str : "A",
        num : 10
    };

    obj.str = "B";
    //obj.str = 10;
    obj.num = 20;
    //obj.num = "20";
    //obj = 10;

    let obj2: { str: string } & { num: number } = {
        str : "A",
        num : 10,
    };
    obj2.str = "10";
    //obj2.str = 10;
    obj2.num = 20;
    //obj2.num = "20";

    type TypeA = {
        str : string;
        num : number;
    }

    type TypeB ={
        str : string;
        bool : boolean;
    }

    type TypeC = TypeA & TypeB;

    const obj3: TypeC = {
        str : "A",
        num : 10,
        bool : true,
    };

    let val1: string | number;
    val1 = "";
    val1 = 10;
    //val1 = [];

    type CustomType<T> = {
        val : T;
    }

    let obj4: CustomType<string>;
    obj4 = {
        val : "A", 
    };

    // obj4 = {
    //     val : 10,
    // };

    let [strA, setstrA] = useState<string>("");
    
    //setstrA(10);
    

    return (
        <></>
    );
};