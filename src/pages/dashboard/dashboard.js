import React from 'react';
import './styles.css';

const Dashboard = () => {
  return (
    <div className="painel-container dashboard-painel">
      <div className="cabecalho-painel">
        <h2>Dashboard</h2>
        <span className="atualizacao">Atualizado em 17/09/2025, 16:46:51</span>
      </div>

      <div className="resumo-cards">
        <div className="card-resumo">
          <h3>Total de livros</h3>
          <p className="valor">1.247</p>
        </div>
        <div className="card-resumo">
          <h3>Usuários ativos</h3>
          <p className="valor">324</p>
        </div>
        <div className="card-resumo">
          <h3>Empréstimos ativos</h3>
          <p className="valor">87</p>
        </div>
        <div className="card-resumo">
          <h3>Em atraso</h3>
          <p className="valor">12</p>
        </div>
        <div className="card-resumo">
          <h3>Multas pendentes</h3>
          <p className="valor">R$ 234.50</p>
        </div>
        <div className="card-resumo">
          <h3>Novos neste mês</h3>
          <p className="valor">23</p>
        </div>
      </div>

      <div className="graficos-container">
        <div className="grafico-card">
          <h4>Empréstimos por mês</h4>
          <div className="grafico-barras">
            <div className="barra-item">
              <span className="label">Jan</span>
              <div className="barra" style={{ width: '80%' }}></div>
              <span className="valor-barra">156</span>
            </div>
            <div className="barra-item">
              <span className="label">Fev</span>
              <div className="barra" style={{ width: '70%' }}></div>
              <span className="valor-barra">142</span>
            </div>
            <div className="barra-item">
              <span className="label">Mar</span>
              <div className="barra" style={{ width: '90%' }}></div>
              <span className="valor-barra">178</span>
            </div>
            <div className="barra-item">
              <span className="label">Abr</span>
              <div className="barra" style={{ width: '85%' }}></div>
              <span className="valor-barra">165</span>
            </div>
            <div className="barra-item">
              <span className="label">Mai</span>
              <div className="barra" style={{ width: '68%' }}></div>
              <span className="valor-barra">134</span>
            </div>
            <div className="barra-item">
              <span className="label">Jun</span>
              <div className="barra" style={{ width: '100%' }}></div>
              <span className="valor-barra">198</span>
            </div>
          </div>
        </div>
        <div className="grafico-card">
          <h4>Categorias mais populares</h4>
          <div className="grafico-barras-h">
            <div className="barra-item-h">
              <span className="label-h">Literatura brasileira</span>
              <div className="barra-h" style={{ width: '90%', backgroundColor: '#4a90e2' }}></div>
              <span className="valor-barra-h">45</span>
            </div>
            <div className="barra-item-h">
              <span className="label-h">Ciências exatas</span>
              <div className="barra-h" style={{ width: '64%', backgroundColor: '#5cb85c' }}></div>
              <span className="valor-barra-h">32</span>
            </div>
            <div className="barra-item-h">
              <span className="label-h">História</span>
              <div className="barra-h" style={{ width: '56%', backgroundColor: '#7d52a2' }}></div>
              <span className="valor-barra-h">28</span>
            </div>
            <div className="barra-item-h">
              <span className="label-h">Informática</span>
              <div className="barra-h" style={{ width: '50%', backgroundColor: '#f0ad4e' }}></div>
              <span className="valor-barra-h">25</span>
            </div>
            <div className="barra-item-h">
              <span className="label-h">Administração</span>
              <div className="barra-h" style={{ width: '36%', backgroundColor: '#999999' }}></div>
              <span className="valor-barra-h">18</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;