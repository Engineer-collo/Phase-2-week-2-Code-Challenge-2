import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, removeFromArmy, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => removeFromArmy(bot)}
            dischargeBot={() => dischargeBot(bot.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
