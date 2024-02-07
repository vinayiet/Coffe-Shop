import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';

// Create express app
const app = express();

// Port created to run the server on
const port = 3000;

app.use(cors());
connectDB();

app.get('/', (req, res) => {
    res.send("Hello, this is the backend");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
