import React from 'react'
import Sidebar from './Sidebar';
import Channel from "./Channel";

const Main = () => {
    return (
        <div>
            <h1>Main</h1>
            <Sidebar></Sidebar>
            <Channel></Channel>
        </div>
    );
}

export default Main;