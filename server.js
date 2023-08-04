const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send(<h1>Welcome To Our Shop App</h1>);
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
})