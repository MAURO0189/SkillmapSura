import React, { useState } from "react";
import basedatosrutas from "../utils/basedatosrutas.json";
import Swal from "sweetalert2";

function Home() {
  const [usuario, setUsuario] = useState("");
  console.log(basedatosrutas);

  const mostrarModalBienvenida = () => {
    Swal.fire({
      title: `¡Bienvenido, ${usuario}!`,
      text: "Gracias por iniciar sesión",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  };

  return (
    <>
      <h1>Ruta de Aprendizaje</h1>
      <br />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {basedatosrutas.alternativas_aprendizaje.map((ruta, index) => (
          <div className="col" key={index}>
            <div className="card">
              <div className="card-body text-white bg-primary">
                <h5 className="card-title">{ruta.nombre}</h5>
                <p className="card-text">{ruta.descripcion}</p>
                <p>Tipo: {ruta.tipo}</p>
                <p>Tiempo: {ruta.tiempo} horas</p>
                <p>Competencias:</p>
                <ul>
                  {ruta.competencias.map((competencia, idx) => (
                    <li key={idx}>{competencia}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      {setUsuario && mostrarModalBienvenida()}
    </>
  );
}

export default Home;
