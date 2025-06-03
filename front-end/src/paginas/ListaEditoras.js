import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaEditoras() {
  const [editoras, setEditoras] = useState([]);
  const [erro, setErro] = useState("");

  const carregarEditoras = async () => {
    try {
      const resposta = await axios.get("http://localhost:4000/editora");
      console.log("Dados recebidos da API:", resposta.data); // Debug: veja os nomes corretos
      setEditoras(resposta.data);
    } catch (err) {
      console.error("Erro ao carregar editoras:", err);
      setErro("Não foi possível carregar as editoras.");
    }
  };

  useEffect(() => {
    carregarEditoras();
  }, []);

  return (
    <>
      <div className="my-5"></div>

      <TituloLista
        titulo="Editoras"
        descricao="Gerencie aqui as editoras dos livros da biblioteca"
        rota="/editoras/nova"
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
              <th scope="col">Ações</th>
              <th scope="col">Código</th>
              <th scope="col">Nome</th>
              <th scope="col">CNPJ</th>
              <th scope="col">Endereço</th>
            </tr>
          </thead>
          <tbody>
            {editoras.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  Nenhuma editora cadastrada.
                </td>
              </tr>
            ) : (
              editoras.map((e) => (
                <tr key={e.ideditora}>
                  <td>
                    <a
                      className="btn btn-sm btn-danger me-1"
                      href={`/editoras/${e.ideditora}`}
                    >
                      Editar
                    </a>
                  </td>
                  <td>{e.ideditora}</td>
                  <td>{e.nomeeditora}</td>
                  <td>{e.cnpjeditora || e.cnpj || "CNPJ não informado"}</td>
                  <td>{e.enderecoeditora || e.endereco || "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
