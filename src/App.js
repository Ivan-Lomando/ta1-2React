import './App.css';


const Ta1 = ({titulo,descripcion,persona,inicio,fin}) => {
  return (
    <div className='card'>
      <h1>{titulo}</h1>
      <p>Descripcion: {descripcion}</p>
      <p>Persona: {persona}</p>
      <p>Inicio: {inicio}</p>
      <p>Fin: {fin}</p>
    </div>

  );
}
const Ta2 = ({ children }) => {
  return (
    <div className='card'>
      {children}
    </div>
  );
}



function App() {
  return (
    <div className="App">
       <Ta1 titulo="hola" descripcion="probando" persona="ivan" inicio="hoy" fin="mañana"/>
       <Ta1 titulo="hola2" descripcion="probandooooo..." persona="ivan" inicio="5/08/2004" fin="mañana"/>
       <Ta1 titulo="hola3" descripcion="probando siuu" persona="nadie" inicio={5} fin="mañana"/>
       <Ta2>
        <h1>hola</h1>
        <p>Descripcion: probando</p>
        <p>Persona: ivan</p>
        <p>Inicio: hoy</p>
        <p>Fin: mañana</p>
      </Ta2>

    </div>
  );
}

export default App;
