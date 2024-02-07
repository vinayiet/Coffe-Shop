import React from 'react';

import './home.css'; // Import the CSS file for styling
import homepg from '../images/home.png';

const Home = () => {
    return (
        <div className="home">
            <img src={homepg} alt="Coffee Shop" className="image" />
            <div className="text-overlay">
                <h1>Welcome to Coffee Shop</h1>
                <p>Enjoy our delicious coffee and pastries</p>
            </div>
        </div>
    );
};

export default Home;
