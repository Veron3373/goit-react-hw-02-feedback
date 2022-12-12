import React from "react";
import css from './Controlc.module.css'


const Control = ({ onGood, onNeutral, onBad }) => (
  <div className={css.sectionButton}>
    <button className={css.buttonOnClick} tupe='button' onClick={onGood}>
      Good
    </button>
    <button className={css.buttonOnClick}  tupe='button' onClick={onNeutral}>
      Neutral
    </button>
    <button className={css.buttonOnClick} tupe='button' onClick={onBad}>
      onBad
    </button>
  </div>
)

export default Control


