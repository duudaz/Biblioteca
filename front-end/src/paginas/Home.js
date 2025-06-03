export default function Home() {
    return (
        <>
        <>
        {/* CATEGORIAS */}
  <div className="container mt-4 text-center">
    <button className="btn btn-category btn-ficcao">Ficção</button>
    <button className="btn btn-category btn-suspense">Suspense</button>
    <button className="btn btn-category btn-romance">Romance</button>
    <button className="btn btn-category btn-ciencia">Ciência</button>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  .btn-category {\n    color: #fff;\n    border: none;\n    padding: 0.5rem 1.2rem;\n    border-radius: 0.5rem;\n    margin: 0 0.3rem 0.5rem;\n    font-weight: 500;\n    transition: background-color 0.3s ease;\n  }\n\n  .btn-ficcao {\n    background-color: #a00028;\n  }\n  .btn-ficcao:hover {\n    background-color: #c00040;\n  }\n\n  .btn-suspense {\n    background-color: #444444;\n  }\n  .btn-suspense:hover {\n    background-color: #666666;\n  }\n\n  .btn-romance {\n    background-color: #a52a2a;\n  }\n  .btn-romance:hover {\n    background-color: #c94242;\n  }\n\n  .btn-ciencia {\n    background-color: #206060;\n  }\n  .btn-ciencia:hover {\n    background-color: #309080;\n  }\n"
    }}
  />
    {/* GRADE DE LIVROS */}
    <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">

      {/* Card de livro*/}
      <div className="col">
        <div className="card h-100">
          <img
            src="https://via.placeholder.com/150x200"
            className="card-img-top"
            alt="Livro"
          />
          <div className="card-body">
            <h5 className="card-title">Título</h5>
            <p className="card-text">Editora: ???</p>
            <p className="card-text">Páginas: ???</p>
            <p className="card-text">Ano: ???</p>
            <a href="#" className="btn btn-primary">
              Detalhes
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src="https://via.placeholder.com/150x200"
            className="card-img-top"
            alt="Livro"
          />
          <div className="card-body">
            <h5 className="card-title">Título</h5>
            <p className="card-text">Editora: ???</p>
            <p className="card-text">Páginas: ???</p>
            <p className="card-text">Ano: ???</p>
            <a href="#" className="btn btn-primary">
              Detalhes
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src="https://via.placeholder.com/150x200"
            className="card-img-top"
            alt="Livro"
          />
          <div className="card-body">
            <h5 className="card-title">Título</h5>
            <p className="card-text">Editora: ???</p>
            <p className="card-text">Páginas: ???</p>
            <p className="card-text">Ano: ???</p>
            <a href="#" className="btn btn-primary">
              Detalhes
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src="https://via.placeholder.com/150x200"
            className="card-img-top"
            alt="Livro"
          />
          <div className="card-body">
            <h5 className="card-title">Título</h5>
            <p className="card-text">Editora: ???</p>
            <p className="card-text">Páginas: ???</p>
            <p className="card-text">Ano: ???</p>
            <a href="#" className="btn btn-primary">
              Detalhes
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src="https://via.placeholder.com/150x200"
            className="card-img-top"
            alt="Livro"
          />
          <div className="card-body">
            <h5 className="card-title">Título</h5>
            <p className="card-text">Editora: ???</p>
            <p className="card-text">Páginas: ???</p>
            <p className="card-text">Ano: ???</p>
            <a href="#" className="btn btn-primary">
              Detalhes
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src="https://via.placeholder.com/150x200"
            className="card-img-top"
            alt="Livro"
          />
          <div className="card-body">
            <h5 className="card-title">Título</h5>
            <p className="card-text">Editora: ???</p>
            <p className="card-text">Páginas: ???</p>
            <p className="card-text">Ano: ???</p>
            <a href="#" className="btn btn-primary">
              Detalhes
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src="https://via.placeholder.com/150x200"
            className="card-img-top"
            alt="Livro"
          />
          <div className="card-body">
            <h5 className="card-title">Título</h5>
            <p className="card-text">Editora: ???</p>
            <p className="card-text">Páginas: ???</p>
            <p className="card-text">Ano: ???</p>
            <a href="#" className="btn btn-primary">
              Detalhes
            </a>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img
            src="https://via.placeholder.com/150x200"
            className="card-img-top"
            alt="Livro"
          />
          <div className="card-body">
            <h5 className="card-title">Título</h5>
            <p className="card-text">Editora: ???</p>
            <p className="card-text">Páginas: ???</p>
            <p className="card-text">Ano: ???</p>
            <a href="#" className="btn btn-primary">
              Detalhes
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
        </>
    );
};