import Header from './components/header.js';
import UserForm from './components/user.js';
import Game from './components/game.js';
import './App.css';
import { useState } from "react";
import GameSetup from './components/GameSetup'

function App() {
  const [user, setUser] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const handleUser = (text) =>{
    setUser(text);

  }

  return (
    <div className="App">
      <Header user={user} />
      <UserForm grabUser={handleUser} />
      {user ? <GameSetup /> : null}
      {user ? <Game /> : null}
    </div>
  );
}

export default App;
