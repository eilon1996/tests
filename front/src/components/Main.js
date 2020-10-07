import React from 'react';
import Registrate from './Registrate' 
import UploadImg from './UploadImg'
import Chat from './Chat' 
import {Switch, Route ,withRouter} from 'react-router'
import { Link } from 'react-router-dom';

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
                    <li>user 3</li><br/><br/>
                <Link to="/">Registrate</Link><br/>
                <Link to="/upload">Upload</Link>
                </ul>
            
            </div>
            <div className="main-page">
                <h1>main</h1>
                <Switch>
                    <Route path="/upload" component={() => <UploadImg/>}/>
                    <Route path="/" component={() => <Registrate/>}/>
                </Switch>
            </div>
        </div>
        <nav className="nav">
            <span>navbar</span>
        </nav>
    </div>
    );
}


export default withRouter(Main);