import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const MenuLateral = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="menu-lateral">
      <div className="menu-cabecalho">
        <Link to="/dashboard">
          <span className="logo">BiblioTech</span>
        </Link>
      </div>
      <nav className="menu-navegacao">
        <ul>
          <li>
            <Link to="/dashboard" className={activeLink === '/dashboard' ? 'ativo' : ''}>
              <i className="fas fa-chart-line"></i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/livros" className={activeLink === '/livros' ? 'ativo' : ''}>
              <i className="fas fa-book"></i>
              Livros
            </Link>
          </li>
          <li>
            <Link to="/usuarios" className={activeLink === '/usuarios' ? 'ativo' : ''}>
              <i className="fas fa-users"></i>
              Usuários
            </Link>
          </li>
          <li>
            <Link to="/emprestimos" className={activeLink === '/emprestimos' ? 'ativo' : ''}>
              <i className="fas fa-exchange-alt"></i>
              Empréstimos
            </Link>
          </li>
          <li>
            <Link to="/relatorios" className={activeLink === '/relatorios' ? 'ativo' : ''}>
              <i className="fas fa-chart-pie"></i>
              Relatórios
            </Link>
          </li>
          <li>
            <Link to="/multas" className={activeLink === '/multas' ? 'ativo' : ''}>
              <i className="fas fa-dollar-sign"></i>
              Multas
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu-rodape">
        <p>Sistema BiblioTech</p>
        <p>v1.0.0 - Escola Técnica</p>
        <p>Usuário: Admin</p>
      </div>
    </div>
  );
};

export default MenuLateral;