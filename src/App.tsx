import "./App.css";

import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Sobre from "./pages/Sobre/Sobre";
import Missao from "./pages/Missao/Missao";
import Produtos from "./pages/Produtos/Produtos";
import Ticker from "./pages/Ticker/Ticker";

export default function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <Sobre />
        <Missao />
        <Produtos />
        <Ticker />
      </main>
    </div>
  );
}
