import { useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "./data";
import "./style.css";


export default function Produtos() {
  const [activeProductIndex, setActiveProductIndex] = useState(0);

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

  const currentProduct = useMemo(() => PRODUCTS[activeProductIndex], [activeProductIndex]);

  return (
    <section id="produtos" className="products-section">
      <h2 className="products-title">Nossos produtos</h2>

      <div className="product-card">
        <div className="product-icon">{currentProduct.icon}</div>

        <h3 className="product-name">{currentProduct.title}</h3>

        <p className="product-description">{currentProduct.description}</p>

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
  );
}
