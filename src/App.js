import { useState, useEffect } from "react";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

function App() {
  return (
    <div className="container">
      <h1>Advice</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
        maiores.
      </p>

      <picture>
        <source media="(min-width: 768px)" srcSet={pauseDesktop} />
        <img src={pauseMobile} alt="" />
      </picture>

      <div>
        <button>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
