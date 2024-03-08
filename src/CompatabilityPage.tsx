import React, {useEffect, useState, FunctionComponent } from "react";
import { SessionUserProps, UserObj } from "./types";
import UserCard from "./userCard";
import { supabase } from "./supabase";
import {v4 as uuidv4} from 'uuid';

const CompatabilityPage: FunctionComponent<SessionUserProps> = ({user}) => {
    const[users, setUsers] = useState<UserObj[]>([]);
    const[myUser, setMyUser] = useState<UserObj>();
    useEffect(() => {
        getUserData();
    }, []);
    async function getUserData() {
        const { data } = await supabase.from("users").select("*");        
        if(data != null) {
            setMyUser(data.filter(u => u.user_id == user.id)[0]);
            let usersWithScore = data.map((user: UserObj) => (
                {...user,
                score: calculateScore(user)}
            ))
            usersWithScore = usersWithScore.filter(u => u.user_id != user.id)
            setUsers(handleSort(usersWithScore))
        } else {
            return;
        }
    }

    function calculateScore(user: UserObj) {
        return 25;
    }

    function handleSort (users: any, sortOrder=1) {
        if ((sortOrder !== 1 && sortOrder !== -1) || !users)
            return users;
        function compare ( a: UserObj, b: UserObj ) {
            if ( a.score < b.score ){
              return -1*sortOrder;
            }
            if ( a.score > b.score ){
              return 1*sortOrder;
            }
            return 0;
          }
          return users.sort( compare );
    }

    async function select(userCard: UserObj){
        console.log(myUser);
        if(!myUser)
            return;
        if(myUser.group_id == null) {
            const newGroupId = uuidv4();
            const res = await supabase
            .from("users")
            .update({group_id: newGroupId})
            .eq("user_id", myUser.user_id)
            .select()
            .single();
            myUser.group_id = newGroupId;
            if(res.error) {
                console.log(res.error)
            }
        }
        const res = await supabase
            .from("users")
            .update({group_id: myUser.group_id})
            .eq("user_id", userCard.user_id)
            .select()
            .single();
    }

    return (
        <div>
            <h1>Your Possible Partners:</h1>
            {
                users?.length > 0 ? (
                    <div className='container'>
                        {users.map((user: UserObj) => (
                            <UserCard key={user.user_id} user={user} select={select} />
                        ))}
                    </div>
                ) : (
                    <div><h2>No partners available.</h2></div>
                )
            }
        </div>
    );
}

export default CompatabilityPage;
