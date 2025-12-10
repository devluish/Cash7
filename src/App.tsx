import React from "react";
import "./App.css";
import logoCash7 from "./assets/logoCash7.png";
import cardGreen from "./assets/cartaoVerde.png";
import cardTransparent from "./assets/cartaoTransparente.png";

const App: React.FC = () => {
  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        {/* Logo com imagem */}
        <img src={logoCash7} alt="Logo Cash7" className="logo" />

        <nav className="nav">
          <a href="#sobre">Sobre nós</a>
          <a href="#missao">Missão & Visão</a>
          <a href="#produtos">Produtos</a>
          <a href="#simulacao">Simulação</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* HERO / SECTION PRINCIPAL */}
      <main className="hero">
        <section className="hero-text">
          <h1>
            Solução financeira <br /> para Servidores Públicos
          </h1>

          <p>
            Inovação, segurança e confiança em serviços financeiros
            personalizados para você.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">Seja Nosso Parceiro</button>
            <button className="btn btn-secondary">Saiba Mais</button>
          </div>
        </section>

        {/* LADO DIREITO – CARTÕES EM IMAGEM */}
        <section className="hero-art">
          <img
            src={cardTransparent}
            alt="Cartão Cash7 transparente"
            className="card-img card-img-back"
          />
          <img
            src={cardGreen}
            alt="Cartão Cash7 verde"
            className="card-img card-img-front"
          />
        </section>
      </main>
    </div>
  );
};

export default App;
