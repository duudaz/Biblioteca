import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormAutor() {
    const navegacao = useNavigate();
    const { id } = useParams();

    const [nomeautor, setNomeAutor] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [biografia, setBiografia] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [foto, setFoto] = useState('');

    const voltar = () => navegacao('/listaautor');

    const selecionar = async () => {
        const { data } = await axios.get(`http://localhost:4000/autor/${id}`);
        setNomeAutor(data.nomeautor);
        setNascimento(data.nascimento);
        setBiografia(data.biografia);
        setNacionalidade(data.nacionalidade);
        setFoto(data.foto);
    };

    const alterar = async () => {
        const body = { nomeautor, nascimento, biografia, nacionalidade, foto };
        await axios.put(`http://localhost:4000/autor/${id}`, body);
        voltar();
    };

    const inserir = async () => {
        const body = { nomeautor, nascimento, biografia, nacionalidade, foto };
        await axios.post(`http://localhost:4000/autor`, body);
        voltar();
    };

    const salvar = () => id ? alterar() : inserir();

    const excluir = async () => {
        await axios.delete(`http://localhost:4000/autor/${id}`);
        voltar();
    };

    useEffect(() => {
        if (id) selecionar();
    }, []);

    return (
        <div className="container mt-4 p-4 rounded" style={{ backgroundColor: "#1c1c1e", color: "#fff" }}>
            <h2 className="mb-3">Gerenciar Autor</h2>
            <form>

                {id && (
                    <div className="mb-3">
                        <label className="form-label">Código</label>
                        <input
                            type="text"
                            className="form-control bg-dark text-light border-secondary"
                            value={id}
                            readOnly
                        />
                    </div>
                )}

                <div className="mb-3">
                    <label className="form-label">Nome do autor</label>
                    <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        value={nomeautor}
                        onChange={(e) => setNomeAutor(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Nascimento</label>
                    <input
                        type="date"
                        className="form-control bg-dark text-light border-secondary"
                        value={nascimento}
                        onChange={(e) => setNascimento(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Nacionalidade</label>
                    <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        value={nacionalidade}
                        onChange={(e) => setNacionalidade(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Biografia</label>
                    <textarea
                        className="form-control bg-dark text-light border-secondary"
                        rows="6"
                        value={biografia}
                        onChange={(e) => setBiografia(e.target.value)}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Foto (URL)</label>
                    <input
                        type="text"
                        className="form-control bg-dark text-light border-secondary"
                        value={foto}
                        onChange={(e) => setFoto(e.target.value)}
                    />
                    {foto && <img src={foto} alt="Foto do autor" className="img-thumbnail mt-2" style={{ width: '250px' }} />}
                </div>

                <div className="d-flex gap-2 mt-4">
                    <button type="button" className="btn btn-success" onClick={salvar}>
                        Salvar
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={voltar}>
                        Cancelar
                    </button>
                    {id && (
                        <button type="button" className="btn btn-danger" onClick={excluir}>
                            Excluir
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
