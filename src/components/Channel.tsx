import React from 'react'
import Message from "./Message";
import User from "../model/User";
import Chat from "../model/Chat";

const Channel = () => {
    const user = new User("yamada",
        "https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png")
    const chat = new Chat("hi, I'm yamada.", new Date())

    return (
        <div>
            <h1>Channel</h1>
            <Message user={user} chat={chat}/>
        </div>
    );
}

export default Channel;