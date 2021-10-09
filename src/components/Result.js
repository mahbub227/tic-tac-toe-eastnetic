import React from "react";
import "../styles/result.scss";

const Result = (props) => {
  return (
    <div className="result">
      <p>{props.status}</p>
      <button onClick={props.playAgain}>Play Again</button>
    </div>
  );
};

export default Result;
