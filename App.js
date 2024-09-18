import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
        <Card 
          titulo="Desarrollo del Proyecto"
          descripcion="Creación del programa."
          personaAsignada="Diego Forlan"
          fechaInicio="2002-01-01"
          fechaFin="2024-09-30"
        />
        <Card
          titulo="Testing"
          descripcion="Testeo del programa."
          personaAsignada="Luis Suarez"
          fechaInicio="2002-01-01"
          fechaFin="2024-09-18"
        />
        <Card
          titulo="Usador"
          descripcion="Quien usa el programa."
          personaAsignada="Juan Sosa Dias"
          fechaInicio="2024-09-18"
          fechaFin="2024-09-18"
        />
      </div>
    </div>
  );
}

export default App;
