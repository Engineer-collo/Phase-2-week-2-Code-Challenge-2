### Project Overview
Bot Battlr is a React application where users can:
-Browse a list of bots fetched from a local JSON server.
-Enlist bots into their personal army.
-Release bots from their army or permanently discharge them.
-This project demonstrates the use of React components, state management, props, event handling, and data fetching from a local server.




### View a collection of all bots.
-Add bots to your army by clicking on them (each bot can only be added once).
-Remove bots from your army by clicking on them in the army list.
-Permanently delete bots from the database with a red "x" button.
-Responsive design for various screen sizes.




### Technologies Used
Frontend: React.js
Backend: JSON Server
Styling: CSS




### Project set-up
 -Start by creating a react application by running the the below command.
 command : npm create vite@latest my-react-app -- --template react 
-then after the command navigate into the app created and run the below command to install the dependancies neeeded to build and run the application
command: npm install.
-after that create a db.json file and copy in the data provided. 
run the below command to start a local server
command json-server --watch db.json.
-after that run the below command again to display the project on the browser
connand: npm run dev
- run run the below command to initialize a local repository the leave it.
-go to github and create a new repository copy the linkung URL and paste it to the terminal
then run the below commant to add all the changes.
command git add .
then run the below command to to commit the changes made.
command: git commit -m 'first commit'
the run the below command to confirm the origin branch 
command: git branch
-After knowing the origin branch run the following command to commited changes to the origin repository on github
command: git push origin main/master




### App.js component set-up.
import useState and useEffect from react router dom, use the state to set up the initial display array as an empty array

const [bots, setBots] = useState([]);

use the useEffect to fetch data from the API and and the setter function will renew the state with the new data,
 
 useEffect(() => {
    fetch("http://localhost:3001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

make a prop and asign it the value of the current state, pass that prop to a BotsCollection component.

<BotCollection bots={bots} addToArmy={addToArmy} />





### BotsCollection component set up
Inside the BotsCollection component destruct the prop that was shared as a prop from the App.js
use the map function to disply the data tho the browser to be visible to users.

        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={() => addToArmy(bot)} />
        ))}




##