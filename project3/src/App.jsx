import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGamePlay, setisGamePlay] = useState(true);

  const toggleGamePlay = () => {
    setisGamePlay((prev) => !prev);
  };
  return (
    <>{isGamePlay ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
