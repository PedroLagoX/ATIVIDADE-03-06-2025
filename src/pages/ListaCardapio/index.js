// C:\Users\aluno.den\frontend\src\pages\ListaCardapio\index.js

import Cardapio from '../../components/Cardapio'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function PaginaListaCardapio() {
    const navigate = useNavigate()
    
return (
        <div className='pagina-lista-cardapio'>
            <div className='container'>
                <h2>Cardapio</h2>
                <Cardapio />
                <button onClick={() => navigate('/')} className='link-voltar'>
                    Cadastrar prato
                </button>
            </div>
        </div>
    )
}

export default PaginaListaCardapio