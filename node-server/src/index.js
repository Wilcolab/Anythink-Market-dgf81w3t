const express = require('express');

const app = express();
const PORT = 8001;

// Middleware for parsing JSON requests
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
