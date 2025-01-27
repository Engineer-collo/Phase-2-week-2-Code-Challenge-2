import React from 'react';

const BotCard = ({ bot, handleClick, dischargeBot }) => {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>Name:{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Armor: {bot.armor}</p>
      <p>Damage: {bot.damage} </p>
      <p>Bot_class: {bot.bot_class} </p>
      <p>created_at: {bot.created_at} </p>
      <p>updated_at: {bot.updated_at} </p>



      {dischargeBot && (
        <button onClick={(e) => { 
          e.stopPropagation(); 
          dischargeBot(); 
        }}>x</button>
      )}
    </div>
  );
};

export default BotCard;
