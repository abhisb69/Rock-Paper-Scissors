import React, { useState } from "react";
import Paper from "../images/paper.png";
import Rock from "../images/rock.png";
import Scissors from "../images/scissors.png";
import "./Play.css";
const choices = ["Rock", "Paper", "Scissors"];

function Play() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ player: 0, computer: 0, draw: 0 });

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerRandomChoice =
      choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerRandomChoice);
    determineWinner(choice, computerRandomChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a draw!");
      setScore((prevScore) => ({ ...prevScore, draw: prevScore.draw + 1 }));
    } else if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      setResult("You Win!");
      setScore((prevScore) => ({ ...prevScore, player: prevScore.player + 1 }));
    } else {
      setResult("Computer Wins!");
      setScore((prevScore) => ({
        ...prevScore,
        computer: prevScore.computer + 1,
      }));
    }
  };

  return (
    <div className="main-wrapper">
      <div className="score-wraper">
        <h3>Score Board</h3>
        <div className="cardd">
          <p>Player</p>
          <p> {score.player}</p>
        </div>
        <div className="cardd">
          <p>Computer</p>
          <p> {score.computer}</p>
        </div>
        <div className="cardd">
          <p>Draw</p>
          <p> {score.draw}</p>
        </div>
      </div>
      <div className="wraper">
        <div className="ig">
          <div className="igg">
            <img
              src={Paper}
              alt=""
              onClick={() => handlePlayerChoice("Paper")}
            />
            <img src={Rock} alt="" onClick={() => handlePlayerChoice("Rock")} />
          </div>

          <img
            src={Scissors}
            alt=""
            onClick={() => handlePlayerChoice("Scissors")}
          />
          <h3>Your Choice: {playerChoice}</h3>
        </div>

        <div>
          {computerChoice === "Paper" ? (
            <img src={Paper} alt="Paper" />
          ) : computerChoice === "Rock" ? (
            <img src={Rock} alt="Rock" />
          ) : (
            <img src={Scissors} alt="Scissors" />
          )}
          <h3>Computer's Choice: {computerChoice}</h3>
        </div>
      </div>
      <h1>{result}</h1>
    </div>
  );
}

export default Play;
