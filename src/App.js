import "./App.scss";
import logo from "./assets/eastnetic.png";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tic tac toe</h1>
        <a href="/">Restart</a>
      </header>
      <Game />
    </div>
  );
}

export default App;
