import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListaCategoria() {
  const [dados, setDados] = useState([]);

  const Listar = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/categoria");
      setDados(data);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  useEffect(() => {
    Listar();
  }, []);

  return (
    <>
      <div className="my-5"></div>
      <TituloLista
        titulo="Listagem de categorias"
        descricao="Abaixo você pode visualizar, pesquisar ou editar os livros da biblioteca"
        rota="/cadastrocategoria"
      />

      <div className="my-4"></div>
      <div className="table-responsive">
        <table className="table table-dark table-hover text-center align-middle">
          <thead>
            <tr>
              <th>Código</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((d, i) => (
              <tr key={i}>
                <td>{d.idcategoria}</td>
                <td>{d.nomecategoria}</td>
                <td>
                  <a href={`/cadastrocategoria/${d.idcategoria}`} className="btn btn-sm btn-danger me-1">Editar</a>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
