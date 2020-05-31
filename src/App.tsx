import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Messages/Dialogs.Container";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <NavBar/>
            <div className='wrapper-content'>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/news'} render={() => <div>News</div>}/>
                <Route path={'/settings'} render={() => <div>News</div>}/>
                <Route path={'/music'} render={() => <div>News</div>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/message'} render={() => <DialogsContainer/>}/>
            </div>
        </div>
    );
}

export default App;
