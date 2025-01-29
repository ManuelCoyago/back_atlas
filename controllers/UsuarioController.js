import { UsuarioModel } from "../models/usuario.js";

export class UsuarioController {
  constructor() {
    this.modelo = UsuarioModel;
  }

  getAll = async (req, res) => {
    try {
      const usuarios = await this.modelo.find();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener usuarios" });
    }
  };

  getOneById = async (req, res) => {
    try {
      const usuario = await this.modelo.findById(req.params.id);
      if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json(usuario);
    } catch (error) {
      res.status(400).json({ error: "ID no válido" });
    }
  };

  create = async (req, res) => {
    try {
      const nuevoUsuario = new this.modelo(req.body);
      const usuarioGuardado = await nuevoUsuario.save();
      res.status(201).json(usuarioGuardado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const usuarioActualizado = await this.modelo.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!usuarioActualizado) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json(usuarioActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const eliminado = await this.modelo.findByIdAndDelete(req.params.id);
      if (!eliminado) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: "ID no válido" });
    }
  };

  login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    try {
      const usuario = await this.modelo.findOne({ username, password });

      if (!usuario) {
        return res.status(401).json({ error: "Credenciales inválidas" });
      }

      res.status(200).json({ message: "Login exitoso", usuario });
    } catch (error) {
      console.error("Error en el login:", error.message);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  };
}
