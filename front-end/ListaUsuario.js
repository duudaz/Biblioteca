import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TituloLista from "../componentes/TituloLista";

export default function UsuarioList() {
  const [usuarios, setUsuarios] = useState([]);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const carregarUsuarios = async () => {
    try {
      const res = await axios.get("http://localhost:4000/usuario");
      setUsuarios(res.data);
    } catch (err) {
      console.error("Erro ao carregar usuários:", err);
      setErro("Não foi possível carregar os usuários.");
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <>
      <div className="my-5"></div>

      <TituloLista
        titulo="Usuários"
        descricao="Gerencie os usuários do sistema"
        rota="/usuario/novo"
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
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  Nenhum usuário cadastrado.
                </td>
              </tr>
            ) : (
              usuarios.map((usuario) => (
                <tr key={usuario.idusuario}>
                  <td>
                    <button
                      className="btn btn-sm btn-danger me-1"
                      onClick={() => navigate(`/usuario/${usuario.idusuario}`)}
                    >
                      Editar
                    </button>
                  </td>
                  <td>{usuario.idusuario}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.telefone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
