const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static('public'));

// Helper function to update HTML file
function updateHtmlFile(replacePattern, replacement, res) {
    fs.readFile(__dirname + '/public/index.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }

        const updatedData = data.replace(replacePattern, replacement);

        fs.writeFile(__dirname + '/public/index.html', updatedData, 'utf8', (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }
            res.send('Profile updated successfully');
        });
    });
}

// Endpoint to update Username
app.post('/update-username', (req, res) => {
    const { Key, Username } = req.body;

    if (Key !== 'DevKey') {
        return res.status(403).send('Forbidden: Invalid Key');
    }

    if (!Username) {
        return res.status(400).send('Bad Request: Username is required');
    }

    updateHtmlFile(/<p><strong>Username:<\/strong>.*?<\/p>/, `<p><strong>Username:</strong> ${Username}</p>`, res);
});

// Endpoint to update Age
app.post('/update-age', (req, res) => {
    const { Key, Age } = req.body;

    if (Key !== 'DevKey') {
        return res.status(403).send('Forbidden: Invalid Key');
    }

    if (!Age) {
        return res.status(400).send('Bad Request: Age is required');
    }

    updateHtmlFile(/<p><strong>Age:<\/strong>.*?<\/p>/, `<p><strong>Age:</strong> ${Age}</p>`, res);
});

// Endpoint to update Email
app.post('/update-email', (req, res) => {
    const { Key, Email } = req.body;

    if (Key !== 'DevKey') {
        return res.status(403).send('Forbidden: Invalid Key');
    }

    if (!Email) {
        return res.status(400).send('Bad Request: Email is required');
    }

    updateHtmlFile(/<p><strong>Email:<\/strong>.*?<\/p>/, `<p><strong>Email:</strong> ${Email}</p>`, res);
});

// Endpoint to update Hobbies
app.post('/update-hobbies', (req, res) => {
    const { Key, Hobbies } = req.body;

    if (Key !== 'DevKey') {
        return res.status(403).send('Forbidden: Invalid Key');
    }

    if (!Hobbies) {
        return res.status(400).send('Bad Request: Hobbies are required');
    }

    updateHtmlFile(/<p><strong>Hobbies:<\/strong>.*?<\/p>/, `<p><strong>Hobbies:</strong> ${Hobbies}</p>`, res);
});

// Serve the 404 page for any undefined routes
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});