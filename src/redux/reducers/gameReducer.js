import { CHECK_STATE, CORRECT, INCORRECT, NEW_GAME, PLACE_BET, RESET_GAME } from '../actions/actionTypes'

const INITIAL_STATE = {
  bet: 10,
  playersCoin: 100,
  warning: null,
  gameOver: false
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

    case CORRECT:
      return {
         ...state,
        playersCoin : state.playersCoin + state.bet,
      }
        
    case INCORRECT:
      return {
        ...state,
        playersCoin : state.playersCoin - state.bet,
      }

    case NEW_GAME:
      return {
        ...INITIAL_STATE,
        playersCoin: state.playersCoin
      }  

    case RESET_GAME:
      return { ...INITIAL_STATE }

    case CHECK_STATE:
      return {
        ...state,
        bet: state.bet > state.playersCoin ? state.playersCoin : state.bet,
        warning: state.bet <= state.playersCoin && "",
        gameOver: state.playersCoin <= 0 
      }
    default:
      return state;
  }
};
