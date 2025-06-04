import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FormFuncionario() {
  const { id } = useParams();
  const [funcionario, setFuncionario] = useState({
    nomefuncionario: "",
    email: "",
    senha: ""
  });

  const [erro, setErro] = useState("");
  const isEdicao = !!id;

  useEffect(() => {
    if (isEdicao) {
      axios
        .get(`http://localhost:4000/funcionario/${id}`)
        .then((res) => {
          setFuncionario((prev) => ({
            ...prev,
            nomefuncionario: res.data.nomefuncionario || "",
            email: res.data.email || "",
            senha: "" 
          }));
        })
        .catch((err) => {
          console.error("Erro ao carregar funcionário:", err);
          setErro("Não foi possível carregar o funcionário.");
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFuncionario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdicao) {
        const { nomefuncionario, email, senha } = funcionario;
        const body = senha ? { nomefuncionario, email, senha } : { nomefuncionario, email };
        await axios.put(`http://localhost:4000/funcionario/${id}`, body);
      } else {
        await axios.post("http://localhost:4000/funcionario", funcionario);
      }

      window.location.href = "http://localhost:3001/funcionarios";
    } catch (err) {
      console.error("Erro ao salvar funcionário:", err);
      setErro("Erro ao salvar o funcionário.");
    }
  };

  return (
    <div className="container mt-4">
      <h1>{isEdicao ? "Alterando Funcionário" : "Cadastrar Funcionário"}</h1>
      <p>{isEdicao ? "Atualize os dados do funcionário" : "Preencha os dados para cadastrar um novo funcionário"}</p>

      {erro && <div className="alert alert-danger">{erro}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            name="nomefuncionario"
            className="form-control"
            value={funcionario.nomefuncionario}
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
            value={funcionario.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Senha {isEdicao && <small className="text-muted">(preencha apenas se for alterar)</small>}</label>
          <input
            type="password"
            name="senha"
            className="form-control"
            value={funcionario.senha}
            onChange={handleChange}
            placeholder={isEdicao ? "Nova senha (opcional)" : "Senha"}
            required={!isEdicao}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {isEdicao ? "Salvar Alterações" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}
