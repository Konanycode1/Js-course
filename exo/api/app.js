// importation du module http
const http = require('http')
const express = require("express");
const cors = require("cors");
const Indexrouter = require("./router/index");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(errorHandler);
app.use(cors());
app.use('/', Indexrouter);
app.use('/create', Indexrouter);
app.use('/delete', Indexrouter);
app.use('/update', Indexrouter);
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

// maintenant je vais acceder à mon api sur postman
// le get passe bien 
// JE vais acceder avec le post pour faire mon ajoute à la base de donnée


// tu as demarer ton serveur 
// nonn 
// tues là ???????????
// const PORT = 3000;
// app.listen(PORT, () => {
//  console.log(`server running on port ${PORT}`);
// });


//creaion du serveur


// ton serveur à demarer donc je peux parce au verification maintenant

// ouais ouais tu peux mettre tes routes en place maintenant et tester
// ok merci 

