import React from "react"

export const Good = ({ good }) => <span>Good {good} </span>;
export const Neutral = ({ neutral }) => <span>Neutral {neutral} </span>;
export const Bad = ({ bad }) => <span>Bad {bad} </span>;
export const Total = ({ total }) => <span>Total {total} </span>;

export const PositiveFeedback = ({ feedbac }) => <span> Positive feedback {feedbac} </span>;



// export const data = ({ good, neutral, bad, total }) => (
//   <div>
//     <span>Good {good} </span>;
//     <span>Neutral {neutral} </span>;
//     <span>Bad {bad} </span>;
//     <span>Total {total} </span>
//   </div>
// )
