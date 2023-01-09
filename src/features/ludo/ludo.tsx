import { useState, useEffect } from "react";
import "./ludo.scss";
import { BiStar } from "react-icons/bi";
import { Button } from "react-bootstrap";

interface stateInterface {
  [key: string]: any,
  playingColor: string,
  selectedPlayer: string,
  diceRolled: number,
  playerData: any
}
const Ludo = () => {
  const PLAYER = {
    green: 'green',
    yellow: 'yellow',
    blue: 'blue',
    red: 'red',
  };
  const PLAYER_TURNS = [PLAYER.green, PLAYER.yellow, PLAYER.blue, PLAYER.red];
  const [gameData, setGameData] = useState<stateInterface>({
    playingColor: PLAYER.red,
    selectedPlayer: 'player1',
    diceRolled: 0,
    playerData: {
      green: {
        player1: {
          currentPosition: 0
        },
        player2: {
          currentPosition: 0
        },
        player3: {
          currentPosition: 0
        },
        player4: {
          currentPosition: 0
        },
        routes: [
          { left: 2, top: 7 },
          { left: 3, top: 7 },
          { left: 4, top: 7 },
          { left: 5, top: 7 },
          { left: 6, top: 7 },
          { left: 7, top: 6 },
          { left: 7, top: 5 },
          { left: 7, top: 4 },
          { left: 7, top: 3 },
          { left: 7, top: 2 },
          { left: 7, top: 1 },
          { left: 8, top: 1 },
          { left: 9, top: 1 },
          { left: 9, top: 2 },
          { left: 9, top: 3 },
          { left: 9, top: 4 },
          { left: 9, top: 5 },
          { left: 9, top: 6 },
          { left: 10, top: 7 },
          { left: 11, top: 7 },
          { left: 12, top: 7 },
          { left: 13, top: 7 },
          { left: 14, top: 7 },
          { left: 15, top: 7 },
          { left: 15, top: 8 },
          { left: 15, top: 9 },
          { left: 14, top: 9 },
          { left: 13, top: 9 },
          { left: 12, top: 9 },
          { left: 11, top: 9 },
          { left: 10, top: 9 },
          { left: 9, top: 10 },
          { left: 9, top: 11 },
          { left: 9, top: 12 },
          { left: 9, top: 13 },
          { left: 9, top: 14 },
          { left: 9, top: 15 },
          { left: 8, top: 15 },
          { left: 7, top: 15 },
          { left: 7, top: 14 },
          { left: 7, top: 13 },
          { left: 7, top: 12 },
          { left: 7, top: 11 },
          { left: 7, top: 10 },
          { left: 6, top: 9 },
          { left: 5, top: 9 },
          { left: 4, top: 9 },
          { left: 3, top: 9 },
          { left: 2, top: 9 },
          { left: 1, top: 9 },
          { left: 1, top: 8 },
          { left: 2, top: 8 },
          { left: 3, top: 8 },
          { left: 4, top: 8 },
          { left: 5, top: 8 },
          { left: 6, top: 8 }
        ],
      },
    }
  });

  const greenBg = {
    backgroundColor: "green",
  };
  const yellowBg = {
    backgroundColor: "yellow",
  };
  const redBg = {
    backgroundColor: "red",
  };
  const blueBg = {
    backgroundColor: "blue",
  };
  const basicUnit = 42;
  const delta = 7;
  const playRound = (playingColor: string, rolledNumbers: number) => {
    const selectedPlayer = gameData.selectedPlayer;
    const player = document.getElementById(`${playingColor}-${selectedPlayer}`);
    if (player) {

      player.style.top = getPosition(
        playingColor,
        selectedPlayer,
        rolledNumbers,
        true
      );
      player.style.left = getPosition(
        playingColor,
        selectedPlayer,
        rolledNumbers,
        false
      );
      updateGameData(playingColor, selectedPlayer, rolledNumbers);
    }
  };

  const getPosition = (
    playerColor: string,
    playerNumber: string,
    moveBy: number,
    top: boolean
  ): string => {
    const routes = gameData.playerData[playerColor].routes as any;
    const newPosition = routes[gameData.playerData[playerColor][playerNumber].currentPosition + moveBy];

    if (top) {
      console.log(newPosition);

      return `${(newPosition.top * basicUnit) + delta}px`;
    } else {
      return `${(newPosition.left * basicUnit) + delta}px`;
    }
  };

  const updateGameData = (playingColor: string, selectedPlayer: string, rolledNumbers: number) => {
    setGameData((prev) => {
      const updated = {
        ...prev,
        playerData: {
          ...prev.playerData,
          [playingColor]: {
            ...prev.playerData[playingColor],
            [selectedPlayer]: {
              ...prev.playerData[playingColor][selectedPlayer],
              currentPosition: prev.playerData[playingColor][selectedPlayer].currentPosition + rolledNumbers
            }
          },
          diceRolled: rolledNumbers
        }
      };
      console.log("updated = ", updated);
      return updated;
    })
  }

  const startRound = () => {
    const playingColor = getPlayingColor();
    const rolledNumbers = rollDice();
    playRound(playingColor, rolledNumbers);
  }

  const rollDice = (): number => {
    const rndInt = Math.floor(Math.random() * 6) + 1;
    console.log("rolled = ", rndInt);
    return rndInt;
  }

  const getPlayingColor = () => {
    return PLAYER.green;
    if (gameData.diceRolled !== 6) {
      return PLAYER_TURNS[PLAYER_TURNS.indexOf(gameData.playingColor) + 1] || PLAYER_TURNS[0];
    } else {
      return gameData.playingColor;
    }
  }

  const setPlayer = () => {

  }

  return (
    <div className="game">
      {/* Green Player */}
      <div className="player greenPlayer player-1" id="green-player1"></div>
      <div className="player greenPlayer player-2" id="green-player2"></div>
      <div className="player greenPlayer player-3" id="green-player3"></div>
      <div className="player greenPlayer player-4" id="green-player4"></div>

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
                <BiStar size={"25px"} />
              </div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
            <div className="pathColumn middleColumn">
              <div className="cell"></div>
              <div className="cell" style={yellowBg}></div>
              <div className="cell" style={yellowBg}></div>
              <div className="cell" style={yellowBg}></div>
              <div className="cell" style={yellowBg}></div>
              <div className="cell" style={yellowBg}></div>
            </div>
            <div className="pathColumn rightColumn">
              <div className="cell"></div>
              <div className="cell" style={yellowBg}></div>
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
              <div className="cell" style={greenBg}></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
            <div className="pathRow">
              <div className="cell"></div>
              <div className="cell" style={greenBg}></div>
              <div className="cell" style={greenBg}></div>
              <div className="cell" style={greenBg}></div>
              <div className="cell" style={greenBg}></div>
              <div className="cell" style={greenBg}></div>
            </div>
            <div className="pathRow">
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell">
                <BiStar size={"25px"} />
              </div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
          </div>
          <div className="winningArea"></div>
          <div className="pathRowSection middleRight">
            <div className="pathRow">
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell">
                <BiStar size={"25px"} />
              </div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
            <div className="pathRow">
              <div className="cell" style={blueBg}></div>
              <div className="cell" style={blueBg}></div>
              <div className="cell" style={blueBg}></div>
              <div className="cell" style={blueBg}></div>
              <div className="cell" style={blueBg}></div>
              <div className="cell"></div>
            </div>
            <div className="pathRow">
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell" style={blueBg}></div>
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
              <div className="cell" style={redBg}></div>
              <div className="cell"></div>
            </div>
            <div className="pathColumn middleColumn">
              <div className="cell" style={redBg}></div>
              <div className="cell" style={redBg}></div>
              <div className="cell" style={redBg}></div>
              <div className="cell" style={redBg}></div>
              <div className="cell" style={redBg}></div>
              <div className="cell"></div>
            </div>
            <div className="pathColumn rightColumn">
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell">
                <BiStar size={"25px"} />
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
      <Button onClick={startRound}>Play {gameData.playingColor}</Button>
    </div>
  );
};

export default Ludo;
