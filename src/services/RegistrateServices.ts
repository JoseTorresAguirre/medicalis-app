import axios from "axios";

interface User {
  nombre: string;
  email: string;
  dni: string;
  password: string;
  celular: string;
  rol: string;
  fecha_registro: string;
  fecha_nacimiento: string;
  direccion: string;
  sexo: string;
  especialidad: string;
  imagen_perfil_url: string;
}

const API_URL = "http://localhost:5000/register";

export const registerUser = async (user: User) => {
  try {
    const response = await axios.post(API_URL, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      // El servidor respondió con un código de estado diferente a 2xx
      console.error("Error del servidor:", error.response.data);
      throw new Error(
        `Error del servidor: ${
          error.response.data.message || error.response.statusText
        }`
      );
    } else if (error.request) {
      // La solicitud fue hecha, pero no hubo respuesta
      console.error("No hubo respuesta del servidor:", error.request);
      throw new Error("No hubo respuesta del servidor. Intenta más tarde.");
    } else {
      // Ocurrió un error al configurar la solicitud
      console.error("Error en la solicitud:", error.message);
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }
};
