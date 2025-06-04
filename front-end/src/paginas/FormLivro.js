import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FormLivro() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [livro, setLivro] = useState({
    id: "",
    titulo: "",
    ano: "",
    paginas: "",
    edicao: "",
    idcategoria: "",
    ideditora: "",
    resumo: ""
  });

  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (id && id !== "novo") carregarLivro();
  }, [id]);

  const carregarLivro = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/livro/${id}`);
      const dadosLivro = res.data.livro || res.data;
      setLivro(dadosLivro);
    } catch (err) {
      console.error("Erro ao carregar livro:", err);
      alert("Erro ao carregar livro. Verifique se o ID existe.");
    }
  };

  const handleChange = (e) => {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  };

  const salvar = async () => {
    if (!livro.titulo.trim()) {
      alert("O título é obrigatório.");
      return;
    }

    setCarregando(true);
    try {
      if (id && id !== "novo") {
        await axios.put(`http://localhost:4000/livro/${id}`, livro);
        navigate("/livros");
      } else {
        const res = await axios.post("http://localhost:4000/livro", livro);
        const novoLivro = res.data;
        navigate(`/livro/${novoLivro.id}`);
      }
    } catch (err) {
      alert("Erro ao salvar livro: " + err);
    } finally {
      setCarregando(false);
    }
  };

  const excluir = async () => {
    if (window.confirm("Tem certeza que deseja excluir este livro?")) {
      setCarregando(true);
      try {
        await axios.delete(`http://localhost:4000/livro/${id}`);
        navigate("/livros");
      } catch (err) {
        alert("Erro ao excluir: " + err);
      } finally {
        setCarregando(false);
      }
    }
  };

  const voltar = () => navigate("/livros");

  return (
    <div className="container mt-4 p-4 rounded" style={{ backgroundColor: "#1c1c1e", color: "#fff" }}>
      <h2 className="mb-3">{id === "novo" ? "Novo Livro" : "Alterando Livro"}</h2>
      <form>
        {id !== "novo" && livro.id && (
          <div className="mb-3">
            <label className="form-label">Código</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-secondary"
              value={livro.id}
              readOnly
            />
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            name="titulo"
            className="form-control bg-dark text-light border-secondary"
            placeholder="Título do livro"
            value={livro.titulo}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ano de Publicação</label>
          <input
            name="ano"
            className="form-control bg-dark text-light border-secondary"
            placeholder="Ano de publicação"
            value={livro.ano}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Número de Páginas</label>
          <input
            name="paginas"
            className="form-control bg-dark text-light border-secondary"
            placeholder="Número de páginas"
            value={livro.paginas}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Número da Edição</label>
          <input
            name="edicao"
            className="form-control bg-dark text-light border-secondary"
            placeholder="Número da edição"
            value={livro.edicao}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Categoria (ID)</label>
          <input
            name="idcategoria"
            className="form-control bg-dark text-light border-secondary"
            placeholder="ID da categoria"
            value={livro.idcategoria}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Editora (ID)</label>
          <input
            name="ideditora"
            className="form-control bg-dark text-light border-secondary"
            placeholder="ID da editora"
            value={livro.ideditora}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Resumo</label>
          <textarea
            name="resumo"
            className="form-control bg-dark text-light border-secondary"
            placeholder="Resumo do livro"
            value={livro.resumo}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex gap-2 mt-4">
          <button type="button" className="btn btn-success" onClick={salvar} disabled={carregando}>
            Salvar
          </button>
          <button type="button" className="btn btn-secondary" onClick={voltar} disabled={carregando}>
            Cancelar
          </button>
          {id !== "novo" && (
            <button type="button" className="btn btn-danger" onClick={excluir} disabled={carregando}>
              Excluir
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
