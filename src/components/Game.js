import React, { useState } from "react";
import SingleBlock from "./SingleBlock";
import "../styles/game.scss";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import Result from "./Result";
import { startGame } from "../redux/ducks/game";
import { playClick, victory, gameStart } from "../assets/globalAssets";

const Game = () => {
  const [blockValues, setBlockValues] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [result, setResult] = useState(false);
  const dispatch = useDispatch();
  const start = useSelector((state) => state.game.start);
  const playerX = useSelector((state) => state.players.playerX);
  const playerO = useSelector((state) => state.players.playerO);

  // handle click on block
  const handleClick = (i, e) => {
    let audio = new Audio(playClick.default);
    audio.play();
    e.target.disabled = true;
    let bv = blockValues.slice();
    if (bv[i] || result) return;
    bv[i] = turn;
    if (findWinner(bv)) setResult(true);
    else if (!bv.includes(null)) {
      setResult(true);
      let audioEnd = new Audio(victory.default);
      audioEnd.play();
    }
    setBlockValues(bv);
    setTurn(turn === "X" ? "O" : "X");
  };

  // find winner
  const findWinner = (blocks) => {
    // winning lines
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]) {
        // disable all block
        let buttons = document.getElementsByClassName("single-block");
        for (let button of buttons) {
          button.disabled = true;
          if ([a, b, c].includes(parseInt(button.id.split("-")[1])))
            button.classList.add("win");
        }
        let audio = new Audio(victory.default);
        audio.play();
        return blocks[a] === "X" ? playerX : playerO;
      }
    }
    return null;
  };

  // replay
  const playAgain = () => {
    setResult(false);
    setBlockValues(Array(9).fill(null));
    // restore all blocks
    let buttons = document.getElementsByClassName("single-block");
    for (let button of buttons) {
      button.classList.remove("win");
      button.disabled = false;
    }
    let audio = new Audio(gameStart.default);
    audio.play();
    dispatch(startGame());
  };

  // game status
  const status = result
    ? findWinner(blockValues) !== null
      ? `Congratulations ${findWinner(blockValues)}!`
      : "It's a tie!"
    : `${turn === "X" ? playerX : playerO}'s turn.`;

  //game board
  const fullBoard = blockValues.map((block, index) => {
    return (
      <SingleBlock
        value={block}
        index={index}
        key={index}
        onClick={(e) => handleClick(index, e)}
      />
    );
  });

  return (
    <div className="game">
      <p className={start ? "show" : "hide"}>{status}</p>
      <div className={`board ${start ? "hide" : "show"}`}>
        <Form />
      </div>
      <div className={`board hide ${start ? "show" : "hide"}`}>{fullBoard}</div>
      <div
        className={`board hide ${result ? "show-result" : "hide"} ${
          findWinner(blockValues) === null && "draw"
        }`}
      >
        <Result status={status} playAgain={playAgain} />
      </div>
    </div>
  );
};

export default Game;
