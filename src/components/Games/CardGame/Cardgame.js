import React from 'react';
import './Cardgame.css'

function Cardgame() {
  const [points, setPoints] = React.useState(0);
  const [opponentPoints, setOppoPoints] = React.useState(0);
  const [cardText, setCardText] = React.useState(' ');
  const [winnerText, setWinnerText] = React.useState(' ');
  const [buttonState, setButtonState] = React.useState(false)

  function startGame() {
    let point = Math.floor(Math.random() * 10 + 2);
    let oppoPoint = Math.floor(Math.random() * 10 + 2);
    switch (point) {
      case 1:
        setCardText('Непонятно что на карте, поэтому добавим 1 балл');
        break;
      case 2:
        setCardText('Из колоды появляется валет бубей');
        break;
      case 3:
        setCardText('Вы вытянули даму пикей');
        break;
      case 4:
        setCardText('Вам попался червонный король');
        break;
      case 5:
        setCardText('Вы вытянули туз пик');
        point = 11;
        break;
      case 6:
        setCardText('Подъехала шестерка');
        break;
      case 7:
        setCardText('Вы вытянули семёрку');
        break;
      case 8:
        setCardText('Вы вытянули восьмёрку');
        break;
      case 9:
        setCardText('Вы вытянули девятку');
        break;
      case 10:
        setCardText('Вы вытянули десятку');
        break;
    }

    oppoPoint = oppoPoint + opponentPoints;
    point = points + point;

    if (point > 21 & oppoPoint > 21) {
      setWinnerText('Выигрывает банк')
      setButtonState(true)
    } else if (point > 21) {
      setWinnerText('Вы проиграли')
      setButtonState(true)
    } else if (oppoPoint > 21) {
      setWinnerText('Вы выйграли')
      setButtonState(true)
    }

    setPoints(point);
    setOppoPoints(oppoPoint);
  }

  function resetGame() {
    setPoints(0);
    setOppoPoints(0)
    setCardText(' ')
    setWinnerText(' ')
    setButtonState(false)
  }

  return (
    <div className="cardgame">
      <div className="cardgame__textcontainer">
        <h2 className="cardgame__heading">Карточная игра.</h2>
        <p className="cardgame__subheading">Вы состязаетесь с ботом, кто быстрее наберет 21 очко.</p>
      </div>
      <div className="cardgame__gamecontainer">
        <h3 className="cardgame__points">{`Сейчас набрано ${points} очков. Ваш опонент набрал ${opponentPoints} очков`}</h3>
        <p className="cardgame__text">{`${cardText}. ${winnerText}`}</p>
        <button disabled={buttonState} className={`cardgame__button ${buttonState && 'cardgame__button_disabled'}`} onClick={startGame}>
          Взять карту
        </button>
        <button className={`cardgame__button`} onClick={resetGame}>
          Начать новую игру
        </button>
      </div>
    </div>
  );
}

export default Cardgame;
