import { TICKER_ITEMS } from "./data";
import "./style.css";


export default function Ticker() {
  return (
    <section className="ticker">
      <div className="ticker-inner">
        {TICKER_ITEMS.map((text, idx) => (
          <span key={idx} className="ticker-item">
            {text}
          </span>
        ))}

        {TICKER_ITEMS.map((text, idx) => (
          <span key={`clone-${idx}`} className="ticker-item">
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
