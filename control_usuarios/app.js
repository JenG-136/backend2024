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

// Obtener todos los usuarios
app.get("/usuarios", (req, res) => {
    res.status(200).json({ usuarios });
});

// Obtener usuario por ID
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

// Crear un nuevo usuario
app.post("/usuarios", (req, res) => {
    const { nombre, apellido, email } = req.body;

    // Verificar que todos los campos estén presentes
    if (!nombre || !apellido || !email) {
        return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    // Validar que el email sea único
    const emailExiste = usuarios.some(usuario => usuario.email === email);
    if (emailExiste) {
        return res.status(400).json({ error: "El correo ya está registrado." });
    }

    // Agregar nuevo usuario
    usuarios.push({ id: usuarios.length + 1, nombre, apellido, email });
    res.status(201).json({ mensaje: "El usuario se agregó correctamente." });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
