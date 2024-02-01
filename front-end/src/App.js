import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    try {
      axios.get('http://localhost:3000/api/jokes')
        .then(res => setJokes(res.data)) 
        .catch(err => console.log(err));
        console.log("finally front end is connected to backend")
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Here are some jokes!</p>
        <p>
        {jokes.map((joke, index) => ( 
            <p key={index}>{joke}</p>
          ))}
          
        </p>
        
      </header>
    </div>
  );
}

export default App;
