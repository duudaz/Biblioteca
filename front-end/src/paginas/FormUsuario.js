import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UsuarioForm() {
  const { id } = useParams(); // se existe id, é edição

  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    telefone: ""
  });

  const [erro, setErro] = useState("");
  const isEdicao = !!id;

  useEffect(() => {
    if (isEdicao) {
      axios
        .get(`http://localhost:4000/usuario/${id}`)
        .then((res) => {
          setUsuario(res.data);
        })
        .catch((err) => {
          console.error("Erro ao carregar usuário:", err);
          setErro("Não foi possível carregar o usuário.");
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdicao) {
        await axios.put(`http://localhost:4000/usuario/${id}`, usuario);
      } else {
        await axios.post("http://localhost:4000/usuario", usuario);
      }

      // Redireciona para a lista externa
      window.location.href = "http://localhost:3001/usuarios";
    } catch (err) {
      console.error("Erro ao salvar usuário:", err);
      setErro("Erro ao salvar o usuário.");
    }
  };

  return (
    <div className="container mt-4">
      <h1>{isEdicao ? "Alterando Usuário" : "Cadastrar Usuário"}</h1>
      <p>{isEdicao ? "Atualize os dados do usuário" : "Preencha os dados para cadastrar um novo usuário"}</p>

      {erro && <div className="alert alert-danger">{erro}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            name="nome"
            className="form-control"
            value={usuario.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={usuario.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Telefone</label>
          <input
            type="text"
            name="telefone"
            className="form-control"
            value={usuario.telefone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {isEdicao ? "Salvar Alterações" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}
