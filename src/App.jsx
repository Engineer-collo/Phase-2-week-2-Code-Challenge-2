import YourBotArmy from './YourArmy';
import './App.css';
import BotCollection from './BotsCollection';
import React, { useState, useEffect } from 'react';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:3001/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setBots(bots.filter((bot) => bot.id !== botId));
        setArmy(army.filter((b) => b.id !== botId));
      });
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} addToArmy={addToArmy} />
    </div>
  );
}

export default App;
