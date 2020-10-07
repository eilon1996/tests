import React from 'react';
import Registrate from './Registrate' 
import UploadImg from './UploadImg'
import Chat from './Chat' 

const Main = () => {
    // for the examplewe willl have a blank page with h1 title
    // and we will have a navbar in the bottum of the screen 
    // on the left we will have options to open new chats
    return(
    <div className="main">
        <div className="above-nav">
            <div className="chater-list ">
                <ul>
                    <li className="list-header">users list</li>
                    <li>user 1</li>
                    <li>user 2</li>
                    <li>user 3</li>
                </ul>
            
            </div>
            <div className="main-page">
                <h1>main</h1>
                <UploadImg/>
            </div>
        </div>
        <nav className="nav">
            <span>navbar</span>
        </nav>
    </div>
    );
}


export default Main;