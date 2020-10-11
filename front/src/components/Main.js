import React, { useState } from 'react';
import Registrate from './Registrate'
import UploadImg from './UploadImg'
import Chat from './Chat'
import { Switch, Route, withRouter } from 'react-router'
import { Link } from 'react-router-dom';

const Main = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [chatId, setChatId] = useState(-1)

    const ContectList = () => {
        //create dummy contacts
        const arr = [...Array(50).keys()];
        return (
            <ul>
                {arr.map((i) => (
                    <li onClick={() => setChatId(i)}>user {i}</li>
                ))}
            </ul>
        );
    }

    return (
        <div className={"main-" + (isSideBarOpen ? "expand" : "collapse") + "-" + (chatId >= 0 ? "expand" : "collapse")}>
            <div className={"side-bar-" + (isSideBarOpen ? "expand" : "collapse") + "-" + (chatId >= 0 ? "expand" : "collapse")}>
                <ContectList />
                <Link to="/">Registrate</Link><br />
                <Link to="/upload">Upload</Link><br />
                <Link to="/chat">chat</Link>
            </div>

            <div className={"chat-"+ (chatId >= 0 ? "expand" : "collapse")}>
                <header className="chat-header">
                    <span>user name</span>
                    <button className="chat-button">=</button>
                    <button className="chat-button" 
                    onClick={() => {setChatId(-1); setIsSideBarOpen(false)}}>x</button>
                </header>
                chat
            </div>
            <Switch>
                <Route path="/upload" component={() => <UploadImg />} />
                <Route path="/" component={() => <Registrate />} />
                <Route path="/chat" component={() => <Chat />} />
            </Switch>
            <nav className="nav">
                <button className="open-chat" onClick={() => setIsSideBarOpen(!isSideBarOpen)}>open</button>
                <span className="nav-the-rest">navbar</span>
            </nav>
        </div>
    );
}


export default withRouter(Main);