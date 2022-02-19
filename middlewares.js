const express = require ('express');
const loggerMiddlerware = require('./middlewares/logger')

const PORT = process.env.PORT || 8080;
const app = express();

//MIDDLEWARES
app.use(logger);
//app.use(express.urlencoded({extended: true}));



const connectedServer = app.listen( PORT, ()=>{
    console.log(`Server is up and runnig on port ${PORT}`);
});

connectedServer.on('error', (error)=>{
    console.log(error.message);
});