import React from 'react';
import './styles.css';

const multasPendentes = [
  {
    livro: 'Clean Code',
    usuario: 'Carlos Eduardo Lima',
    matricula: 'EST2924002',
    valor: 'R$ 15,50',
    motivo: 'Atraso na devolução - 31 dias',
    dataEmissao: '02/11/2024',
    status: 'Pendentes',
  },
  {
    livro: 'A Revolução dos Bichos',
    usuario: 'Pedro Henrique Silva',
    matricula: 'EST2924004',
    valor: 'R$ 42,00',
    motivo: 'Dano ao livro',
    dataEmissao: '14/10/2024',
    status: 'Pendentes',
  },
];

const usuariosComMulta = [
  {
    nome: 'Carlos Eduardo Lima',
    matricula: 'EST2924002',
    email: 'carlos.lima@escola.edu.br',
    valorMulta: 'R$ 15,50',
  },
  {
    nome: 'Pedro Henrique Silva',
    matricula: 'EST2924004',
    email: 'pedro.silva@escola.edu.br',
    valorMulta: 'R$ 42,00',
  },
];

const Multas = () => {
  return (
    <div className="painel-container multas-painel">
      <div className="cabecalho-multas">
        <div className="titulo-painel">
          <h2>Controle de multas</h2>
        </div>
      </div>
      
      <div className="resumo-multas">
        <div className="card-multa-resumo">
          <h3>Multas Pendentes</h3>
          <p className="valor-resumo-multa">2</p>
        </div>
        <div className="card-multa-resumo">
          <h3>Pagas Hoje</h3>
          <p className="valor-resumo-multa">0</p>
        </div>
        <div className="card-multa-resumo">
          <h3>Total Arrecadado</h3>
          <p className="valor-resumo-multa">R$ 0.00</p>
        </div>
        <div className="card-multa-resumo">
          <h3>Perdoadas</h3>
          <p className="valor-resumo-multa">0</p>
        </div>
      </div>

      <div className="conteudo-multas">
        <div className="tabela-multas-container">
          <div className="controles-tabela">
            <input type="text" placeholder="Buscar por usuário ou motivo..." className="input-busca" />
            <select className="select-filtro">
              <option>Todos os Status</option>
              <option>Pendentes</option>
              <option>Pagas</option>
            </select>
          </div>
          <h3>Lista de multas</h3>
          <table className="tabela-multas">
            <thead>
              <tr>
                <th>Usuário</th>
                <th>Livro</th>
                <th>Valor</th>
                <th>Motivo</th>
                <th>Data de emissão</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {multasPendentes.map((multa, index) => (
                <tr key={index}>
                  <td>{multa.usuario}</td>
                  <td>{multa.livro}</td>
                  <td>{multa.valor}</td>
                  <td>{multa.motivo}</td>
                  <td>{multa.dataEmissao}</td>
                  <td>
                    <button className="botao-acao pagar">Pagar</button>
                    <button className="botao-acao perdoar">Perdoar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="usuarios-multas-pendentes">
            <h3>Usuários com multas pendentes</h3>
            <div className="lista-usuarios-multa">
              {usuariosComMulta.map((usuario, index) => (
                <div className="cartao-usuario-multa" key={index}>
                  <h4>{usuario.nome}</h4>
                  <p>Multas pendentes: <span className="valor-multa-destaque">{usuario.valorMulta}</span></p>
                  <p>Matrícula: {usuario.matricula}</p>
                  <p>Email: {usuario.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multas;