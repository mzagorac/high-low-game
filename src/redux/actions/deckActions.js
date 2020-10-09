import { FETCH_NEW_DECK, FETCH_CARD, RESET_GAME, CORRECT, INCORRECT } from "./actionTypes";
import { larger } from '../../utils';

const getDeck = (deck) => ({
  type: FETCH_NEW_DECK,
  payload: deck,
});

const getCard = (card) => ({
  type: FETCH_CARD,
  payload: card,
});

const resetGame = () => ({
  type: RESET_GAME,
});

const compare = (displayedCard, drawnCard, flag) => {
  console.log(flag)
  const type = larger(displayedCard, drawnCard) === flag ? CORRECT : INCORRECT;
  return {
    type,
  }  
}

export const fetchDeck = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const data = await response.json();
    dispatch(getDeck(data));
    await dispatch(fetchCard(data.deck_id));
  } catch (error) {
    console.error(error);
  }
};

export const fetchCard = (id, card, flag = '') => async (dispatch) => {
  try {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
    );
    const data = await response.json();
    await dispatch(getCard(data));
    if (flag) {
      dispatch(compare(card.value, data.cards[0].value, flag))
    }
  } catch (error) {
    console.error(error);
  }
};

export const reset = () => async (dispatch) => {
  try {
    dispatch(resetGame());
    await dispatch(fetchDeck());
  } catch (error) {
    console.error(error);
  }
};
