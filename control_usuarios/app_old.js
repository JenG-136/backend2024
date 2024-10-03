const express = require('express');

const app= express();

app.get("/", (req,res) =>{
    res.status(200).send("Hola Mundo! ---  Bangtan Sonyeodan"); // elemento para dar respuesta el get
}); //GET para obtener informacion 

app.get("/prueba", (req,res) =>{
    res.status(200).send("Hola Mundo! ---  Bangtan Sonyeodan---desde la ruta de prueba"); // elemento para dar respuesta el get
}); //GET para obtener informacion 

app.post("/", (req,res) =>{
    res.status(200).send("Hola desde POST"); // elemento para dar respuesta el push
}); // POST se utiliza para crear nuevo recurso o acceder a un nuevo recursos

app.put("/", (req,res) =>{
    res.status(200).send("Hola desde PUT"); // elemento para dar respuesta el put -- para enviar datos
}); //PUT se utiliza para actualizar un recursos 

app.patch("/", (req,res) =>{
    res.status(200).send("Hola desde PATCH"); // elemento para dar respuesta el get
}); //PATCH tambien pero a diferencia que se realiza un actualizacion parcial a diferencia con put 

app.delete("/", (req,res) =>{
    res.status(200).send("Hola desde DELETE"); // elemento para dar respuesta el get
}); //DELETE se usa para eliminar recurso--- de campo actico a inactivo

app.listen(3000,() =>{
    console.log("Servidor corriendo en https://localhost:3000");
});//callback es una funcion que pasa el parametro al listen
