import { useParams } from "react-router-dom";
import { useState } from "react";

export default function FormEmprestimo() {
  const { idlivro } = useParams();
  const [dataDevolucao, setDataDevolucao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Empréstimo registrado para o livro ${idlivro} com devolução em ${dataDevolucao}`);
    window.location.href = "/acervo";
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Formulário de Empréstimo</h2>
      <p>Livro selecionado: <strong>{idlivro}</strong></p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Data de Devolução</label>
          <input
            type="date"
            className="form-control"
            value={dataDevolucao}
            onChange={(e) => setDataDevolucao(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Confirmar Empréstimo</button>
      </form>
    </div>
  );
}
