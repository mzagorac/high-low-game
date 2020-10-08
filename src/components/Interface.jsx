import React from "react";
import { connect } from "react-redux";

import Input from "./Input";
import Button from "./Button";

import { fetchCard, reset } from "../redux/actions/deckActions";

const Interface = ({ deck_id, fetchCard, resetGame }) => {
  return (
    <div>
      <Input />
      <Button label="New Game" />
      <Button label="Reset" onClick={() => resetGame()} />
      <Button label="Lower" onClick={() => fetchCard(deck_id)} />
      <Button label="Higher" onClick={() => fetchCard(deck_id)} />
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
