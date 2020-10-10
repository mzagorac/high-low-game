import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer } from "react-konva";
import { connect } from "react-redux";

import Img from "./Img";
import { flipCard, fetchIcon } from '../utils'

const Cardboard = (props) => {
  const [icon, setIcon] = useState(null);
  const { current: canvasWidth } = useRef(window.innerWidth * 0.65);
  const canvasHeight = canvasWidth * 0.35;

  const cardWidth = canvasWidth * 0.15;
  const cardHeight = cardWidth * 1.35

  const faceDownPosition = { x: 50, y: 50 };
  const faceUpCardPosition = { x: 50 + cardWidth + 50, y: 50 };
  const lastCardPosition = { x: canvasWidth - cardWidth - 50, y: 50 };
  const iconPosition = { x: (2 * 50 + 2 * cardWidth + lastCardPosition.x) / 2, y: 50 }

  useEffect(() => {
    const res = fetchIcon(props.previousCard.value, props.currentCard.value);
    setIcon(res);
  }, [props.previousCard, props.currentCard]);

  return (
    <Stage width={canvasWidth} height={canvasHeight}>
      <Layer>
        <Img
          imgUrl={!props.cardRemaining ? '' : flipCard}
          position={ faceDownPosition }
          dim={{ width: cardWidth, height: cardHeight }}
        />
        <Img
          imgUrl={props.currentCard.image}
          position={faceUpCardPosition}
          dim={{ width: cardWidth, height: cardHeight }}
        />
        <Img imgUrl={icon} position={iconPosition} dim={{ width: 55, height: 55 }} />
        <Img
          imgUrl={props.previousCard.image}
          position={ lastCardPosition }
          dim={{ width: cardWidth, height: cardHeight }}
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
