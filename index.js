const express = require('express'); // This line imports the Express library.
const app = express(); // This line creates an Express application.
port = 8000; // This line defines the port number that the application will listen on.
const expressLayout = require('express-ejs-layouts'); // This line imports the express-ejs-layouts library, which allows us to use EJS templates with Express.
app.use(expressLayout); // This line registers the express-ejs-layouts middleware with the application.
const db = require('./config/mongoose'); // This line imports the database configuration file.
//const TodoLists = require('./models/todo_list'); // This line imports the TodoList model file.
// it is use to handle middle ware here we are using express.urlenceode to us e the parser
app.use(express.urlencoded()) // This line registers the express.urlencoded middleware with the application. This middleware parses the URL-encoded data in the request body and makes it available in the req.body object.
app.use('/',require('./routes')); // This line registers the routes file with the application.
app.use(express.static('./assets')); // This line registers the assets folder with the application. This allows us to serve static files from the assets folder.
app.set('layout extractStyles',true); // This line tells Express to extract the CSS styles from the EJS templates.
app.set('layout extractScripts',true); // This line tells Express to extract the JavaScript scripts from the EJS templates.
app.set('view engine','ejs'); // This line tells Express to use EJS templates for rendering views.
app.set('views','./views'); // This line tells Express where to look for EJS templates.
app.listen(port,function(err){ // This line listens on the port number specified by the port variable.
if(err){
console.log(error in running the ${port})
return;
}
console.log(Server is running @ ${port})
})
