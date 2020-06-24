import React, { useState, useEffect } from 'react'

import ArrowUp from "./ArrowUp"
import "./styles.scss"

const Top10 = () => {
  const [toggle, setToggle] = useState(false)
  // const holi = "holi "


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
        <ArrowUp />
        <p>Top 10</p>
        {
          toggle ? "" : <div className="carrousel">
            <h1>Carrousel</h1>
          </div>
        }
      </div>
    </footer>
  )
}

export default Top10
