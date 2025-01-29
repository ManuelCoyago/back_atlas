
export class ArticuloController {
  constructor(modelo) {
    this.modelo = modelo;
  }

  getAll = async (req, res) => {
    try {
      const articulos = await this.modelo.getAll();
      res.json(articulos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getOneById = async (req, res) => {
    try {
      const articulo = await this.modelo.getOneById(req.params.id);
      if (!articulo) {
        return res.status(404).json({ error: "Artículo no encontrado" });
      }
      res.json(articulo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  create = async (req, res) => {
    try {
      const nuevoArticulo = await this.modelo.create(req.body);
      res.status(201).json(nuevoArticulo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const articuloActualizado = await this.modelo.update(req.params.id, req.body);
      res.json(articuloActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const eliminado = await this.modelo.delete(req.params.id);
      if (!eliminado) {
        return res.status(404).json({ error: "Artículo no encontrado" });
      }
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}
