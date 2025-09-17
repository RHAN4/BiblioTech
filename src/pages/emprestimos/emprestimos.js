import React from 'react';
import './styles.css';

const emprestimosEmAndamento = [
  {
    livro: 'O Cortiço',
    usuario: 'Ana Silva Santos',
    matricula: 'EST2924001',
    emprestimo: '31/10/2024',
    devolucaoPrevista: '14/11/2024',
    status: 'Em Atraso',
  },
  {
    livro: 'Física - Mecânica',
    usuario: 'Carlos Eduardo Lima',
    matricula: 'EST2924002',
    emprestimo: '19/10/2024',
    devolucaoPrevista: '02/11/2024',
    status: 'Em Atraso',
  },
  {
    livro: 'Dom Casmurro',
    usuario: 'Mariana Costa',
    matricula: 'EST2924003',
    emprestimo: '24/10/2024',
    devolucaoPrevista: '07/11/2024',
    status: 'Devolvido',
  },
];

const Emprestimos = () => {
  return (
    <div className="painel-container emprestimos-painel">
      <div className="cabecalho-emprestimos">
        <div className="titulo-painel">
          <h2>Gerenciamento de empréstimos</h2>
        </div>
        <div className="controles-superiores">
          <input type="text" placeholder="Buscar por usuário ou livro..." className="input-busca" />
          <select className="select-filtro">
            <option>Todos os status</option>
            <option>Em atraso</option>
            <option>Em andamento</option>
            <option>Devolvidos</option>
          </select>
          <button className="botao-adicionar">+ Novo empréstimo</button>
        </div>
        <div className="total-emprestimos">
          3 de 3 empréstimos
        </div>
      </div>

      <div className="resumo-emprestimos">
        <div className="card-emprestimo">
          <i className="fas fa-book"></i>
          <p>Empréstimos ativos</p>
          <span>1</span>
        </div>
        <div className="card-emprestimo">
          <i className="fas fa-exclamation-triangle"></i>
          <p>Em atraso</p>
          <span>1</span>
        </div>
        <div className="card-emprestimo">
          <i className="fas fa-check"></i>
          <p>Devolvidos recentemente</p>
          <span>0</span>
        </div>
        <div className="card-emprestimo">
          <i className="fas fa-dollar-sign"></i>
          <p>Multas pendentes</p>
          <span>R$ 15.50</span>
        </div>
      </div>
      
      <div className="tabela-container">
        <h3>Lista de empréstimos</h3>
        <table className="tabela-emprestimos">
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Livro</th>
              <th>Data de empréstimo</th>
              <th>Data de vencimento</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {emprestimosEmAndamento.map((item, index) => (
              <tr key={index}>
                <td>{item.usuario}</td>
                <td>{item.livro}</td>
                <td>{item.emprestimo}</td>
                <td>{item.devolucaoPrevista}</td>
                <td>
                  <span className={`status ${item.status.toLowerCase().replace(' ', '-')}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <div className="acoes-botoes">
                    <button className="botao-devolver">Devolver</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Emprestimos;