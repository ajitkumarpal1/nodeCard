var express = require('express');
var server = express();


var routes = require('./routes/routes')
var mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
console.log("aa>>",dbHost,dbUser,dbPassword);
/* mongodb+srv://<username>:<password>@<cluster-hostname>/<database>?retryWrites=true&w=majority */
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/newDB`, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    checkDB = () => {
        console.log("DB connected");
    }).catch((err) => {
        console.log("Error connecting to DB: " + err);
    });

/* mongodb://localhost:27017 */


server.use(cors());
server.use(express.json());
console.log("A1");

server.use(routes);

server.listen(3000, (error) => {
    if (error) {
        console.log("Error starting server: " + error);
    } else {
        console.log("Server started on port 8000");
    }
});