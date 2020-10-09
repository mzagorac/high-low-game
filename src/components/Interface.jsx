import React from "react";
import { connect } from "react-redux";

import Input from "./Input";
import Button from "./Button";

import { fetchCard, reset } from "../redux/actions/deckActions";


const Interface = ({ deck_id, fetchCard, resetGame, currentCard }) => {
  
  const compareHandler =  (flag) => {
    fetchCard(deck_id, currentCard, flag);
  };
 
  return (
    <div>
      <Input />
      <Button>New Game</Button>
      <Button onClick={() => resetGame()} >Reset</Button>
      <Button onClick={() => compareHandler('L')} >Lower</Button>
      <Button onClick={() => compareHandler('H')}>Higher</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deck_id: state.deck.deck_id,
  currentCard: state.deck.currentCard,
  previousCard: state.deck.previousCard
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCard: (id, card, flag) => dispatch(fetchCard(id, card, flag)),
    resetGame: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Interface);
