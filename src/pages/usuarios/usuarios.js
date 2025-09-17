import React from 'react';
import './styles.css';

const usuariosMock = [
  {
    nome: 'Ana Silva Santos',
    email: 'ana.santos@escola.edu.br',
    telefone: '(11) 99999-1234',
    matricula: 'EST2924001',
    serie: '2º Ano',
    turma: 'Informática A',
    cadastro: '14/01/2024',
    status: 'Ativo',
    multasPendentes: null,
  },
  {
    nome: 'Carlos Eduardo Lima',
    email: 'carlos.lima@escola.edu.br',
    telefone: '(11) 99999-5678',
    matricula: 'EST2924002',
    serie: '3º Ano',
    turma: 'Eletrônica B',
    cadastro: '19/01/2024',
    status: 'Ativo',
    multasPendentes: 'R$ 15.50',
  },
  {
    nome: 'Mariana Costa',
    email: 'mariana.costa@escola.edu.br',
    telefone: '(11) 99999-9876',
    matricula: 'EST2924003',
    serie: '1º Ano',
    turma: 'Administração A',
    cadastro: '31/01/2024',
    status: 'Ativo',
    multasPendentes: null,
  },
  {
    nome: 'Pedro Henrique Silva',
    email: 'pedro.silva@escola.edu.br',
    telefone: '(11) 99999-4321',
    matricula: 'EST2924004',
    serie: '2º Ano',
    turma: 'Mecânica B',
    cadastro: '14/02/2024',
    status: 'Ativo',
    multasPendentes: null,
  },
];

const Usuarios = () => {
  return (
    <div className="painel-container usuarios-painel">
      <div className="cabecalho-usuarios">
        <div className="titulo-painel">
          <h2>Gerenciamento de usuários</h2>
        </div>
        <div className="controles-superiores">
          <input type="text" placeholder="Buscar por nome, email ou matrícula..." className="input-busca" />
          <select className="select-filtro">
            <option>Todos os anos</option>
            <option>1º Ano</option>
            <option>2º Ano</option>
            <option>3º Ano</option>
          </select>
          <button className="botao-adicionar">+ Adicionar usuário</button>
        </div>
        <div className="total-usuarios">
          4 de 4 usuários
        </div>
      </div>

      <div className="lista-usuarios">
        {usuariosMock.map((usuario, index) => (
          <div className="cartao-usuario" key={index}>
            <div className="cartao-cabecalho">
              <h3>{usuario.nome}</h3>
              <div className="icones-acao">
                <i className="fas fa-pencil-alt"></i>
                <i className="fas fa-trash-alt"></i>
              </div>
            </div>
            <p className="cartao-info">{usuario.email}</p>
            <p className="cartao-info">{usuario.telefone}</p>
            <div className="cartao-detalhes">
              <p><span>Matrícula:</span> {usuario.matricula}</p>
              <p><span>Série:</span> {usuario.serie}</p>
              <p><span>Turma:</span> {usuario.turma}</p>
              <p><span>Cadastro:</span> {usuario.cadastro}</p>
            </div>
            {usuario.multasPendentes && (
              <div className="cartao-multa">
                <i className="fas fa-exclamation-triangle"></i>
                Multas Pendentes: <span className="valor-multa">{usuario.multasPendentes}</span>
              </div>
            )}
            <div className={`status ${usuario.status.toLowerCase()}`}>
              {usuario.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usuarios;