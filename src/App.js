import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import MenuLateral from './components/menuLateral/menuLateral';
import Dashboard from './pages/dashboard/dashboard';
import Livros from './pages/livros/livros';
import Usuarios from './pages/usuarios/usuarios';
import Emprestimos from './pages/emprestimos/emprestimos';
import Relatorios from './pages/relatorios/relatorios';
import Multas from './pages/multas/multas';

function App() {
  return (
    <Router>
      <div className="container-geral">
        <MenuLateral />
        <div className="conteudo-principal">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/livros" element={<Livros />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/emprestimos" element={<Emprestimos />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/multas" element={<Multas />} />
            <Route path="/" element={<Dashboard />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;