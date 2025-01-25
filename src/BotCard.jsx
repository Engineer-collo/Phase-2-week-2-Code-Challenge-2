import React from 'react';

const BotCard = ({ bot, handleClick, dischargeBot }) => {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Armor: {bot.armor}</p>
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
