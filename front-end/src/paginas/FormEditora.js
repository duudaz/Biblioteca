import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FormEditora() {
  const [editora, setEditora] = useState({ nomeeditora: "" });
  const [carregando, setCarregando] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) carregarEditora();
  }, [id]);

  const carregarEditora = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/editora/${id}`);
      setEditora(res.data);
    } catch (err) {
      alert("Erro ao carregar dados da editora: " + err);
    }
  };

  const handleChange = (e) => {
    setEditora({ ...editora, [e.target.name]: e.target.value });
  };

  const inserir = async () => {
    try {
      const body = { nomeeditora: editora.nomeeditora };
      await axios.post("http://localhost:4000/editora", body);
      voltar();
    } catch (err) {
      alert("Erro ao inserir editora: " + err);
    }
  };

  const salvar = async () => {
    if (!editora.nomeeditora.trim()) {
      alert("Nome da editora é obrigatório.");
      return;
    }

    setCarregando(true);
    try {
      if (id) {
        await axios.put(`http://localhost:4000/editora/${id}`, editora);
      } else {
        await inserir();
        return; // evita navegação dupla
      }
      navigate("/editoras");
    } catch (err) {
      alert("Erro ao salvar: " + err);
    } finally {
      setCarregando(false);
    }
  };

  const excluir = async () => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      setCarregando(true);
      try {
        await axios.delete(`http://localhost:4000/editora/${id}`);
        navigate("/editoras");
      } catch (err) {
        alert("Erro ao excluir: " + err);
      } finally {
        setCarregando(false);
      }
    }
  };

  const voltar = () => navigate("/editoras");

  return (
    <div className="container mt-4 p-4 rounded" style={{ backgroundColor: "#1c1c1e", color: "#fff" }}>
      <h2 className="mb-3">{id ? "Alterando Editora" : "Nova Editora"}</h2>
      <form>
        {id && (
          <div className="mb-3">
            <label className="form-label">Código</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-secondary"
              value={id}
              readOnly
            />
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="nomeeditora" className="form-label">Nome da Editora</label>
          <input
            id="nomeeditora"
            name="nomeeditora"
            value={editora.nomeeditora}
            onChange={handleChange}
            className="form-control bg-dark text-light border-secondary"
            placeholder="Nome da editora"
          />
        </div>

        <div className="d-flex gap-2 mt-4">
          <button type="button" className="btn btn-success" onClick={salvar} disabled={carregando}>
            Salvar
          </button>
          <button type="button" className="btn btn-secondary" onClick={voltar} disabled={carregando}>
            Cancelar
          </button>
          {id && (
            <button type="button" className="btn btn-danger" onClick={excluir} disabled={carregando}>
              Excluir
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
