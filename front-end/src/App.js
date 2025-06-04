import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './componentes/Menu';
import FormCategoria from './paginas/FormCategoria';
import Home from './paginas/Home';
import ListaAutor from './paginas/ListaAutor';
import ListaCategoria from './paginas/ListaCategoria';
import FormAutor from './paginas/FormAutor';
import ListaEditoras from './paginas/ListaEditoras';
import FormEditora from './paginas/FormEditora';
import LivroList from './paginas/ListaLivro';
import FormLivro from './paginas/FormLivro';
import UsuarioList from './paginas/ListaUsuario';
import FormUsuario from './paginas/FormUsuario';
import ListaFuncionario from './paginas/ListaFuncionario';
import FormFuncionario from './paginas/FormFuncionario';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listarcategoria" element={<ListaCategoria />} />
        <Route path="/cadastrocategoria" element={<FormCategoria />} />
        <Route path="/cadastrocategoria/:id" element={<FormCategoria />} />
        <Route path="/listaautor" element={<ListaAutor />} />
        <Route path="/cadastroautor" element={<FormAutor />} />
        <Route path="/cadastroautor/:id" element={<FormAutor />} />
        <Route path="/editoras" element={<ListaEditoras />} />
        <Route path="/editoras/nova" element={<FormEditora />} />
        <Route path="/editoras/:id" element={<FormEditora />} />
        <Route path="/livros" element={<LivroList />} />
        <Route path="/livro/:id" element={<FormLivro />} />
        <Route path="/usuarios" element={<UsuarioList />} />
        <Route path="/usuario/novo" element={<FormUsuario />} />
        <Route path="/usuario/:id" element={<FormUsuario />} />
        <Route path="/funcionarios" element={<ListaFuncionario />} />
        <Route path="/funcionario/novo" element={<FormFuncionario />} />
        <Route path="/funcionario/:id" element={<FormFuncionario />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
