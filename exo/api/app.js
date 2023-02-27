// importation du module http
const http = require('http')
const express = require("express");
const cors = require("cors");
const Indexrouter = require("./router/index");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");
const bodyParser = require('body-parser');
const app = express() 

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/api', Indexrouter);
app.use(errorHandler);
app.all("*", (req, res, next) => {
next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});

const server = http.createServer(app);
const port = 3000;
app.set('port' , port)
server.on('listening' , ()=>{
    console.log('demarrage effectif du server ...')
});

server.listen(port)
module.exports = app;



