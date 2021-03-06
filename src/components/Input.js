import React from "react";
import "../styles/input.scss";

const Input = (props) => {
  return (
    <div className="custom-input">
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.label}
        required={props.required}
      />
    </div>
  );
};

export default Input;
