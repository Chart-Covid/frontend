import React, { useState } from "react";

import ArrowUp from "./ArrowUp";
import "./styles.scss";

export const Top10 = ({ topCountries }) => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    if (toggle === false) {
      setToggle(true);
    } else if (toggle === true) {
      setToggle(false);
    }
  };

  return (
    <footer className={toggle ? "top10" : "top10 top10Description"} onClick={handleClick}>
      <div className="top10__title">
        <div>
          <ArrowUp />
          <p>Top 10 infectados</p>
        </div>
      </div>
      {toggle ? (
        ""
      ) : (
        <div className="carrousel">
          {Object.keys(topCountries).map((pais, idx) => {
            return (
              <div className="cards__top10" key={idx}>
                <p>
                  {idx + 1}. {pais}
                </p>
                <h1>{topCountries[pais]}</h1>
              </div>
            );
          })}
        </div>
      )}
    </footer>
  );
};
