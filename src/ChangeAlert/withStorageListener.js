import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStoragechange] = React.useState(false);
    window.addEventListener('storage',(change)=>{
        if(change.key==='TODOS_V1'){
            console.log('Hubo cambios en TODOS_V1')
            setStoragechange(true)
        }
    });
    const toggleShow=()=>{
        props.sincronizeItem();
        setStoragechange(false)
    }
    return <WrappedComponent 
    show={storageChange}
    toggleShow={toggleShow} 
    />;
  };
}
export { withStorageListener };
