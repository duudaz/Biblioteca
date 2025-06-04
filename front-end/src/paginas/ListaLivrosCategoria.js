import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ButtonsHome() {
  const [categoria, setCategoria] = useState([]);
  const [livro, setLivro] = useState([]);
  const [livrosFiltrados, setLivrosFiltrados] = useState([]);
  const navigate = useNavigate();

  const listarCategoria = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/categoria");
      setCategoria(data);
    } catch (err) {
      console.error("Erro ao carregar categorias:", err);
    }
  };

  const listarLivros = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/livro");
      setLivro(data);
      setLivrosFiltrados(data);
    } catch (err) {
      console.error("Erro ao carregar livros:", err);
    }
  };

  const filtrarLivros = (idcategoria) => {
    const filtrados = livro.filter((l) => l.idcategoria === idcategoria);
    setLivrosFiltrados(filtrados);
  };

  useEffect(() => {
    listarCategoria();
    listarLivros();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-white mb-4 text-center">Selecione uma Categoria</h2>

      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {categoria.map((c) => (
          <button
            key={c.idcategoria}
            className="btn btn-outline-info"
            onClick={() => filtrarLivros(c.idcategoria)}
          >
            {c.nomecategoria}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {livrosFiltrados.length === 0 ? (
          <div className="alert alert-secondary text-center" role="alert">
            Nenhum livro encontrado para a categoria selecionada.
          </div>
        ) : (
          livrosFiltrados.map((l) => (
            <div key={l.idlivro} className="col-md-6 col-lg-4">
              <div className="card bg-dark text-white h-100">
                <div className="row g-0">
                  <div className="col-4">
                    <img
                      src="https://via.placeholder.com/100x150"
                      alt="Livro"
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-8 d-flex flex-column justify-content-between p-3">
                    <div>
                      <h5 className="card-title">{l.titulo}</h5>
                      <p className="card-text mb-1">
                        <small>Publicação: {l.publicacao || "-"}</small>
                      </p>
                      <p className="card-text mb-1">
                        <small>{l.paginas} páginas</small>
                      </p>
                      <p className="card-text mb-1">
                        <small>Editora: {l.nomeeditora || "Não informada"}</small>
                      </p>
                      <p className="card-text mb-1">
                        <small>Edição: {l.edicao}</small>
                      </p>
                    </div>
                    <button
                      className="btn btn-sm btn-success mt-2"
                      onClick={() => navigate(`/emprestar/${l.idlivro}/${encodeURIComponent(l.titulo)}`)}
                    >
                      Emprestar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ButtonsHome;
