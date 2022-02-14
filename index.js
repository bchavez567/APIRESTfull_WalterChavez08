const express = require ('express');
const PORT = process.env.PORT || 8080;

const app = express();

app.get('/api', (req, res)=>{
    res.json({message: "Hola mundo desde express"});
});

app.get('/api/productos', (req , res) =>{
    
})
app.get('/api/productos/:id', (req , res) =>{
    
})

const connectedServer = app.listen( PORT, ()=>{
    console.log(`Server is up and runnig on port ${PORT}`);
});

connectedServer.on('error', (error)=>{
    console.log(error.message);
});