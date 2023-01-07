import './App.css';
import {Route, Routes } from "react-router-dom"
import { Container} from "react-bootstrap"
import Home from "./componentes/home/Home"
import Portafolio from "./componentes/Portafolio"
import Galeria from "./componentes/Galeria"
import Navbar from './componentes/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/portafolio' element={<Portafolio/>} />
          <Route path='/galeria' element={<Galeria/>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
