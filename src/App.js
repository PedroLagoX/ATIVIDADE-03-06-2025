import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaCardapioCadastro from './pages/CardapioCadastro'
import PaginaListaCardapio from './pages/ListaCardapio';
import './App.css';
import WelcomePage from './pages/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/cadastro' element={<PaginaCardapioCadastro />} />
        <Route path ='/cardapio' element={<PaginaListaCardapio />} />
      </Routes>
    </Router>
  );
}

export default App;
