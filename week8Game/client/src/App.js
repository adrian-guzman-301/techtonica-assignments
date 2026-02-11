import Header from './components/header.js';
import UserForm from './components/user.js';
import Game from './components/game.js';
import './App.css';
import { useState } from "react";
import GameSetup from './components/GameSetup'

function App() {
  const [user, setUser] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(10);
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState('easy');
  const [questionType, setQuestionType] = useState('boolean');
  const handleUser = (text) => {
    setUser(text);
  }
  const handleStartGame = () => {
  setGameStarted(true)
  }

  return (
    <div className="App">
      <Header user={user} />
      <UserForm grabUser={handleUser} />
      {user && !gameStarted ? <GameSetup onStartGame={handleStartGame}/> : null}
      {user && gameStarted ? <Game /> : null}
    </div>
  );
}

export default App;
