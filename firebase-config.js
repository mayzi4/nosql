// rebase-cong.js
const admin = require('firebase-admin');
const serviceAccount = require('./nosql-firebase-simple-firebase-adminsdk-fbsvc-c32e878a58'); // Make sure this matches your

// Initialize the Firebase Admin SDK with your service account credentials.
// This allows your Node.js server to securely interact with Firebase services.
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});
// Get a reference to the Firestore database.
const db = admin.firestore();
// Export the Firestore database instance so it can be used in other les (e.g., index.js).
module.exports = db;