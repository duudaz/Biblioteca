export default function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i className="bi bi-journal-bookmark-fill me-2"></i>
            <span className="brand-text">Biblioteca</span>
          </a>
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
                <a className="nav-link" href="/listarcategoria">
                  <i className="bi bi-list-ul"></i> Listagem
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cadastrocategoria">
                  <i className="bi bi-pencil-square"></i> Cadastro
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/listaautor">
                  <i className="bi bi-person-lines-fill"></i> Autores
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
