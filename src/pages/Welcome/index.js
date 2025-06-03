// C:\Users\aluno.den\frontend\src\pages\Welcome\index.js

import { useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/logo.png';

function WelcomePage() {
    const navigate = useNavigate();

    return (
        <div className='welcome-page'>
            <div className='container'>
                <img src={logo} alt="Logo da empresa" className='logo' />
                <h1>Bem-vindo ao sistema de cadastro de pratos!</h1>
                <button onClick={() => navigate('/cadastro')} className='link-cadastrar'>
                    Cadastrar prato
                </button>
                <button onClick={() => navigate('/cardapio')} className='link-lista'>
                    Ver cardápio
                </button>
            </div>
        </div>
    );
}

export default WelcomePage;