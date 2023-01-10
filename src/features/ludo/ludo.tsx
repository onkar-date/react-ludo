import { useState, useEffect } from "react";
import "./ludo.scss";
import { BiStar } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { BLUE_ROUTES, GREEN_ROUTES, PLAYER, RED_ROUTES, YELLOW_ROUTES } from "./ludo.constants";
import LudoPlayerIndicatorTable from "./PlayerIndicatorTable/LudoPlayerIndicatorTable";
import Dice from "./Dice/Dice";

interface stateInterface {
  [key: string]: any,
}
const Ludo = () => {

  const basicUnit = 42;
  const offsetTop = 55;
  const delta = 7;
  const PLAYER_TURNS = [PLAYER.green, PLAYER.yellow, PLAYER.blue, PLAYER.red];
  const [gameData, setGameData] = useState<stateInterface>({
    green: {
      player1: { currentPosition: -1 },
      player2: { currentPosition: -1 },
      player3: { currentPosition: -1 },
      player4: { currentPosition: -1 },
      routes: GREEN_ROUTES,
    },
    yellow: {
      player1: { currentPosition: -1 },
      player2: { currentPosition: -1 },
      player3: { currentPosition: -1 },
      player4: { currentPosition: -1 },
      routes: YELLOW_ROUTES,
    },
    blue: {
      player1: { currentPosition: -1 },
      player2: { currentPosition: -1 },
      player3: { currentPosition: -1 },
      player4: { currentPosition: -1 },
      routes: BLUE_ROUTES,
    },
    red: {
      player1: { currentPosition: -1 },
      player2: { currentPosition: -1 },
      player3: { currentPosition: -1 },
      player4: { currentPosition: -1 },
      routes: RED_ROUTES,
    },
  });
  const [currentlyPlaying, setCurrentlyPlaying] = useState({
    color: PLAYER.green,
    name: ''
  });
  const [diceRolled, setDiceRolled] = useState<number | null>(null);
  const [roundStatus, setRoundStatus] = useState<string>('idle');

  useEffect(() => {
    if (roundStatus === 'started') {
      playRound();
    }
  }, [roundStatus]);

  const playRound = () => {
    const player = document.getElementById(`${currentlyPlaying.color}-${currentlyPlaying.name}`);
    if (player) {
      player.style.top = getNewPosition(true);
      player.style.left = getNewPosition(false);
      updateGameData();
    }
  };

  const getNewPosition = (top: boolean): string => {
    const routes = gameData[currentlyPlaying.color].routes;
    const currentPosition = getSelectedPlayerPosition();
    const newPosition = routes[gameData[currentlyPlaying.color][currentlyPlaying.name].currentPosition + diceRolled];
    if (currentPosition === -1) {
      if (diceRolled === 6) {
        const firstPosition = routes[0];
        return top ? `${(firstPosition.top * basicUnit) + delta + offsetTop}px` : `${(firstPosition.left * basicUnit) + delta}px`;
      } else {
        return '';
      }
    } else {
      if (top) {
        return `${(newPosition.top * basicUnit) + delta + offsetTop}px`;
      } else {
        return `${(newPosition.left * basicUnit) + delta}px`;
      }
    }

  };

  const updateGameData = () => {
    setGameData((prev) => {
      const updatedPosition = getUpdatedPosition();
      const updated = {
        ...prev,
        [currentlyPlaying.color]: {
          ...prev[currentlyPlaying.color],
          [currentlyPlaying.name]: {
            ...prev[currentlyPlaying.color][currentlyPlaying.name],
            currentPosition: updatedPosition
          }
        },
      };
      console.log("updated = ", updated);
      return updated;
    });
    setDiceRolled(null);
    setRoundStatus('idle');
    setCurrentlyPlaying({
      color: getNextPlayingColor(),
      name: ''
    })
  }

  const getUpdatedPosition = (): number => {
    const currentPosition = getSelectedPlayerPosition();
    if (currentPosition === -1) {
      if (diceRolled === 6) {
        return 0;
      } else {
        return -1;
      }
    } else {
      return gameData[currentlyPlaying.color][currentlyPlaying.name].currentPosition + diceRolled;
    }

  }

  const getNextPlayingColor = (): string => {
    if (diceRolled !== 6) {
      console.log('next turn = ', PLAYER_TURNS[PLAYER_TURNS.indexOf(currentlyPlaying.color) + 1] || PLAYER_TURNS[0]);

      return PLAYER_TURNS[PLAYER_TURNS.indexOf(currentlyPlaying.color) + 1] || PLAYER_TURNS[0];
    } else {
      return currentlyPlaying.color;
    }
  }

  const rollDice = () => {
    setDiceRolled(Math.floor(Math.random() * 6) + 1);
  }

  const setPlayerToMove = (colorSelectedForPlaying: string, playerName: string) => {
    if (currentlyPlaying.color === colorSelectedForPlaying && diceRolled !== null) {
      setCurrentlyPlaying({
        color: colorSelectedForPlaying,
        name: playerName
      });
      setRoundStatus('started');
    }
  }

  const getSelectedPlayerPosition = (): number => {
    const player = gameData[currentlyPlaying.color];
    return player[currentlyPlaying.name].currentPosition;
  }

  return (
    <>
      {/* Game Board */}
      <div className="game">
        <div className="game-board">
          {/* Green Player */}
          <div className="player greenPlayer player-1" id="green-player1" onClick={() => setPlayerToMove(PLAYER.green, 'player1')}></div>
          <div className="player greenPlayer player-2" id="green-player2" onClick={() => setPlayerToMove(PLAYER.green, 'player2')}></div>
          <div className="player greenPlayer player-3" id="green-player3" onClick={() => setPlayerToMove(PLAYER.green, 'player3')}></div>
          <div className="player greenPlayer player-4" id="green-player4" onClick={() => setPlayerToMove(PLAYER.green, 'player4')}></div>

          {/* Yellow Player */}
          <div className="player yellowPlayer player-1" id="yellow-player1" onClick={() => setPlayerToMove(PLAYER.yellow, 'player1')}></div>
          <div className="player yellowPlayer player-2" id="yellow-player2" onClick={() => setPlayerToMove(PLAYER.yellow, 'player2')}></div>
          <div className="player yellowPlayer player-3" id="yellow-player3" onClick={() => setPlayerToMove(PLAYER.yellow, 'player3')}></div>
          <div className="player yellowPlayer player-4" id="yellow-player4" onClick={() => setPlayerToMove(PLAYER.yellow, 'player4')}></div>

          {/* Blue Player */}
          <div className="player bluePlayer player-1" id="blue-player1" onClick={() => setPlayerToMove(PLAYER.blue, 'player1')}></div>
          <div className="player bluePlayer player-2" id="blue-player2" onClick={() => setPlayerToMove(PLAYER.blue, 'player2')}></div>
          <div className="player bluePlayer player-3" id="blue-player3" onClick={() => setPlayerToMove(PLAYER.blue, 'player3')}></div>
          <div className="player bluePlayer player-4" id="blue-player4" onClick={() => setPlayerToMove(PLAYER.blue, 'player4')}></div>

          {/* Red Player */}
          <div className="player redPlayer player-1" id="red-player1" onClick={() => setPlayerToMove(PLAYER.red, 'player1')}></div>
          <div className="player redPlayer player-2" id="red-player2" onClick={() => setPlayerToMove(PLAYER.red, 'player2')}></div>
          <div className="player redPlayer player-3" id="red-player3" onClick={() => setPlayerToMove(PLAYER.red, 'player3')}></div>
          <div className="player redPlayer player-4" id="red-player4" onClick={() => setPlayerToMove(PLAYER.red, 'player4')}></div>

          <div className="wrapper">
            {/* Top Section */}
            <div className="topSection section">
              <div className="playerHome topGreen">
                <div className="innerDiv">
                  <div className="d-flex justify-content-evenly">
                    <div className="playerPlaceholder player1"></div>
                    <div className="playerPlaceholder player2"></div>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <div className="playerPlaceholder player3"></div>
                    <div className="playerPlaceholder player4"></div>
                  </div>
                </div>
              </div>
              <div className="pathColumnSection topMiddle">
                <div className="pathColumn leftColumn">
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell">
                    <BiStar size={"25px"} className="safeHouse" />
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="pathColumn middleColumn">
                  <div className="cell"></div>
                  <div className="cell yellowBg"></div>
                  <div className="cell yellowBg"></div>
                  <div className="cell yellowBg"></div>
                  <div className="cell yellowBg"></div>
                  <div className="cell yellowBg"></div>
                </div>
                <div className="pathColumn rightColumn">
                  <div className="cell"></div>
                  <div className="cell yellowBg"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
              </div>
              <div className="playerHome topYellow">
                <div className="innerDiv">
                  <div className="d-flex justify-content-evenly">
                    <div className="playerPlaceholder player1"></div>
                    <div className="playerPlaceholder player2"></div>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <div className="playerPlaceholder player3"></div>
                    <div className="playerPlaceholder player4"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Section */}
            <div className="middleSection section">
              <div className="pathRowSection middleLeft">
                <div className="pathRow">
                  <div className="cell"></div>
                  <div className="cell greenBg"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="pathRow">
                  <div className="cell"></div>
                  <div className="cell greenBg"></div>
                  <div className="cell greenBg"></div>
                  <div className="cell greenBg"></div>
                  <div className="cell greenBg"></div>
                  <div className="cell greenBg"></div>
                </div>
                <div className="pathRow">
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell">
                    <BiStar size={"25px"} className="safeHouse" />
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
              </div>
              <div className="winningArea">
                <div className="greenWinArea"></div>
                <div className="yellowWinArea"></div>
                <div className="blueWinArea"></div>
                <div className="redWinArea"></div>
              </div>
              <div className="pathRowSection middleRight">
                <div className="pathRow">
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell">
                    <BiStar size={"25px"} className="safeHouse" />
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
                <div className="pathRow">
                  <div className="cell blueBg"></div>
                  <div className="cell blueBg"></div>
                  <div className="cell blueBg"></div>
                  <div className="cell blueBg"></div>
                  <div className="cell blueBg"></div>
                  <div className="cell"></div>
                </div>
                <div className="pathRow">
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell blueBg"></div>
                  <div className="cell"></div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="bottomSection section">
              <div className="playerHome bottomRed">
                <div className="innerDiv">
                  <div className="d-flex justify-content-evenly">
                    <div className="playerPlaceholder player1"></div>
                    <div className="playerPlaceholder player2"></div>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <div className="playerPlaceholder player3"></div>
                    <div className="playerPlaceholder player4"></div>
                  </div>
                </div>
              </div>
              <div className="pathColumnSection bottomMiddle">
                <div className="pathColumn leftColumn">
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell redBg"></div>
                  <div className="cell"></div>
                </div>
                <div className="pathColumn middleColumn">
                  <div className="cell redBg"></div>
                  <div className="cell redBg"></div>
                  <div className="cell redBg"></div>
                  <div className="cell redBg"></div>
                  <div className="cell redBg"></div>
                  <div className="cell"></div>
                </div>
                <div className="pathColumn rightColumn">
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                  <div className="cell">
                    <BiStar size={"25px"} className="safeHouse" />
                  </div>
                  <div className="cell"></div>
                  <div className="cell"></div>
                </div>
              </div>
              <div className="playerHome bottomBlue">
                <div className="innerDiv">
                  <div className="d-flex justify-content-evenly">
                    <div className="playerPlaceholder player1"></div>
                    <div className="playerPlaceholder player2"></div>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <div className="playerPlaceholder player3"></div>
                    <div className="playerPlaceholder player4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dice-section">
          <Dice rollDice={rollDice} diceResult={diceRolled}></Dice>
          <LudoPlayerIndicatorTable playingColor={currentlyPlaying.color}></LudoPlayerIndicatorTable>
        </div>
      </div>

    </>

  );
};

export default Ludo;
