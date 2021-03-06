const express = require ('express');
const path = require('path');
const apiRoutes = require('./routers/index');


const PORT = process.env.PORT || 8080;
const app = express();

//MIDDLEWARES
app.use(express.static('public'));
//app.use(express.urlencoded({extended: true}));

//ROUTES
app.use('/api' , apiRoutes);

const connectedServer = app.listen( PORT, ()=>{
    console.log(`Server is up and runnig on port ${PORT}`);
});

connectedServer.on('error', (error)=>{
    console.log(error.message);
});