import celular from "../../assets/celular.png";
import missaoIcon from "../../assets/missaoIcon.png";
import visaoIcon from "../../assets/visaoIcon.png";
import eticaIcon from "../../assets/eticaIcon.png";
import atendimentoIcon from "../../assets/atendimentoIcon.png";
import focoIcon from "../../assets/focoIcon.png";
import inovacaoIcon from "../../assets/inovacaoIcon.png";
import "./style.css";

export default function Missao() {
  return (
    <section id="missao" className="missao">
      <h2 className="mission-title">Missão, Visão e Valores</h2>

      <div className="mission-top">
        <div className="mission-left">
          <div className="mission-phone-wrapper">
            <div className="mission-shape mission-shape-1" />
            <div className="mission-shape mission-shape-2" />
            <img
              src={celular}
              alt="Representação de celular"
              className="mission-phone-img"
            />
          </div>
        </div>

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
  );
}
