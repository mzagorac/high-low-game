import React, {useState} from "react";
import { connect } from "react-redux";

import Input from "./Input";
import Button from "./Button";

import { fetchCard, reset } from "../redux/actions/deckActions";

const Interface = ({ deck_id, fetchCard, resetGame }) => {
  // const [bet, setBet] = useState(0);

  // const placedBet = amount => {
  //   setBet(amount)
  // }

  return (
    <div>
      <Input />
      <Button>New Game</Button>
      <Button onClick={() => resetGame()} >Reset</Button>
      <Button onClick={() => fetchCard(deck_id)} >Lower</Button>
      <Button onClick={() => fetchCard(deck_id)}>Higher</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deck_id: state.deck.deck_id,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCard: (id) => dispatch(fetchCard(id)),
    resetGame: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Interface);
