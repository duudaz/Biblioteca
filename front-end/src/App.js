import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu';
import FormCategoria from './paginas/FormCategoria';
import Home from './paginas/Home';
import ListaAutor from './paginas/ListaAutor';
import ListaCategoria from './paginas/ListaCategoria';
import FormAutor from './paginas/FormAutor'; 

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listarcategoria" element={<ListaCategoria />} />
        <Route path="/cadastrocategoria" element={<FormCategoria />} />
        <Route path="/cadastrocategoria/:id" element={<FormCategoria />} />
        <Route path='/listaautor' element={<ListaAutor />} />
        <Route path='/cadastroautor' element={<FormAutor />} />
        <Route path='/cadastroautor/:id' element={<FormAutor />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
