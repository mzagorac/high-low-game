import {
  FETCH_NEW_DECK_START,
  FETCH_NEW_DECK_SUCCESS,
  FETCH_NEW_DECK_ERROR,
  FETCH_CARD_START,
  FETCH_CARD_SUCCESS,
  FETCH_CARD_ERROR,
  RESET_GAME,
  NEW_GAME 
} from "../actions/actionTypes";

const INITIAL_STATE = {
  deck_id: null,
  remaining: null,
  flippedCards: [],
  currentCard: null,
  previousCard: null,
  error: null,
  loading: false
};

export const deckReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NEW_DECK_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_NEW_DECK_SUCCESS:
      return {
        ...state,
        deck_id: action.payload.deck_id,
        remaining: action.payload.remaining,
        error: null,
        loading: false
      };
    case FETCH_NEW_DECK_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case FETCH_CARD_START:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_CARD_SUCCESS:
      return {
        ...state,
        ...action.payload,
        previousCard: state.currentCard,
        currentCard: action.payload.cards[0],
        flippedCards: [...state.flippedCards, action.payload.cards[0].image],
        error: null,
        loading: false
      };
    case FETCH_CARD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case RESET_GAME:
      return { ...INITIAL_STATE };
    case NEW_GAME:
      return { ...INITIAL_STATE }
    default:
      return state;
  }
};
