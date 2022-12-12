import React from "react";

const Control = ({ onGood, onNeutral, onBad }) => (
  <div>
    <button tupe='button' onClick={onGood}>
      Good
    </button>
    <button tupe='button' onClick={onNeutral}>
      Neutral
    </button>
    <button tupe='button' onClick={onBad}>
      onBad
    </button>
  </div>
)

export default Control

  
