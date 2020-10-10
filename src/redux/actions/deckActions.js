import { 
  CORRECT, 
  INCORRECT, 
  FETCH_NEW_DECK_START, 
  FETCH_NEW_DECK_SUCCESS,
  FETCH_NEW_DECK_ERROR,
  FETCH_CARD_START,
  FETCH_CARD_SUCCESS,
  FETCH_CARD_ERROR 
} from "./actionTypes";

import { newGame, resetGame } from './gameActions'
import { larger } from '../../utils';

const getDeckStart = () => ({
  type: FETCH_NEW_DECK_START
})

const getDeckError = (error) => ({
  type: FETCH_NEW_DECK_ERROR,
  payload: error
})

const getDeckSuccess  = (deck) => ({
  type: FETCH_NEW_DECK_SUCCESS,
  payload: deck
})

const getCardStart = () => ({
  type: FETCH_CARD_START
})

const getCardError = (error) => ({
  type: FETCH_CARD_ERROR,
  payload: error
})

const getCardSuccess  = (card) => ({
  type: FETCH_CARD_SUCCESS,
  payload: card
});  

const compare = (displayedCard, drawnCard, flag) => {
  const type = larger(displayedCard, drawnCard) === flag ? CORRECT : INCORRECT;
  return {
    type,
  }  
}

export const fetchDeck = () => async (dispatch) => {
  try {
    dispatch(getDeckStart())
    const response = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const data = await response.json();
    dispatch(getDeckSuccess(data));
    await dispatch(fetchCard(data.deck_id));
  } catch (error) {
    dispatch(getDeckError(error))
  }
};

export const fetchCard = (id, card, flag = '')  => async (dispatch) => {
  try {
    dispatch(getCardStart())
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
    );
    const data = await response.json();
    await dispatch(getCardSuccess(data));
    if (flag) {
      dispatch(compare(card.value, data.cards[0].value, flag))
    }
  } catch (error) {
    dispatch(getCardError(error))
  }
};

export const reset = (action) => async (dispatch) => {
  try {
    console.log(action)
    action === "reset" ? dispatch(resetGame()) : dispatch(newGame());
    await dispatch(fetchDeck());
  } catch (error) {
    console.error(error);
  }
};
