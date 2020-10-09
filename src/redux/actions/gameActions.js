import { PLACE_BET, CHECK_STATE } from './actionTypes';

export const placeBet = bet => ({
    type: PLACE_BET,
    payload: bet
});

export const checkState = () => ({
    type: CHECK_STATE,
})
