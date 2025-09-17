import React, { useState } from 'react';
import './styles.css';

const dadosRelatorioEmprestimos = [
  { livro: 'Clean Code', autor: 'Robert C. Martin', total: 45 },
  { livro: 'Dom Quixote', autor: 'Miguel de Cervantes', total: 32 },
  { livro: 'O Príncipe', autor: 'Nicolau Maquiavel', total: 28 },
];

const dadosRelatorioUsuarios = [
  { usuario: 'Carlos Eduardo Lima', matricula: 'EST2924002', emprestimos: 12 },
  { usuario: 'Ana Silva Santos', matricula: 'EST2924001', emprestimos: 10 },
  { usuario: 'Mariana Costa', matricula: 'EST2924003', emprestimos: 8 },
];

const dadosRelatorioMultas = [
  { usuario: 'João Paulo Fernandes', matricula: 'EST2924007', multas: 'R$ 20,00' },
  { usuario: 'Carlos Eduardo Lima', matricula: 'EST2924002', multas: 'R$ 15,50' },
];

const Relatorios = () => {
  const [relatorioAtual, setRelatorioAtual] = useState('emprestimos');

  const renderizarTabela = () => {
    switch (relatorioAtual) {
      case 'emprestimos':
        return (
          <table className="tabela-relatorio">
            <thead>
              <tr>
                <th>Título do livro</th>
                <th>Autor</th>
                <th>Total de empréstimos</th>
              </tr>
            </thead>
            <tbody>
              {dadosRelatorioEmprestimos.map((item, index) => (
                <tr key={index}>
                  <td>{item.livro}</td>
                  <td>{item.autor}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'usuarios':
        return (
          <table className="tabela-relatorio">
            <thead>
              <tr>
                <th>Nome do usuário</th>
                <th>Matrícula</th>
                <th>Empréstimos realizados</th>
              </tr>
            </thead>
            <tbody>
              {dadosRelatorioUsuarios.map((item, index) => (
                <tr key={index}>
                  <td>{item.usuario}</td>
                  <td>{item.matricula}</td>
                  <td>{item.emprestimos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'multas':
        return (
          <table className="tabela-relatorio">
            <thead>
              <tr>
                <th>Nome do Usuário</th>
                <th>Matrícula</th>
                <th>Valor de multas pendentes</th>
              </tr>
            </thead>
            <tbody>
              {dadosRelatorioMultas.map((item, index) => (
                <tr key={index}>
                  <td>{item.usuario}</td>
                  <td>{item.matricula}</td>
                  <td>{item.multas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="painel-container relatorios-painel">
      <div className="cabecalho-relatorios">
        <h2>Relatórios</h2>
      </div>

      <div className="conteudo-relatorios">
        <div className="menu-relatorio">
          <ul>
            <li className={relatorioAtual === 'emprestimos' ? 'ativo' : ''} onClick={() => setRelatorioAtual('emprestimos')}>
              <i className="fas fa-book"></i>
              Livros mais emprestados
            </li>
            <li className={relatorioAtual === 'usuarios' ? 'ativo' : ''} onClick={() => setRelatorioAtual('usuarios')}>
              <i className="fas fa-users"></i>
              Usuários mais ativos
            </li>
            <li className={relatorioAtual === 'multas' ? 'ativo' : ''} onClick={() => setRelatorioAtual('multas')}>
              <i className="fas fa-dollar-sign"></i>
              Multas pendentes
            </li>
          </ul>
        </div>
        
        <div className="area-relatorio">
          <div className="filtros-relatorio">
            <label htmlFor="periodo">Período:</label>
            <select id="periodo">
              <option>Últimos 30 dias</option>
              <option>Últimos 90 dias</option>
              <option>Último ano</option>
            </select>
          </div>
          {renderizarTabela()}
        </div>
      </div>
    </div>
  );
};

export default Relatorios;