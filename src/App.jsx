import YourBotArmy from './YourArmy';
import './App.css';
import BotCollection from './BotsCollection';
import React, { useState, useEffect } from 'react';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  
// fetching data from the backend.
  useEffect(() => {
    fetch("https://bots-si0g.onrender.com/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  //adding bot to the army list
  const addToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  //removing the bot from the army list
  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  //delete the bot permanently on the backend.
  const dischargeBot = (botId) => {
    fetch(`https://bots-si0g.onrender.com/bots/${botId}`, { method: 'DELETE' })
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
