import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/home';
import { Button } from '@mui/material';
import Navbar from './components/navbar';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/jokes');
        setJokes(response.data);
        console.log("Frontend connected to backend successfully!");
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
        <header className="App-header">
          <p>Here are some jokes!</p>
          <div>
            {jokes.map((joke, index) => ( 
              <p key={index}>{joke}</p>
            ))}
          </div>
        </header>
       
      </div>
    </Router>
  );
}

export default App;
