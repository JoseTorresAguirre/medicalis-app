import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white h-20 flex items-center">
      <div className="w-4/12 ">
        <Link
          to="/"
          className="text-[#307bc4] hover:text-blue-300 flex items-center mx-5"
        >
          <img
            src="https://imgur.com/j7fYcGd.png"
            alt="logo"
            className="h-15 w-15"
          />
          <h1 className="font-extrabold px-5 text-5xl">MEDICALIS</h1>
        </Link>
      </div>
      <div className="w-5/12 flex space-x-10 justify-start">
        <Link
          to="/"
          className="text-[#8395a4] hover:text-blue-300 font-extrabold"
        >
          Inicio
        </Link>
        <Link
          to="/Nosotros"
          className="text-[#8395a4] hover:text-blue-300 font-extrabold"
        >
          Sobre Nosotros
        </Link>
        <Link
          to="/Especialidades"
          className="text-[#8395a4] hover:text-blue-300 font-extrabold"
        >
          Especialidades
        </Link>
        <Link
          to="/Contacto"
          className="text-[#8395a4] hover:text-blue-300 font-extrabold"
        >
          Contacto
        </Link>
      </div>
      <div className="w-2/12 flex justify-end text-center ">
        <Link
          to="/AgendarCita"
          className=" bg-[#2e72b2] text-white hover:text-blue-300 h-10 w-60 rounded-2xl font-extrabold flex items-center justify-center"
        >
          Agendar mi cita
          <img
            src="https://imgur.com/lggRNgn.png"
            alt="flecha"
            className="h-5 w-10 px-2"
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
