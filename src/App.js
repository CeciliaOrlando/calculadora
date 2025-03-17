import './App.css';
import Boton from './componentes/Boton';
import logo from './imagenes /logo.png';



function App() {
  return (
    <div className='App'>

      <div className= 'logo-contenedor'>
        <img src={logo} className='logo' alt='Logo de la aplicación'/>
        <h1>CALCULADORA INTERACTIVA</h1>
      </div>

      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>

        </div>


        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>

      </div>


    </div>
  );
}

export default App;
