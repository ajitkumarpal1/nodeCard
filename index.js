var express = require('express');
var server = express();

var routes = require('./routes/routes')
var mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/newDB`, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    checkDB = () => {
        console.log("DB connected");
    }).catch((err) => {
        console.log("Error connecting to DB: " + err);
    });

server.use(cors());
server.use(express.json());
console.log("A1");

server.use(routes);

server.listen(process.env.PORT || 3000, (error) => {
    if (error) {
        console.log("Error starting server: " + error);
    } else {
        console.log("Server started");
    }
});
