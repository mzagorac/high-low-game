import { PLACE_BET, CHECK_STATE, NEW_GAME, RESET_GAME } from './actionTypes';

export const placeBet = bet => ({
    type: PLACE_BET,
    payload: bet
});

export const checkState = () => ({
    type: CHECK_STATE,
})

export const newGame = () => ({
    type: NEW_GAME
})

export const resetGame = () => ({
  type: RESET_GAME,
});
