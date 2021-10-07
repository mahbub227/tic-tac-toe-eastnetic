import React, { useState, useRef } from "react";
import Input from "./Input";
import "../styles/form.scss";

const Form = (props) => {
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");
  const startBtn = useRef(null);

  return (
    <div className="form">
      <Input
        label="Name of Player 1"
        value={playerX}
        onChange={(e) => setPlayerX(e.target.value)}
      />
      <Input
        label="Name of Player 2"
        value={playerO}
        onChange={(e) => setPlayerO(e.target.value)}
      />
      <button
        type="submit"
        ref={startBtn}
        onClick={() => props.startGame(true)}
        disabled={playerO === "" || playerX === ""}
      >
        Let's Play
      </button>
    </div>
  );
};

export default Form;
