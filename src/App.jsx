import React from 'react';
import './App.css';
// import SignIn from './Components/Login'
import LoginInput from './Components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            <LoginInput/>
        </p>
      </header>
    </div>
  );
}

export default App;