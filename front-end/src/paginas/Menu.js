import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-journal-bookmark-fill me-2"></i>
            <span className="brand-text">Biblioteca</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/livros">
                  <i className="bi bi-book-half"></i> Livros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listarcategoria">
                  <i className="bi bi-list-ul"></i> Listagem
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastrocategoria">
                  <i className="bi bi-pencil-square"></i> Cadastro
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listaautor">
                  <i className="bi bi-person-lines-fill"></i> Autores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/editoras">
                  <i className="bi bi-building"></i> Editoras
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usuarios">
                  <i className="bi bi-people"></i> Usuários
                </Link>
                <li className="nav-item">
              <Link className="nav-link" to="/funcionarios">
                <i className="bi bi-person-badge"></i> Funcionários
              </Link>
              </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
