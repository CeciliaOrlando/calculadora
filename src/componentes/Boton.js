import React from 'react';
import '../hojas-de-estilos/Boton.css';

function Boton(props) {

  const esOperador = valor => {// Función que determina si el valor es un operador
    return isNaN(valor) && (valor !== '.') && (valor != '=');
  };

  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}
      onClick={ () => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;
