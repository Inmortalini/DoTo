import React from "react";
import ReactDOM from "react-dom";
import './Modal.css' 
function Modal({children}){
    
    //Aqui Creamos el portal con REACTDOM.createPortal

    return ReactDOM.createPortal(
    <div className="ModalBackground"> 
        {children},
        </div>,
        document.getElementById('modal')
    )
}
export{Modal}