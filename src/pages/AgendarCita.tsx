import React from "react";
import { Link } from "react-router-dom";

const AgendarCita = () => {
  return (
    <div className="bg-[#c1def2] min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="bg-white rounded-2xl w-1/4">
        <div className="flex flex-col text-center justify-center ">
          <div className="flex flex-col justify-center h-2/6">
            <img
              src="https://imgur.com/j7fYcGd.png"
              alt="logo"
              className="h-40 w-40 mx-auto"
            />
            <h1 className="font-extrabold px-5 text-5xl text-[#307bc4]">
              MEDICALIS
            </h1>
            <p className="text-[#307bc4] text-xl">Ingrese sus datos.</p>
          </div>

          <div className="flex flex-col p-10 h-2/6">
            <label className="flex justify-start">Correo Electronico</label>
            <input
              type="text"
              placeholder="example@example.com"
              className="flex justify-center w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="flex justify-start">Contraseña</label>
            <input
              type="password"
              placeholder="*******"
              className="flex justify-center w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col h-2/6 text-center justify-center items-center">
            <Link
              to="/Nosotros"
              className="flex bg-[#2e72b2] text-white items-center justify-center hover:text-blue-300 font-extrabold rounded-xl h-10 w-5/6 mb-5"
            >
              Ingresar
            </Link>
            <Link
              to="/Registrate"
              className="flex bg-green-500 text-white items-center justify-center hover:text-blue-300 font-extrabold rounded-xl h-10 w-5/6 mb-5"
            >
              Registrate
            </Link>
            <div className="w-5/6 flex justify-end mb-10">
              <Link to="/Nosotros" className=" hover:text-blue-500">
                Recuperar contraseña
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendarCita;
