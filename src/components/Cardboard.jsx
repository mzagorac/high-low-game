import React from "react";
import { Stage, Layer } from "react-konva";
import { connect } from "react-redux";

import Card from "./Card";

const flipCard = "./back-card.png";

const Cardboard = (props) => {
  return (
    <Stage width={window.innerWidth} height={550}>
      <Layer>
        <Card
          imgUrl={flipCard}
          position={{ x: 50, y: 50 }}
          dim={{ width: 226, height: 314 }}
        />
        <Card
          imgUrl={props.currentCard}
          position={{ x: 350, y: 50 }}
          dim={{ width: 226, height: 314 }}
        />

        <Card
          imgUrl={props.previousCard}
          position={{ x: 850, y: 50 }}
          dim={{ width: 113, height: 157 }}
        />
      </Layer>
    </Stage>
  );
};

const mapStateToProps = (state) => ({
  currentCard: state.deck.currentCard ? state.deck.currentCard.image : "",
  // flippedCards: state.deck.flippedCards,
  previousCard: state.deck.previousCard ? state.deck.previousCard.image : "",
});

export default connect(mapStateToProps)(Cardboard);
