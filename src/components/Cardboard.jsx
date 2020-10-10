import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer } from "react-konva";
import { connect } from "react-redux";

import Img from "./Img";
import { flipCard, fetchIcon } from '../utils'

const Cardboard = (props) => {
  const [icon, setIcon] = useState(null);
  const { current: canvasWidth } = useRef(window.innerWidth * 0.65)
  const cardWidth = canvasWidth * 0.15;
  const cardHeight = cardWidth * 1.35

  useEffect(() => {
    const res = fetchIcon(props.previousCard.value, props.currentCard.value);
    setIcon(res);
  }, [props.previousCard, props.currentCard]);

  return (
    <Stage width={canvasWidth} height={canvasWidth * 0.35}>
      <Layer>
        <Img
          imgUrl={!props.cardRemaining ? '' : flipCard}
          position={{ x: 50, y: 50 }}
          dim={{ width: cardWidth, height: cardHeight }}
        />
        <Img
          imgUrl={props.currentCard.image}
          position={{ x: 350, y: 50 }}
          dim={{ width: cardWidth, height: cardHeight }}
        />
        <Img imgUrl={icon} position={{ x: 600, y: 100 }} dim={{ width: 55, height: 55 }} />
        <Img
          imgUrl={props.previousCard.image}
          position={{ x: 750, y: 50 }}
          dim={{ width: 113, height: 157 }}
        />
      </Layer>
    </Stage>
    
  );
};

const mapStateToProps = (state) => ({
  currentCard: state.deck.currentCard ? state.deck.currentCard : "",
  previousCard: state.deck.previousCard ? state.deck.previousCard : "",
  cardRemaining: state.deck.remaining
});

export default connect(mapStateToProps)(Cardboard);
