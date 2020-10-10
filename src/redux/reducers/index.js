import { combineReducers } from "redux";

import { gameReducer } from "./gameReducer";
import { deckReducer } from "./deckReducer";

const rootReducer = combineReducers({
  game: gameReducer,
  deck: deckReducer,
});

export default rootReducer;
