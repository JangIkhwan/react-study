import { useState } from "react";
import axios from "axios"; // 누락

export const App = ()=>{
    const [ userList, setUserList ] = useState([]);
    const [ isLoad, setIsLoad ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    
    const onClickFetchUsers = ()=>{
        setIsLoad(true);
        setIsError(false); //
        
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        //.get("https://example.com")
        .then( (result)=>{
            const users = result.data.map((user)=> (
                    { id: user.id, 
                        name: user.name, 
                        username: user.username, 
                        email : user.email }
            ));

            setUserList(users);
        })
        .catch(() => setIsError(true))
        .finally( () => setIsLoad(false));
    };

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