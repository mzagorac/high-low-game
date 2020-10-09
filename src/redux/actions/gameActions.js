import { PLACE_BET } from './actionTypes';

export const placeBet = bet => ({
    type: PLACE_BET,
    payload: bet
});

// export const higher = () => ({
//     type: HIGHER,
// });

// export const lower = () => ({
//     type: LOWER
// })
