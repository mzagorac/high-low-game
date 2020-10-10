import React, {useEffect} from "react";
import { connect } from "react-redux";

import Input from "./Input";
import Button from "./Button";

import { fetchCard, reset } from "../redux/actions/deckActions";
import { checkState } from '../redux/actions/gameActions';


const Interface = ({ deck_id, fetchCard, resetGame, currentCard, userCoin, checkState, gameOver, newGame }) => {

  useEffect(() => {
    checkState();
  }, [userCoin, checkState])
  
  const compareHandler =  (flag) => {
    fetchCard(deck_id, currentCard, flag);
  };

  return (
    <div>
      <Input />
      <Button onClick={() => newGame('new')}>New Game</Button>
      <Button onClick={() => resetGame('reset')} >Reset</Button>
      <Button onClick={() => compareHandler('H')} disabled={gameOver} >Higher</Button>
      <Button onClick={() => compareHandler('L')} disabled={gameOver} >Lower</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deck_id: state.deck.deck_id,
  currentCard: state.deck.currentCard,
  previousCard: state.deck.previousCard,
  userCoin: state.game.playersCoin,
  gameOver: state.game.gameOver
});

const mapDispatchToProps = (dispatch, data) => {
  return {
    fetchCard: (id, card, flag) => dispatch(fetchCard(id, card, flag)),
    resetGame: (action) => dispatch(reset(action)),
    checkState: () => dispatch(checkState()),
    newGame: (action) => dispatch(reset(action))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Interface);
