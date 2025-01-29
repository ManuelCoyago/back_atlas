import { z } from "zod";

// Esquema para validar un artículo completo
const articuloSchema = z.object({
  id: z.number().positive().int().optional(), // Opcional si se genera automáticamente
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  precio: z.number().positive("El precio debe ser un número positivo"),
  stock: z.number().int().nonnegative("El stock debe ser un número entero no negativo"),
  categoria: z.string().optional(), // Puede ser opcional
});

// Esquema para validar actualizaciones parciales de un artículo
const articuloParcialSchema = articuloSchema.partial();

// Función para validar un artículo completo
export const validarArticulo = (datos) => {
  try {
    const data = articuloSchema.parse(datos);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

// Función para validar un artículo parcialmente
export const validarParcial = (datos) => {
  try {
    const data = articuloParcialSchema.parse(datos);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
