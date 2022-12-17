
import './App.css';
import ComponenteMenu from './menu/ComponenteMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponenteListaAutor from './autores/ComponenteListaAutor';
import ComponenteListaLibro from './libros/ComponenteListaLibro';
import ComponentePrincipal from './principal/ComponentePrincipal';
import rutas from './route-config';

function App() {
  return (
    <div className='container'>
      {/* este es el menu principal */}
      <ComponenteMenu/>

      {/* son las rutas del menu principal */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<ComponentePrincipal/>} />
          <Route path="/autores" element={<ComponenteListaAutor/>} />
          <Route path="/libros" element={<ComponenteListaLibro/>} /> */}
          
          {rutas.map(ruta =>
          <Route key={ruta.path} path={ruta.path} element={<ruta.componente/>}/>)
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
