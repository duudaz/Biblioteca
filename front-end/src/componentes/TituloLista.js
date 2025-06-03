function TituloLista(props) {
  return (
    <div className="bg-blue-100 border border-blue-200 rounded p-4 mb-6">
      <h2 className="text-xl font-bold text-blue-800 mb-1">{props.titulo}</h2>
      <p className="text-sm text-blue-700 mb-4">{props.descricao}</p>
      <a
        href={props.rota}
       className="btn btn-sm btn-danger me-1">Novo
      </a>
    </div>
  );
}

export default TituloLista;