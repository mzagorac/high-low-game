import React from "react";
import { connect } from "react-redux";

import Input from "./Input";
import Button from "./Button";

import { fetchCard } from "../redux/actions/deckActions";

const Interface = ({ deck_id, fetchCard }) => {
  return (
    <div>
      <Input />
      <Button label="New Game" onClick={() => fetchCard(deck_id)} />
      <Button label="Reset" />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Interface);
