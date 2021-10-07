import React from "react";
import "../styles/singleBlock.scss";

const SingleBlock = (props) => {
  return (
    <button
      className="single-block"
      onClick={props.onClick}
      id={`block-${props.index}`}
      name={props.value}
    >
      {props.value}
    </button>
  );
};

export default SingleBlock;
