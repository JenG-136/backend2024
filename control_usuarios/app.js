const express = require("express");

const app = express();

app.use(express.json());

const usuarios = [
    {
        id: 1,
        nombre: "Yeni",
        apellido: "Garcia",
        email: "Yenigarcia1515@gmail.com",
    },
    {
        id: 2,
        nombre: "Elda",
        apellido: "Garcia",
        email: "Eldagarcia1515@gmail.com",
    }
];

app.get("/usuarios", (req, res) => {
    res.status(200).json({ usuarios }); // Respuesta en formato JSON
});

app.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(400).json({ error: "El ID debe ser un número." });
    }

    const usuario = usuarios.find((usuario) => usuario.id === +id);

    if (!usuario) {
        return res.status(404).json({ error: `El usuario con ID ${id} no existe.` });
    }
    
    res.status(200).json(usuario);
});

// Agregar un nuevo usuario
app.post("/usuarios", (req, res) => {
    const { nombre, apellido, email } = req.body;

    // Validar que el nombre esté presente
    if (!nombre) {
        return res.status(400).send("El campo 'nombre' es obligatorio.");
    }

    // Validar que el apellido esté presente
    if (!apellido) {
        return res.status(400).send("El campo 'apellido' es obligatorio.");
    }

    // Validar que el email esté presente
    if (!email) {
        return res.status(400).send("El campo 'email' es obligatorio.");
    }

    // Validar que el email sea único
    const emailExiste = usuarios.some(usuario => usuario.email === email);
    if (emailExiste) {
        return res.status(400).send("El correo ya está registrado.");
    }
    usuarios.push = { id: usuarios.length + 1, nombre, apellido, email };
    res.status(201).send({ mensaje: 'El usuario se agregó correctamente', usuario: nuevoUsuario });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
