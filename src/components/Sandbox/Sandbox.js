import React from "react";
import Cardgame from "../../components/Games/CardGame/Cardgame";
import "./Sandbox.css";

function Sandbox() {
  return (
    <div className="sandbox">
      <h2 className="sandbox__heading">
        Здесь можно (будет) поиграть в змейку или составить план на будущее
      </h2>
      <Cardgame></Cardgame>
      {/* <SnakeGame/> */}
    </div>
  );
}

export default Sandbox;
