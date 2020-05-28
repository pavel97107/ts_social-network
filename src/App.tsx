import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Messages/Dialogs.Container";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      <div className='wrapper-content'>
          <Route path={'/Profile'} render={() => <Profile />}/>
          <Route path={'/News'} render={() => <div>News</div>}/>
          <Route path={'/Settings'} render={() => <div>News</div>}/>
          <Route path={'/Music'} render={() => <div>News</div>}/>
          <Route path={'/Users'} render={() => <div>News</div>}/>
          <Route path={'/Message'} render={() => <DialogsContainer />}/>
      </div>
    </div>
  );
}

export default App;
