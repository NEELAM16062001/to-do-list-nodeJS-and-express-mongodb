const mongoose = require('mongoose'); // This line imports the Mongoose library.

const todoSchema = new mongoose.Schema({ // This line creates a new Mongoose schema.
desc: { // This field defines the description of the todo list.
type: String, // The type of the field is String.
required: true // This field is required.
},
category: { // This field defines the category of the todo list.
type: String, // The type of the field is String.
required: true // This field is required.
},
dueDate: { // This field defines the due date of the todo list.
type: String, // The type of the field is String.
required: true // This field is required.
}
});

const TodoLists = mongoose.model('TodoLists', todoSchema); // This line creates a Mongoose model named TodoLists.

module.exports = TodoLists; // This line exports the TodoLists model.
