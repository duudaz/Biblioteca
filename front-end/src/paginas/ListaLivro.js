import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TituloLista from "../componentes/TituloLista";

export default function LivroList() {
  const [livros, setLivros] = useState([]);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const carregarLivros = async () => {
    try {
      const res = await axios.get("http://localhost:4000/livro");
      setLivros(res.data);
    } catch (err) {
      console.error("Erro ao carregar livros:", err);
      setErro("Não foi possível carregar os livros.");
    }
  };

  useEffect(() => {
    carregarLivros();
  }, []);

  return (
    <>
      <div className="my-5"></div>

      <TituloLista
        titulo="Livros"
        descricao="Gerencie aqui o acervo de livros da biblioteca"
        rota="/livro/novo"
      />

      <div className="my-4"></div>

      {erro && (
        <div className="alert alert-danger text-center" role="alert">
          {erro}
        </div>
      )}

      <div className="table-responsive">
        <table className="table table-dark table-hover text-center align-middle">
          <thead>
            <tr>
              <th>Ações</th>
              <th>#</th>
              <th>Título</th>
              <th>Categoria (ID)</th>
              <th>Editora (ID)</th>
              <th>Edição</th>
            </tr>
          </thead>
          <tbody>
            {livros.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  Nenhum livro cadastrado.
                </td>
              </tr>
            ) : (
              livros.map((livro) => (
                <tr key={livro.idlivro}>
                  <td>
                    <button
                      className="btn btn-sm btn-danger me-1"
                      onClick={() => navigate(`/livro/${livro.idlivro}`)}
                    >
                      Editar
                    </button>
                  </td>
                  <td>{livro.idlivro}</td>
                  <td>{livro.titulo}</td>
                  <td>{livro.idcategoria}</td>
                  <td>{livro.ideditora}</td>
                  <td>{livro.edicao}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
