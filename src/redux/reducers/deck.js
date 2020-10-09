import { FETCH_NEW_DECK, FETCH_CARD, RESET_GAME, HIGHER } from "../actions/actionTypes";

const INITIAL_STATE = {
  deck_id: null,
  remaining: null,
  flippedCards: [],
  currentCard: null,
  previousCard: null,
};

export const deckReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NEW_DECK:
      return {
        ...state,
        deck_id: action.payload.deck_id,
        remaining: action.payload.remaining,
      };
    case FETCH_CARD:
      return {
        ...state,
        ...action.payload,
        previousCard: state.currentCard,
        currentCard: action.payload.cards[0],
        flippedCards: [...state.flippedCards, action.payload.cards[0].image],
      };
    case RESET_GAME:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
