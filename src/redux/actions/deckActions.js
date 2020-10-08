import { FETCH_NEW_DECK, FETCH_CARD, RESET_GAME } from "./actionTypes";

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

export const fetchCard = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
    );
    const data = await response.json();
    await dispatch(getCard(data));
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
