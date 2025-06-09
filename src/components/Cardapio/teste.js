function Cardapio() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const carregarItens = async () => {
            try {
                console.log('🔄 Carregando itens...');
                const response = await axios.get('https://SEU-BACKEND.onrender.com/cardapio');
                
                console.log('✅ Resposta recebida:', response.data);
                console.log('📊 Tipo:', typeof response.data);
                console.log('📋 É array:', Array.isArray(response.data));
                console.log('🔢 Quantidade:', response.data?.length);
                
                setItem(response.data);
            } catch (error) {
                console.error('❌ Erro ao carregar itens:', error);
                setItem([]);
            }
        }
        carregarItens();
    }, []);

    // Debug do estado
    useEffect(() => {
        console.log('🎯 Estado atual:', item);
        console.log('🎯 Quantidade no estado:', item?.length);
    }, [item]);

    console.log('🎨 Renderizando componente. Items:', item?.length);

    return (
        <ul id="cardapio" className='cardapio-lista'>
            {console.log('🖼️ Renderizando lista...')}
            {!item || item.length === 0 ? (
                <li>Nenhum prato encontrado.</li>
            ) : (
                item.map((itemCardapio, index) => {
                    console.log('🍽️ Renderizando item:', itemCardapio);
                    return (
                        <li key={itemCardapio.id || index}>
                            <strong>Nome do Prato: </strong> {itemCardapio.nomeDoPrato}<br />
                            <strong>Descrição: </strong> {itemCardapio.descricao}<br />
                            <strong>Preço: </strong> {itemCardapio.preco}<br />
                            <strong>Categoria: </strong> {itemCardapio.categoria}<br />
                            <strong>Disponibilidade: </strong> {itemCardapio.disponibilidade ? 'Sim' : 'Não'}<br />
                            <strong>URL: </strong> {itemCardapio.url}<br />
                        </li>
                    )
                })
            )}
        </ul>
    )
}