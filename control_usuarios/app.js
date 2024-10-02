const express = require('express');

const app= express();

app.get("/", (req,res) =>{
    res.status(404).send("Hola Mundo! ---  Bangtan Sonyeodan"); // elemento para dar respuesta el get
});

app.listen(3000,() =>{
    console.log("Servidor corriendo en https://localhost:3000");
});//callback es una funcion que pasa el parametro al listen
