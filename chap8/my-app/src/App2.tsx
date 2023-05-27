import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/User";

export const App2 = ()=>{
    const [users, setUsers] = useState<User[]>([]);

    useEffect(()=>{
        axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUsers(res.data);
        })
    }, []);

    return (
        <div>
            {users.map((user)=>{
               return <ListItem id={user.id}  name={user.name} email={user.email} phone={user.phone} hobbies={user.hobbies}></ListItem>; 
            })}
        </div>
    );
};