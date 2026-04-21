const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} request made to: ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send("Welcome to Route Handling!");
});

app.get('/about', (req, res) => {
    res.send("<h1>About Us</h1><p>We are learning Express routing!</p>");
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Viewing Product ID: ${id}`);
});

app.get('/search', (req, res) => {
    const term = req.query.q;
    if (!term) {
        res.send("Please provide a search term (e.g., /search?q=phone)");
    } else {
        res.send(`Searching for: ${term}`);
    }
});

app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});