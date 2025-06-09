import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function Cardapio() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const carregarItens = async () => {
            try {
                console.log('🔄 INICIANDO carregamento dos itens...');
                
                // SUBSTITUA pela URL real do seu backend
                const response = await axios.get('https://atividade-03-06-2025.onrender.com/cardapio');
                
                console.log('✅ RESPOSTA COMPLETA:', response);
                console.log('📋 DADOS RECEBIDOS:', response.data);
                console.log('🔍 TIPO DOS DADOS:', typeof response.data);
                console.log('📊 É ARRAY?', Array.isArray(response.data));
                console.log('🔢 QUANTIDADE DE ITENS:', response.data?.length);
                
                if (response.data && response.data.length > 0) {
                    console.log('🍽️ PRIMEIRO ITEM:', response.data[0]);
                }
                
                setItem(response.data);
                console.log('✅ ESTADO ATUALIZADO');
                
            } catch (error) {
                console.error('❌ ERRO ao carregar itens:', error);
                console.error('❌ DETALHES do erro:', error.response);
                setItem([]);
            }
        }
        carregarItens();
    }, []);

    // Debug do estado após mudança
    useEffect(() => {
        console.log('🎯 ESTADO ATUAL do item:', item);
        console.log('🎯 TAMANHO do array no estado:', item?.length);
        if (item && item.length > 0) {
            console.log('🎯 PRIMEIRO ITEM no estado:', item[0]);
        }
    }, [item]);

    console.log('🎨 RENDERIZANDO componente. Items no estado:', item?.length);

    return (
        <div>
            <h2>Debug Info:</h2>
            <p>Quantidade de itens: {item?.length || 0}</p>
            <p>Tipo: {typeof item}</p>
            <p>É array: {Array.isArray(item) ? 'Sim' : 'Não'}</p>
            
            <ul id="cardapio" className='cardapio-lista'>
                {console.log('🖼️ RENDERIZANDO lista. Condição:', !item || item.length === 0)}
                {!item || item.length === 0 ? (
                    <li>Nenhum prato encontrado. (Debug: {item?.length || 'undefined'})</li>
                ) : (
                    item.map((itemCardapio, index) => {
                        console.log('🍽️ RENDERIZANDO item #' + index + ':', itemCardapio);
                        return (
                            <li key={itemCardapio.id || index}>
                                <strong>Nome do Prato: </strong> {itemCardapio.nomeDoPrato || 'SEM NOME'}<br />
                                <strong>Descrição: </strong> {itemCardapio.descricao || 'SEM DESCRIÇÃO'}<br />
                                <strong>Preço: </strong> {itemCardapio.preco || 'SEM PREÇO'}<br />
                                <strong>Categoria: </strong> {itemCardapio.categoria || 'SEM CATEGORIA'}<br />
                                <strong>Disponibilidade: </strong> {itemCardapio.disponibilidade ? 'Sim' : 'Não'}<br />
                                <strong>URL: </strong> {itemCardapio.url || 'SEM URL'}<br />
                            </li>
                        )
                    })
                )}
            </ul>
        </div>
    )
}

export default Cardapio;