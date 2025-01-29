import mongoose from "mongoose";

const ArticuloSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
});

export const ArticuloModel = mongoose.model("Articulo", ArticuloSchema);


export class Articulo {
  static async getAll() {
    return await ArticuloModel.find();
  }

  static async getOneById(id) {
    return await ArticuloModel.findOne({ id });
  }
  
  

  static async delete(id) {
    const eliminado = await ArticuloModel.findByIdAndDelete(id);
    return eliminado !== null;
  }

  static async create(data) {
    const nuevoArticulo = new ArticuloModel(data);
    return await nuevoArticulo.save();
  }

  static async update(id, data) {
    const articuloActualizado = await ArticuloModel.findByIdAndUpdate(id, data, { new: true });
    if (!articuloActualizado) {
      throw new Error("Artículo no encontrado");
    }
    return articuloActualizado;
  }
}
