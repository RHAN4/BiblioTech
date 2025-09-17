import React from 'react';
import './styles.css';

const livrosMock = [
  {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    isbn: '978-85-7237-010-9',
    ano: 2008,
    categoria: 'Literatura Brasileira',
    editora: 'Editora Globo',
    localizacao: 'Seção A - Prateleira 8',
    exemplares: '1/3',
    status: 'Disponível',
  },
  {
    titulo: 'O Cortiço',
    autor: 'Aluísio Azevedo',
    isbn: '978-85-33906237',
    ano: 2009,
    categoria: 'Literatura Brasileira',
    editora: 'Companhia das Letras',
    localizacao: 'Seção A - Prateleira 15',
    exemplares: '0/2',
    status: 'Emprestado',
  },
  {
    titulo: 'Física - Mecânica',
    autor: 'David Halliday',
    isbn: '978-8521620921',
    ano: 2018,
    categoria: 'Ciências Exatas',
    editora: 'LTC',
    localizacao: 'Seção C - Prateleira 5',
    exemplares: '3/5',
    status: 'Disponível',
  },
  {
    titulo: 'História do Brasil',
    autor: 'Boris Fausto',
    isbn: '9788531407295',
    ano: 2016,
    categoria: 'História',
    editora: 'Edusp',
    localizacao: 'Seção B - Prateleira 8',
    exemplares: '2/4',
    status: 'Disponível',
  },
  {
    titulo: 'Química Orgânica',
    autor: 'John McMurry',
    isbn: '9788522125104',
    ano: 2016,
    categoria: 'Ciências Exatas',
    editora: 'Cengage Learning',
    localizacao: 'Seção C - Prateleira 10',
    exemplares: '1/3',
    status: 'Disponível',
  },
];

const Livros = () => {
  return (
    <div className="painel-container livros-painel">
      <div className="cabecalho-livros">
        <div className="titulo-painel">
          <h2>Gerenciamento de Livros</h2>
        </div>
        <div className="controles-superiores">
          <input type="text" placeholder="Buscar por título, autor ou ISBN..." className="input-busca" />
          <select className="select-filtro">
            <option>Todas as categorias</option>
            <option>Estratégia</option>
            <option>Informática</option>
            <option>Filosofia</option>
          </select>
          <button className="botao-adicionar">+ Adicionar livro</button>
        </div>
        <div className="total-livros">
          5 de 5 livros
        </div>
      </div>

      <div className="lista-livros">
        {livrosMock.map((livro, index) => (
          <div className="cartao-livro" key={index}>
            <div className="cartao-cabecalho">
              <h3>{livro.titulo}</h3>
              <div className="icones-acao">
                <i className="fas fa-pencil-alt"></i>
                <i className="fas fa-trash-alt"></i>
              </div>
            </div>
            <p className="cartao-info">Por: {livro.autor}</p>
            <p className="cartao-info">ISBN: {livro.isbn}</p>
            <div className="cartao-detalhes">
              <p><span>Categoria:</span> {livro.categoria}</p>
              <p><span>Editora:</span> {livro.editora}</p>
              <p><span>Ano:</span> {livro.ano}</p>
              <p><span>Localização:</span> {livro.localizacao}</p>
              <p><span>Exemplares:</span> {livro.exemplares}</p>
            </div>
            <div className={`status ${livro.status.toLowerCase()}`}>
              {livro.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Livros;