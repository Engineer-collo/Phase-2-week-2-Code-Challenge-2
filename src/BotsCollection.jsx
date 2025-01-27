import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, addToArmy }) => {
  return (
    <div>
      <h2>The Bots Collection</h2>
      <div className="bot-collection">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={() => addToArmy(bot)} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
