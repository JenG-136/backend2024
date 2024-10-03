const express = require("express");

const app = express();
app.get("/usuarios", (req,res) =>{
    const usuarios=[

    {
        id:1,
        nombre:"Yeni",
        apellido: "Garcia",
        email: "Yenigarcia1515@gmail.com",
    },
    {
        id:2,
        nombre:"Elda",
        apellido: "Garcia",
        email: "Eldagarcia1515@gmail.com",

    }
    ]
    res.status(200).send(usuarios); // elemento para dar respuesta el get
}); //GET para obtener informacion 

app.listen(3000,() =>{
    console.log("Servidor corriendo en https://localhost:3000");
});//callback es una funcion que pasa el parametro al listen
