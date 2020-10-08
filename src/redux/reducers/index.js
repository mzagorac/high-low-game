import { combineReducers } from "redux";

import { gameReducer } from "./game";
import { deckReducer } from "./deck";

const rootReducer = combineReducers({
  game: gameReducer,
  deck: deckReducer,
});

export default rootReducer;
