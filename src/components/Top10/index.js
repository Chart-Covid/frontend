import React, { useState } from 'react'

import ArrowUp from "./ArrowUp"
import "./styles.scss"

const Top10 = () => {
  const [toggle, setToggle] = useState(false)

    const handleClick = () => {
      if (toggle === false) {
        setToggle(true)
      } else if (toggle === true) {
        setToggle(false)
      }
    }

  return (
    <footer className={toggle ? "top10" : "top10 top10Description"} onClick={handleClick} >
      <div className="top10__title">
        <div>
          <ArrowUp />
          <p>Top 10 infectados</p>
        </div>
      </div>
      {
          toggle ? "" : 
          <div className="carrousel">
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                return <div class="cards__top10">
                  <p>1. País</p>
                  <h1>0</h1>
                </div>;
              })
            }
          </div>
        }
    </footer>
  )
}

export default Top10
