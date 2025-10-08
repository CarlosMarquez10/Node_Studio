import express from "express";

const app = express();
const port = 3000;

// ruta de unicio
app.get('/', (req, res)=> {
    res.send("Servidor desde Express!");
});

// aqui vamos a iniciar el servidor
app.listen(port, () =>{
    console.log(`Sevidor escuchando en http://localhost:${port}`)
});




