import type { User } from "../types/User";
import type { FC } from "react";

//export const ListItem = (props: User) =>{
export const ListItem: FC<User> = props =>{
    //const {id, name, email, phone="0"} = props;
    const {id, name, email, phone, hobbies} = props;

    const colors: string[] = ["red", "orange", "yellow", "green", "blue", "purple", "magenta", "cyan", "pink", "red"];
    const index = parseInt(phone[phone.length - 1]); // ?:string을 사용하면 string | undef 자료형이 되어서 이 부분에서 오류 발생
    
    // 즉시 실행이 종료되고 undefined 반환
    console.log(hobbies?.join(" / "));
    return (
        <p style={ { color : colors[index]} }>
            {id} : {name} ( {email} ) {phone} : {hobbies?.join(" / ")}
        </p>
    );
};