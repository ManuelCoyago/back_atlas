import { Router } from "express";
import { ArticuloController } from "../controllers/ArticuloController.js";

export const EnrutadorArticulo = (modelo) => {
  // Crear una instancia de ArticuloController con el modelo
  const controlador = new ArticuloController(modelo);
  const articuloRouter = Router();

  articuloRouter.get("/", controlador.getAll);
  articuloRouter.get("/:id", controlador.getOneById);
  articuloRouter.delete("/:id", controlador.delete);
  articuloRouter.post("/", controlador.create);
  articuloRouter.put("/:id", controlador.update);

  return articuloRouter;
};
