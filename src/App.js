import './App.css';
import 'react-device-detect';
import { browserName } from 'react-device-detect';

function App() {
  //const name = 'Zen'
  const email = "zenisbestwolf@gmail.com"
  const twitter = "ZenIsBestWolf"
  const website = "https://zen.gay"
  
  return (
    <div>
      <h1>Hello {browserName} user.</h1>
      <h2>Here is some information about what we think your device might be. You can change this information by editting the browser agent.</h2>
      <p>No data is sent to any server, this is pure JS just doing it's thing (and a tool for the developer to learn how to use React).</p>
      <p>This user has Social Media.</p>
      <ul>
        <li>Twitter: <a href={`https://twitter.com/${twitter}`}>@{twitter}</a></li>
        <li>Email: <a href={`mailto:${email}`}>{email}</a></li>
        <li>Main Website: <a href={website}>Here</a></li>
      </ul>
    </div>
  );
}

export default App;
