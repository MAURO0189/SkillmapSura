import {Formulario} from "../Formulario/Formulario"

import {Routes,Route} from "react-router-dom"

export function Rutas(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Formulario></Formulario>}></Route>

        </Routes>
        </>

    )    

}