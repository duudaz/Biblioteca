import { useEffect, useState } from "react";
import axios from "axios";
import ListaLivrosCategoria from "./ListaLivrosCategoria";

export default function AcervoLivros() {
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/categoria")
      .then((res) => setCategorias(res.data))
      .catch((err) => console.error("Erro ao buscar categorias:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-white mb-4">Escolha uma Categoria</h2>

      <div className="d-flex flex-wrap gap-3 mb-4">
        {categorias.map((cat) => (
          <button
            key={cat.idcategoria}
            className="btn btn-outline-info"
            onClick={() => setCategoriaSelecionada(cat.idcategoria)}
          >
            {cat.nomecategoria}
          </button>
        ))}
      </div>

      {categoriaSelecionada && (
        <ListaLivrosCategoria idCategoria={categoriaSelecionada} />
      )}
    </div>
  );
}
