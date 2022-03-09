// import squareComponent from "./component/SquareComponent";
import { useState, useEffect } from "react";
import "./App.css";

import {
  TicTac,
  SquareComponent,
  TopSquare,
  BottomSquare,
  CenterSquare,
  Button,
} from "./style/SquareComponent";
// import Squares from "./component/sq";

function App() {
  const [gamer, setGame] = useState(3);
  const [squareDatas, setsquare] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [turn, setsetTurn] = useState(false);
  const [text, setText] = useState(null);

  const onUserClicked = (index) => {
    let strings = Array.from(squareDatas);
    if (strings[index]) return;
    strings[index] = turn ? "X" : "0";
    setsetTurn(!turn);
    setsquare(strings);
  };

  const deleteGame = () => {
    setsquare(["", "", "", "", "", "", "", "", "", ""]);
  };

  useEffect(
    () => {
      let winner = won();
      if (winner) {
        deleteGame();
        setText(`Hey!${winner} have won the Game !`);
      }
    },
    [squareDatas],
    [text]
  );
  const won = () => {
    const lines = [
      [0, 1, 2],
      [2, 5, 8],
      [6, 7, 8],
      [1, 4, 7],
      [0, 3, 6],
      [0, 4, 8],
      [2, 4, 6],
      [3, 4, 5],
    ];

    console.log(squareDatas[0], squareDatas[1], squareDatas[2]);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squareDatas[a] &&
        squareDatas[a] === squareDatas[b] &&
        squareDatas[a] === squareDatas[c]
      ) {
        return squareDatas[a];
      }
    }
    return null;
  };
  return (
    <div className="App-header">
      <h1>{text}</h1>
      <TicTac>
        <TopSquare>
          <SquareComponent
            onClick={() => onUserClicked(0)}
            state={squareDatas[0]}
          >
            {gamer}
          </SquareComponent>
          <SquareComponent
            onClick={() => onUserClicked(1)}
            state={squareDatas[1]}
          />
          <SquareComponent
            onClick={() => onUserClicked(2)}
            state={squareDatas[2]}
          />
        </TopSquare>
        <CenterSquare>
          <SquareComponent
            onClick={() => onUserClicked(3)}
            state={squareDatas[3]}
          />
          <SquareComponent
            onClick={() => onUserClicked(4)}
            state={squareDatas[4]}
          />
          <SquareComponent
            onClick={() => onUserClicked(5)}
            state={squareDatas[5]}
          />
        </CenterSquare>
        <BottomSquare>
          <SquareComponent
            onClick={() => onUserClicked(6)}
            state={squareDatas[6]}
          />
          <SquareComponent
            onClick={() => onUserClicked(7)}
            state={squareDatas[7]}
          />
          <SquareComponent
            onClick={() => onUserClicked(8)}
            state={squareDatas[8]}
          />
        </BottomSquare>
      </TicTac>

      <Button className="delete" onClick={deleteGame}>
        Clear
      </Button>
    </div>
  );
}

export default App;
