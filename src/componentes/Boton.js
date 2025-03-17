import React from 'react';

function Boton(props) {

  const esOperador = valor => {// Función que determina si el valor es un operador
    return isNaN(valor) && (valor !== '.') && (valor != '=');

  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>
      {props.children}
    </div>
  );
}

export default Boton;
