import React, { useRef } from "react";
import Input from "./Input";
import "../styles/form.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateX, updateO } from "../redux/ducks/players";
import { startGame } from "../redux/ducks/game";
import { gameStart } from "../assets/globalAssets";

const Form = () => {
  const playerX = useSelector((state) => state.players.playerX);
  const playerO = useSelector((state) => state.players.playerO);
  const dispatch = useDispatch();
  const startBtn = useRef(null);

  //Submit player names
  const letsPlay = () => {
    let audio = new Audio(gameStart.default);
    audio.play();
    dispatch(startGame());
  };

  return (
    <div className="form">
      <Input
        label="Name of Player 1"
        value={playerX}
        onChange={(e) => dispatch(updateX(e.target.value))}
        required={playerX === ""}
      />
      <Input
        label="Name of Player 2"
        value={playerO}
        onChange={(e) => dispatch(updateO(e.target.value))}
        required={playerO === ""}
      />
      <button
        type="submit"
        ref={startBtn}
        onClick={letsPlay}
        disabled={playerO === "" || playerX === ""}
      >
        Let's Play
      </button>
    </div>
  );
};

export default Form;
