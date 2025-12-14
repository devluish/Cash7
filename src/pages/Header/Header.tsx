import logoCash7 from "../../assets/logoCash7.png";
import navIcon from "../../assets/navIcon.png";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <img src={logoCash7} alt="Logo Cash7" className="logo" />

      <nav className="nav">
        <a href="#sobre">
          Sobre nós <img src={navIcon} alt="" className="nav-icon" />
        </a>

        <a href="#missao">
          Missão & Visão <img src={navIcon} alt="" className="nav-icon" />
        </a>

        <a href="#produtos">
          Produtos <img src={navIcon} alt="" className="nav-icon" />
        </a>

        <a href="#simulacao">
          Simulação <img src={navIcon} alt="" className="nav-icon" />
        </a>

        <a href="#contato">
          Contato <img src={navIcon} alt="" className="nav-icon" />
        </a>
      </nav>
    </header>
  );
}
