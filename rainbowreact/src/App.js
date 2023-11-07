import logo from './logo.svg';
import './App.css';


function PrimerComponente() {
  return <p>hola mundo desde mi primer componente</p>;
}


function App() {
  return (
    <p>
    Hola mundo
    <PrimerComponente></PrimerComponente>
    <PrimerComponente></PrimerComponente>
    <PrimerComponente></PrimerComponente>
    <PrimerComponente></PrimerComponente>
    <PrimerComponente></PrimerComponente>
    
   </p>
  );
}

export default App;

