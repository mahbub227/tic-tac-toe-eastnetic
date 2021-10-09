import { combineReducers, createStore } from "redux";
import playersReducer from "./ducks/players";
import gameReducer from "./ducks/game";

const reducer = combineReducers({
  players: playersReducer,
  game: gameReducer,
});

const store = createStore(reducer);

export default store;
