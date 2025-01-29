import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController.js";

export const EnrutadorUsuario = (modelo) => {
  const controlador = new UsuarioController(modelo);
  const usuarioRouter = Router();

  usuarioRouter.get("/", controlador.getAll);
  usuarioRouter.get("/:id", controlador.getOneById);
  usuarioRouter.post("/", controlador.create);
  usuarioRouter.put("/:id", controlador.update);
  usuarioRouter.delete("/:id", controlador.delete);
  usuarioRouter.post("/login", controlador.login);


  return usuarioRouter;
};
