// index.js
const express = require('express'); // Import the Express framework
const path = require('path'); // Import the path module for working with le paths
const db = require('./firebase-config'); // Import the Firestore database instance from
const app = express(); // Create an Express application instance
// Middleware to parse JSON bodies from incoming requests.
// This is necessary to read data sent from the frontend.
app.use(express.json());
// Middleware to serve static les from the 'public' directory.
// When a browser requests a le (like index.html), Express will look for it here.
app.use(express.static('public'));
// Dene a POST API endpoint for '/users'.
// This endpoint will handle requests to save user data to Firestore.
app.post('/users', async (req, res) => {
try {
// Destructure 'name' and 'email' from the request body.
const { name, email } = req.body;
// Add a new document to the 'users' collection in Firestore.
// The 'add' method automatically generates a unique ID for the document.
const docRef = await db.collection('users').add({ name, email });
// Send a success response with the ID of the newly created document.
res.status(201).json({ id: docRef.id });
} catch (err) {
// If an error occurs, send an error response with the error message.
res.status(400).json({ error: err.message });
}
});
// Dene the port on which the server will listen.
const PORT = 3000;
// Start the Express server and listen for incoming requests on the specied port.
app.listen(PORT, () => {
console.log(`✅ Server running at http://localhost:${PORT}`);
});