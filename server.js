import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const app = express()


app.get('/', (req, res) => {
    res.send("<h1>Welcome To Our Shop App</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});