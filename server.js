const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sample content for demonstration
const contentItems = [
    { title: "Product 1", description: "Description for product 1" },
    { title: "Product 2", description: "Description for product 2" },
    { title: "Product 3", description: "Description for product 3" },
    // Add more content items as needed
];

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' directory

// Search endpoint
app.get('/search', (req, res) => {
    const query = req.query.q ? req.query.q.toLowerCase() : '';
    if (!query) {
        return res.json([]);
    }

    const results = contentItems.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );

    res.json(results);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
