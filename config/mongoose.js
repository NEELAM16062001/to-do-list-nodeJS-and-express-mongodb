const mongoose = require('mongoose'); // This line imports the Mongoose library.

mongoose.connect('mongodb://localhost/todo_list_db'); // This line connects to the MongoDB database named "todo_list_db".

const db = mongoose.connection; // This line gets the Mongoose connection object.

// This code listens for the error event and logs the error to the console.
db.on('error', console.error.bind(console, 'Error connecting to db'));

// This code listens for the open event and logs a message to the console when the connection is successful.
db.once('open', function() {
console.log('Successfully connected to the database');
})
