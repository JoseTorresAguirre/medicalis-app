import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Especialidades from "./pages/Especialidades";
import Contacto from "./pages/Contacto";
import AgendarCita from "./pages/AgendarCita";
import Registrate from "./pages/Registrate";
import NavBar from "./components/NavBar";
import "./css/medicalis.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Especialidades" element={<Especialidades />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/AgendarCita" element={<AgendarCita />} />
          <Route path="/Registrate" element={<Registrate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
