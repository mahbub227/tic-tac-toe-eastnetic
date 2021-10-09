import "./App.scss";
import Game from "./components/Game";
import { logo } from "./assets/globalAssets";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo.default} className="App-logo" alt="logo" />
        <h1>Tic tac toe</h1>
        <a href=".">Restart</a>
      </header>
      <Game />
    </div>
  );
}

export default App;
