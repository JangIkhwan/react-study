import { useState } from "react";
import { useFetchUsers } from "./hooks/useFetchUsers";

export const App2 = ()=>{
    const { userList, isLoad, isError, onClickFetchUsers} = useFetchUsers();    
    
    return (
        <div>
            <button onClick={onClickFetchUsers}>사용자 정보 얻기</button>
            { isError && <p style={ { color : "red"} }>에러가 발생했습니다.</p> }
            { isLoad ? (
            <p>데이터를 가져오고 있습니다.</p>
            ) : ( 
                userList.map((user)=>(
                    <p key={user.id}>{`${user.id}: ${user.name} (${user.email})`}</p>
                )) 
            )}
        </div>
    );
};