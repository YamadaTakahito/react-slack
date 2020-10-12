import React from 'react'
import User from "../model/User";
import Chat from "../model/Chat";

interface MessageProps {
    user: User;
    chat: Chat;
}

const Message = (props: MessageProps) => {
    return (
        <div>
            <img src={props.user.icon}/>
            <span>{props.user.name}</span>
            <p>{props.chat.text}</p>
        </div>
    );
}

export default Message;