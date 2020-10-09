import { PLACE_BET, RESET_GAME } from '../actions/actionTypes'


const INITIAL_STATE = {
  bet: 10,
  playersCoin: 15,
  warning: null
}

export const gameReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case PLACE_BET:
      if (action.payload > state.playersCoin) {
       return {
         ...state,
         warning: `Your fund is ${state.playersCoin}`
       }
      }

      return {
        ...state,
        warning: null,
        bet: action.payload
      };

    case RESET_GAME:
      return { ...INITIAL_STATE }
    default:
      return state;
  }
};
