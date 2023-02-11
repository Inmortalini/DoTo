import React from "react";
import './TodosLoading.css'

function TodosLoading(){
    return <div className="fullView">
        <div className="loading">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
        </div>
        <p className="speaker">Estamos cargando, chill..</p>
    </div>
}

export {TodosLoading};

