import logoCash7 from "../../assets/logoCash7.png";
import cartaoVerde from "../../assets/cartaoVerde.png";
import cartaoTransparente from "../../assets/cartaoTransparente.png";
import "./style.css";

export default function Hero() {
  return (
    <section className="hero">
      <section className="hero-text">
        <h1>
          Solução financeira&nbsp;para <br />
          Servidores Públicos
        </h1>


        <p>
          Inovação, segurança e confiança em serviços financeiros personalizados para você.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary">Seja Nosso Parceiro</button>
          <button className="btn btn-secondary">Saiba Mais</button>
        </div>
      </section>

      <section className="hero-art">
        <img
          src={cartaoTransparente}
          alt="Cartão Cash7 transparente"
          className="card-img card-img-back"
        />
        <img
          src={cartaoVerde}
          alt="Cartão Cash7 verde"
          className="card-img card-img-front"
        />
        <img src={logoCash7} alt="Logo Cash7" className="logo-img" />
      </section>
    </section>
  );
}
