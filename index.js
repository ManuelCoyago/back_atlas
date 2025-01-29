import express from "express";
import cors from "cors"; // Importa CORS
import { EnrutadorArticulo } from "./routes/articulosRoutes.js";
import { EnrutadorUsuario } from "./routes/usuarioRouter.js";
import { EnrutadorCliente } from "./routes/clienteRouter.js";
import { Articulo } from "./models/Articulo.js";
import { UsuarioModel } from "./models/usuario.js";
import { Cliente } from "./models/cliente.js";
import connectDB from "./models/db.js";

const app = express();
const PORT = 3030;

// Conexión a la base de datos
connectDB();

// Configurar middleware
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Parseo de JSON en el body de las solicitudes

// Rutas
app.use("/api/articulos", EnrutadorArticulo(Articulo));
app.use("/api/usuarios", EnrutadorUsuario(UsuarioModel));
app.use("/api/clientes", EnrutadorCliente(Cliente));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
