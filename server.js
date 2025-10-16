import express from "express";
import Inicio from "./src/routes/inicio.routes";

const app = express();
const port = 3000;

// ruta de unicio
use.get("/", Inicio) // ruta de inicio

// aqui vamos a iniciar el servidor
app.listen(port, () =>{
    console.log(`Sevidor escuchando en http://localhost:${port}`)
});




