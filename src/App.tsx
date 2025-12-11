import React, { useEffect, useState } from "react";
import "./App.css";

import logoCash7 from "./assets/logoCash7.png";
import cardGreen from "./assets/cartaoVerde.png";
import cardTransparent from "./assets/cartaoTransparente.png";

// NOVAS IMAGENS
import celular from "./assets/celular.png";

import missaoIcon from "./assets/missaoIcon.png";
import visaoIcon from "./assets/visaoIcon.png";

import eticaIcon from "./assets/eticaIcon.png";
import atendimentoIcon from "./assets/atendimentoIcon.png";
import focoIcon from "./assets/focoIcon.png";
import inovacaoIcon from "./assets/inovacaoIcon.png";

// =============================
// DADOS – CARROSSEL PRODUTOS
// =============================

type Product = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

const PRODUCTS: Product[] = [
  {
    id: "consignado",
    icon: "$",
    title: "Empréstimo Consignado",
    description:
      "Crédito seguro com desconto em folha para servidores públicos, com taxas competitivas e processo ágil.",
  },
  {
    id: "cartao-consignado",
    icon: "💳",
    title: "Cartão de Crédito Consignado",
    description:
      "Limite extra para o dia a dia, com desconto em folha e benefícios exclusivos para servidores públicos.",
  },
  {
    id: "seguros",
    icon: "🛡️",
    title: "Seguros em Grupo",
    description:
      "Proteção sob medida para empresas e colaboradores, com coberturas alinhadas às necessidades do setor público e privado.",
  },
];

// =============================
// DADOS – FAIXA (TICKER)
// =============================

const TICKER_ITEMS = [
  "Faça parte da Cash7",
  "Ética",
  "Transparência",
  "Atendimento personalizado",
  "Foco",
  "Inovação",
];

const App: React.FC = () => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);

  // Auto-play do carrossel a cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProductIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleNextProduct = () => {
    setActiveProductIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const handlePrevProduct = () => {
    setActiveProductIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const handleGoToProduct = (index: number) => {
    setActiveProductIndex(index);
  };

  const currentProduct = PRODUCTS[activeProductIndex];

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

      <main>
        {/* HERO / SECTION PRINCIPAL */}
        <section className="hero">
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
        </section>

        {/* SOBRE NÓS */}
        <section id="sobre" className="about">
          <h2 className="about-title">Sobre nós</h2>

          <div className="about-columns">
            <p>
              A Cash 7 Serviços Financeiros iniciou suas atividades em 2021 com
              uma missão clara e um foco de mercado bem definido: prover
              soluções de seguro de vida para empresas.
              <br />
              <br />
              Naquele momento, o objetivo era garantir segurança e
              tranquilidade para o setor corporativo, estabelecendo as bases da
              nossa expertise no mercado financeiro.
            </p>

            <p>
              No entanto, a história da Cash 7 é marcada pela capacidade de
              adaptação e visão de futuro. Acompanhando a rápida evolução dos
              tempos e as crescentes necessidades do mercado, percebemos a
              oportunidade de expandir nosso leque de atuação.
              <br />
              <br />
              Essa evolução nos levou a ampliar significativamente nossa gama de
              produtos e a diversificar nossa base de clientes, direcionando
              nosso portfólio para atender ao dinâmico setor de fintechs.
            </p>
          </div>

          <div className="about-highlight">
            <p>
              Hoje, a Cash 7 se orgulha de ter um alcance nacional, voltando
              seus produtos e serviços para atender servidores públicos em todo
              o Brasil. Nossa trajetória reflete nosso compromisso em crescer
              junto aos nossos parceiros e clientes, adaptando-nos
              constantemente para oferecer as melhores e mais completas soluções
              financeiras do mercado.
            </p>
          </div>
        </section>

        {/* MISSÃO, VISÃO E VALORES */}
        <section id="missao" className="mission">
          <h2 className="mission-title">Missão, Visão e Valores</h2>

          {/* Parte de cima: celular + texto + cards */}
          <div className="mission-top">
            {/* Celular + shapes */}
            <div className="mission-left">
              <div className="mission-phone-wrapper">
                <div className="mission-shape mission-shape-1" />
                <div className="mission-shape mission-shape-2" />
                <img
                  src={celular}
                  alt="Aplicativo Cash7 em um celular"
                  className="mission-phone-img"
                />
              </div>
            </div>

            {/* Texto central */}
            <div className="mission-center">
              <h3 className="mission-copy-title">
                A Cash7 oferece propósito, direção e compromisso.
              </h3>
              <p className="mission-copy-text">
                Nossa atuação é guiada por princípios sólidos que direcionam
                cada solução financeira e de seguros que levamos aos servidores
                públicos e fintechs em todo o Brasil.
              </p>
            </div>

            {/* Cards Missão / Visão */}
            <div className="mission-right">
              <div className="mission-card mission-card--mission">
                <div className="mission-card-header">
                  <img
                    src={missaoIcon}
                    alt="Ícone Missão"
                    className="mission-card-icon"
                  />
                  <span className="mission-card-title">Nossa Missão</span>
                </div>
                <p>
                  Prover soluções financeiras e de seguros inovadoras e
                  personalizadas, com foco em fintechs e servidores públicos em
                  todo o Brasil, garantindo segurança, solidez e contribuindo
                  para a tranquilidade e o planejamento financeiro de nossos
                  clientes.
                </p>
              </div>

              <div className="mission-card mission-card--vision">
                <div className="mission-card-header">
                  <img
                    src={visaoIcon}
                    alt="Ícone Visão"
                    className="mission-card-icon"
                  />
                  <span className="mission-card-title">Nossa Visão</span>
                </div>
                <p>
                  Ser a principal referência nacional em serviços financeiros
                  para o segmento público e parceiros fintechs, reconhecida pela
                  excelência no atendimento, agilidade nas soluções e pela
                  capacidade de antecipar as necessidades do mercado.
                </p>
              </div>
            </div>
          </div>

          {/* NOSSOS VALORES */}
          <div className="values-section">
            <h3 className="values-title">Nossos Valores</h3>

            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon-wrapper">
                  <img
                    src={eticaIcon}
                    alt="Ícone Ética e Transparência"
                    className="value-icon"
                  />
                </div>
                <div className="value-text">
                  <h4>Ética e Transparência</h4>
                  <p>
                    Atuamos com a máxima integridade, garantindo relações de
                    confiança e total clareza em todas as operações.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon-wrapper">
                  <img
                    src={atendimentoIcon}
                    alt="Ícone Atendimento Personalizado"
                    className="value-icon"
                  />
                </div>
                <div className="value-text">
                  <h4>Atendimento Personalizado</h4>
                  <p>
                    Valorizamos a personalização do atendimento para cada
                    indivíduo, adaptando soluções conforme necessário.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon-wrapper">
                  <img
                    src={focoIcon}
                    alt="Ícone Foco no Cliente"
                    className="value-icon"
                  />
                </div>
                <div className="value-text">
                  <h4>Foco no Cliente</h4>
                  <p>
                    Nossas soluções são desenvolvidas pensando nas necessidades
                    reais do servidor público e na agilidade exigida pelas
                    fintechs.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon-wrapper">
                  <img
                    src={inovacaoIcon}
                    alt="Ícone Inovação Contínua"
                    className="value-icon"
                  />
                </div>
                <div className="value-text">
                  <h4>Inovação Contínua</h4>
                  <p>
                    Buscamos constantemente novas tecnologias e produtos para
                    oferecer as melhores opções do mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NOSSOS PRODUTOS – CARROSSEL */}
        <section id="produtos" className="products-section">
          <h2 className="products-title">Nossos produtos</h2>

          <div className="product-card">
            <div className="product-icon">{currentProduct.icon}</div>

            <h3 className="product-name">{currentProduct.title}</h3>

            <p className="product-description">
              {currentProduct.description}
            </p>

            <div className="product-controls">
              <button
                className="product-arrow"
                onClick={handlePrevProduct}
                aria-label="Produto anterior"
              >
                &#x25C0;
              </button>
              <button
                className="product-arrow"
                onClick={handleNextProduct}
                aria-label="Próximo produto"
              >
                &#x25B6;
              </button>
            </div>

            <div className="product-dots">
              {PRODUCTS.map((product, index) => (
                <button
                  key={product.id}
                  className={
                    "product-dot" +
                    (index === activeProductIndex ? " product-dot--active" : "")
                  }
                  onClick={() => handleGoToProduct(index)}
                  aria-label={`Ir para ${product.title}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAIXA ANIMADA – VALORES TIPO "COBRA" */}
        <section className="ticker">
          <div className="ticker-inner">
            {TICKER_ITEMS.map((text, idx) => (
              <span key={idx} className="ticker-item">
                {text}
              </span>
            ))}
            {/* Duplicado para formar loop contínuo */}
            {TICKER_ITEMS.map((text, idx) => (
              <span key={`clone-${idx}`} className="ticker-item">
                {text}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
