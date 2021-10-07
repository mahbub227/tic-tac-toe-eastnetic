import React, { useState } from "react";
import SingleBlock from "./SingleBlock";
import "../styles/game.scss";
import Form from "./Form";

const Game = () => {
  const [blockValues, setBlockValues] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [start, setStart] = useState(false);

  const handleClick = (i, e) => {
    e.target.disabled = true;
    let bv = blockValues.slice();
    if (findWinner(bv) || bv[i]) {
      return;
    }
    bv[i] = turn;
    setBlockValues(bv);
    setTurn(turn === "X" ? "O" : "X");
  };

  // find winner
  const findWinner = (blocks) => {
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
        var buttons = document.getElementsByClassName("single-block");
        for (let button of buttons) {
          button.disabled = true;
          if ([a, b, c].includes(parseInt(button.id.split("-")[1])))
            button.classList.add("win");
        }
        return blocks[a];
      }
    }
    return null;
  };

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
      <div className={`board ${start ? "hide" : "show"}`}>
        <Form startGame={setStart} />
      </div>
      <div className={`board hide ${start ? "show" : "hide"}`}>{fullBoard}</div>
    </div>
  );
};

export default Game;
