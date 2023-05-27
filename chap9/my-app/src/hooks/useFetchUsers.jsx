import { useState } from "react";
import axios from "axios";

export const useFetchUsers = ()=>{
    const [ userList, setUserList ] = useState([]);
    const [ isLoad, setIsLoad ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    
    const onClickFetchUsers = ()=>{
        setIsLoad(true);
        setIsError(false);

        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((result)=>{
            const users = result.data.map((user)=>(
                {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            ));

            setUserList(users);
        })
        .catch(()=>setIsError(true))
        .finally(()=>setIsLoad(false));
    };

    return { userList, isLoad, isError, onClickFetchUsers };
};