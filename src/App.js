import { useState, useEffect } from "react";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState({});

  const getAdvice = async () => {
    try {
      const res = await fetch(`https://api.adviceslip.com/advice`);
      const data = await res.json();
      const { slip } = data;

      setAdvice(slip);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <h1>Advice</h1>
      <p>{advice.advice}</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={pauseDesktop} />
        <img src={pauseMobile} alt="" />
      </picture>

      <div>
        <button onClick={getAdvice}>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
