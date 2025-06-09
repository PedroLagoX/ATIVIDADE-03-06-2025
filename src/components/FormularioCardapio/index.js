// C:\Users\aluno.den\frontend\src\components\FormularioCardapio\index.js

import { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
import useMensagem from "../../hooks/useMensagem";
import MensagemFeedback from "../MensagemFeedback";
import logo from '../../assets/images/logo.png'
import axios from "axios";

function FormularioCardapio() {
    const [nomeDoPrato, setNomeDoPrato] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')
    const [disponibilidade, setDisponibilidade] = useState('')
    const [url, setUrl] = useState('')
    const navigate = useNavigate()
    const { exibirMensagem, mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem()

    const cadastrarCardapio = async() => {
        try {
            const response = await axios.post('https://frontendrestaurante.onrender.com/cadastro', {
                nomeDoPrato, 
                descricao, 
                preco, 
                categoria,
                disponibilidade, 
                url
            })
            exibirMensagem(response.data.mensagem || 'Item cadastrado com sucesso!', 'sucesso')
            setNomeDoPrato('')
            setDescricao('')
            setPreco('')
            setCategoria('')
            setDisponibilidade('')
            setUrl('')
        } catch (error) {
            let errorMsg = 'Erro ao cadastrar item no cardápio.'
            if  (error.response && error.response.data) {
                errorMsg = error.response.data.mensagem
                if (error.response.data.erros) {
                    errorMsg += ' ' + Object.values(error.response.data.erros).join(', ')
                }
            }

            exibirMensagem(errorMsg, 'erro')
        }
    }

    return (
        <div className="container">
            <img src={logo} alt="Logo da empresa" />
            <h2>Cadastro de cardapio</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarCardapio()}}>
                <input 
                    type="text"
                    id="nomeDoPrato"
                    placeholder="Nome do Prato"   
                    value={nomeDoPrato}
                    onChange={(e) => setNomeDoPrato(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    id="descricao"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />
                <input 
                    type="number"
                    step="0.01"
                    id="preco"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    id="categoria"
                    placeholder="Categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required
                />
                <select 
                    id="disponibilidade"
                    value={disponibilidade}
                    onChange={(e) => setDisponibilidade(e.target.value)}
                    required
                >
                    <option value="">Selecione a disponibilidade</option>
                    <option value="true">Disponível</option>
                    <option value="false">Indisponível</option>
                </select>
                <input 
                    type="url"
                    id="url"
                    placeholder="URL da Imagem"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar Item</button>
            </form>

            <button onClick={() => navigate('/cardapio')} className="link-cardapio">
                Ver itens no cardápio
            </button>

            <MensagemFeedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onClose={fecharMensagem}
            />
        </div>
    )
}

export default FormularioCardapio;