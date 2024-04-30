import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__heading">SANJEEV KUMAR</h1>
        <div className="app__profile">
          <img
            className="app__profileImage"
            src="https://via.placeholder.com/50"
            alt="Profile"
          />
          <button className="app__profileButton">Profile</button>
        </div>
      </header>

      <main className="app__dashboard">
        <button className="app__dashboardButton">Home</button>
        <button className="app__dashboardButton">Contact</button>
        <button className="app__dashboardButton">Chat</button>
        <button className="app__dashboardButton">Settings</button>
      </main>
    </div>
  );
}

export default App;