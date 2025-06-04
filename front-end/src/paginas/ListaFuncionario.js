import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TituloLista from "../componentes/TituloLista";

export default function ListaFuncionario() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const carregarFuncionarios = async () => {
    try {
      const res = await axios.get("http://localhost:4000/funcionario");
      setFuncionarios(res.data);
    } catch (err) {
      console.error("Erro ao carregar funcionários:", err);
      setErro("Não foi possível carregar os funcionários.");
    }
  };

  useEffect(() => {
    carregarFuncionarios();
  }, []);

  return (
    <>
      <div className="my-5"></div>

      <TituloLista
        titulo="Funcionários"
        descricao="Gerencie os funcionários do sistema"
        rota="/funcionario/novo"
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
              <th>Nome</th>
              <th>E-mail</th>
              <th>Salário</th>
              <th>Contratação</th>
              <th>Ativo</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center text-muted">
                  Nenhum funcionário cadastrado.
                </td>
              </tr>
            ) : (
              funcionarios.map((f) => (
                <tr key={f.idfuncionario}>
                  <td>
                    <button
                      className="btn btn-sm btn-danger me-1"
                      onClick={() => navigate(`/funcionario/${f.idfuncionario}`)}
                    >
                      Editar
                    </button>
                  </td>
                  <td>{f.idfuncionario}</td>
                  <td>{f.nomefuncionario}</td>
                  <td>{f.email}</td>
                  <td>{f.salario ? `R$ ${parseFloat(f.salario).toFixed(2)}` : "-"}</td>
                  <td>{f.contratacao || "-"}</td>
                  <td>{f.ativo ? "Sim" : "Não"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
