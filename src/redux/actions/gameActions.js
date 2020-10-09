import { PLACE_BET } from './actionTypes';

export const placeBet = bet => ({
    type: PLACE_BET,
    payload: bet
});
