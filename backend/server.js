import express from 'express';
import cors from 'cors';
// Create express app
const app = express();
// Port created to run the server on
const port = 3000;


app.get('/', (req, res) => {
    res.send(jokes);
});
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the bicycle fall over? Because it was two-tired!"
];


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
