//import state and useEffect from react
import { useState,useEffect } from 'react'

function BotCollection() {
  const [bots, setBots] = useState([]);
  console.log(bots);
  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div className='App'>
      <h1>BotCollection</h1>
      <ul id="ul">
        {bots.map((bot) => (
          <li id="li" key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>name:{bot.name}</h3> <br/>
          <span> health: {bot.health} </span>  <br/>                
          <span> damage: {bot.damage} </span>  <br/>                                 
          <span> armor: {bot.armor} </span>   <br/> 
          <span> bot_class: {bot.bot_class} </span>  <br/>
          <span> catchphrase: {bot.catchphrase} </span>  <br/>
          <span> created_at: {bot.created_at} </span>  <br/>
          <span> updated_at: {bot.updated_at} </span>  <br/> 
         </li>
        ))}
      </ul>
    </div>
  )
}

export default BotCollection;