import { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseAdmin from "../utils/baseAdmin.json";
import Swal from "sweetalert2";

export function Formulario() {
  const [Cedula, setCedula] = useState("");
  const [Contraseña, setContraseña] = useState("");

  let router = useNavigate();

  function procesarFormulario(e) {
    e.preventDefault();

    let search = baseAdmin.find(function (usuario) {
      return usuario.documento === Cedula && usuario.contraseña === Contraseña;
    });

    if (!search) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    } else {
      router("/home");
    }
  }

  return (
    <>
      <section className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-6">
            <img src="../../src/assets/logo.png" alt="" className="img-fluid" />
            <form className="border rounded p-4" onSubmit={procesarFormulario}>
              <h2>Controla tu salud</h2>

              <div className="input-group mb-3 mt-4">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-person-vcard"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Numero cedula"
                  id="identificacion"
                  value={Cedula}
                  onChange={(e) => setCedula(e.target.value)}
                />
              </div>
              <div className="input-group mb-3 mt-4">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-file-lock2"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  id="contraseña"
                  value={Contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
