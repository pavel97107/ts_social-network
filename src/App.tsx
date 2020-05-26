import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <NavBar />
      <div className='wrapper-content'>
        Content
      </div>
    </div>
  );
}

export default App;
