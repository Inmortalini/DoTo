import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show,toggleShow}){
    if(show){
        return (
        <div className="divActualizador">
            <p>Hubo Cambios en otra ventana </p>
            <p>Quieres actualizar tu pagina?</p>
            <button
            onClick={toggleShow }>
                YES!
            </button>
        </div>)
    }
    else{
        return null;
    }

}
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)
export {ChangeAlertWithStorageListener}