import { Button } from "react-bootstrap";
import { GiRollingDices } from "react-icons/gi";
import { BsFillDice1Fill } from "react-icons/bs";
import { BsFillDice2Fill } from "react-icons/bs";
import { BsFillDice3Fill } from "react-icons/bs";
import { BsFillDice4Fill } from "react-icons/bs";
import { BsFillDice5Fill } from "react-icons/bs";
import { BsFillDice6Fill } from "react-icons/bs";
import './dice.scss';

interface PropsInterface {
  rollDice: any,
  diceResult: number | null
}
const Dice = ({ rollDice, diceResult }: PropsInterface) => {

  const getDiceIcon = () => {
    let diceIcon = null;
    switch (diceResult) {
      case 1:
        diceIcon = <BsFillDice1Fill className="dice-result-icon" size={"70px"} />
        break;

      case 2:
        diceIcon = <BsFillDice2Fill className="dice-result-icon" size={"70px"} />
        break;

      case 3:
        diceIcon = <BsFillDice3Fill className="dice-result-icon" size={"70px"} />
        break;

      case 4:
        diceIcon = <BsFillDice4Fill className="dice-result-icon" size={"70px"} />
        break;

      case 5:
        diceIcon = <BsFillDice5Fill className="dice-result-icon" size={"70px"} />
        break;

      case 6:
        diceIcon = <BsFillDice6Fill className="dice-result-icon" size={"70px"} />
        break;

      default:
        break;
    }
    return diceIcon;
  }

  const rollDiceClicked = () => {
    const rollingDiceIcon = document.getElementById('rollingDice');
    if (rollingDiceIcon) {
      rollingDiceIcon.style.rotate = '360deg';
      setTimeout(() => {
        rollingDiceIcon.style.rotate = '0deg';
        rollDice();
      }, 500);
    }
  }

  return (
    <div className='diceWrapper'>
      <div className="roll-dice-container">
        <GiRollingDices className="rolling-dice-icon" id="rollingDice" size={"40px"} />
        <Button onClick={() => rollDiceClicked()}>Roll Dice</Button>
      </div>
      <div className="dice-result">
        {getDiceIcon()}
      </div>
    </div>
  )
}

export default Dice