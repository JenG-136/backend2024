const express = require("express");

const app = express();

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

app.get("/usuarios", (req,res) =>{
    res.status(200).send({usuarios}); // elemento para dar respuesta el get
}); //GET para obtener informacion 

app.get("/usuarios/:id", (req,res) =>{
    const {id}= req.params;
    //console.log(params);
    const usuario = usuarios.find((usuario) => usuario.id === +id);

    res.status(200).send(usuario);
});

app.listen(3000,() =>{
    console.log("Servidor corriendo en https://localhost:3000");
});//callback es una funcion que pasa el parametro al listen
