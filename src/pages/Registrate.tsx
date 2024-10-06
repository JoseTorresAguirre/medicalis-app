import React, { useState } from "react";
import InputForm from "../components/InputForm";
import { registerUser } from "../services/RegistrateServices";
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

const Registrate: React.FC = () => {
  const [user, setUser] = useState<User>({
    nombre: "",
    email: "",
    dni: "",
    password: "",
    celular: "",
    rol: "paciente",
    fecha_registro: "",
    fecha_nacimiento: "",
    direccion: "",
    sexo: "",
    especialidad: "usuario",
    imagen_perfil_url: "no-image.jpeg",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Aquí asignamos el DNI como password antes de registrar al usuario
      const userWithPassword = { ...user, password: user.dni };

      // Agrega este console.log para depurar
      console.log("Datos enviados:", userWithPassword);

      // Registrar el usuario con DNI como contraseña
      await registerUser(userWithPassword);
      setSuccess("Usuario registrado!!!");
      setError(null);
      setUser({
        nombre: "",
        email: "",
        dni: "",
        password: "",
        celular: "",
        rol: "paciente",
        fecha_registro: "",
        fecha_nacimiento: "",
        direccion: "",
        sexo: "",
        especialidad: "usuario",
        imagen_perfil_url: "no-image.jpeg",
      });
    } catch (error: any) {
      // Manejo de errores mejorado
      console.error("Error:", error); // Imprime el error completo en la consola

      if (axios.isAxiosError(error) && error.response) {
        // Verifica si el error proviene de axios y tiene una respuesta
        const errorMessage = error.response.data?.error || error.message;
        setError(`Error del servidor: ${errorMessage}`); // Muestra el mensaje de error en el frontend
      } else {
        // Si el error no es un error de Axios, muestra un mensaje genérico
        setError(`Error desconocido: ${error.message}`);
      }

      setSuccess(null);
    }
  };

  return (
    <div className="bg-[#c1def2] min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="bg-white h-[calc((100vh-80px)*2/3)] w-2/4 flex items-center justify-center rounded-2xl">
        <div className=" h-2/3 w-full">
          <div className="w-full flex items-center justify-center">
            <h2 className="text-5xl text-gray-400 font-extrabold my-4 ml-4">
              Nuevo Registro
            </h2>
            <hr className="flex text-gray-400  mb-4" />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <div className="flex w-3/4 h-full items-center justify-center">
                <div className="flex flex-col w-full mr-4">
                  <label className="mr-4">Tipo de Documento:</label>

                  <select className="border border-gray-300 rounded-md p-2">
                    <option>DNI</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <label className="mr-4">Documento:</label>

                  <InputForm
                    type="text"
                    name="dni"
                    value={user.dni}
                    onChange={handleChange}
                    required
                    placeholder="12345678"
                  />
                </div>
              </div>
              <div className="flex w-3/4 h-full items-center justify-center">
                <div className="flex flex-col w-full">
                  <label>Nombres y Apellidos:</label>
                  <InputForm
                    type="text"
                    name="nombre"
                    value={user.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Nombre y Apellido"
                  />
                </div>
              </div>
              <div className="flex w-3/4 h-full items-center justify-center">
                <div className="flex flex-col w-full mr-4">
                  <label>Fecha de Nacimiento:</label>
                  <InputForm
                    type="date"
                    name="fecha_nacimiento"
                    value={user.fecha_nacimiento}
                    onChange={handleChange}
                    required
                    placeholder="dd/mm/aaaa"
                  />
                </div>
                <div className="flex flex-col w-full mr-4">
                  <label>Genero:</label>
                  <select
                    name="sexo"
                    id="sexo"
                    value={user.sexo}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <option value="">Selecciona un genero</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <label>Celular:</label>
                  <InputForm
                    type="tel"
                    name="celular"
                    value={user.celular}
                    onChange={handleChange}
                    required
                    placeholder="999888777"
                  />
                </div>
              </div>
              <div className="flex w-3/4 h-full items-center justify-center mb-5">
                <div className="flex flex-col w-full mr-4">
                  <label>Correo Electronico:</label>
                  <InputForm
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                    placeholder="example@example.com"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label>Direccion:</label>
                  <InputForm
                    type="text"
                    name="direccion"
                    value={user.direccion}
                    onChange={handleChange}
                    required
                    placeholder="Av. Siempre Viva 666 - Springfield"
                  />
                </div>
              </div>
              <div className="flex w-1/4  items-center justify-center">
                <div className="flex flex-col w-full">
                  <button
                    type="submit"
                    className="bg-blue-950 rounded-xl text-white font-extrabold py-3"
                  >
                    Registrarse
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registrate;
