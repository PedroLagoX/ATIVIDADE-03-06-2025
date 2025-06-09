// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './styles.css';

// function Cardapio() {
//     const [item, setItem] = useState([]);

//     useEffect(() => {
//         const carregarItens = async () => {
//             try {
//                 const response = await axios.get('https://atividade-03-06-2025.onrender.com/cardapio');
//                 setItem(response.data);
//             } catch (error) {
//                 alert ('Erro ao carregar os itens do cardápio: ' + error);
//                 setItem([]);
//             }
//         }
//         carregarItens();
//     }, [])

//     return (
//         <ul id="cardapio" className='cardapio-lista'>
//             {item.length === 0 ? (
//                 <li>Nenhum prato encontrado.</li>
//             ):(
//                 item.map(itemCardapio =>( // Mudança aqui: item.map e renomeei a variável para evitar confusão
//                     <li key={itemCardapio.id}>
//                         <strong>Nome do Prato: </strong> {itemCardapio.nomeDoPrato}<br />
//                         <strong>Descricao: </strong> {itemCardapio.descricao}<br />
//                         <strong>Preco: </strong> {itemCardapio.preco}<br />
//                         <strong>Categoria: </strong> {itemCardapio.categoria}<br />
//                         <strong>Disponibilidade: </strong> {itemCardapio.disponibilidade ? 'Sim' : 'Não'}<br />
//                         <strong>URL: </strong> {itemCardapio.url}<br />
//                     </li>
//                 ))
//             )}
//         </ul>
//     )
// }

// export default Cardapio