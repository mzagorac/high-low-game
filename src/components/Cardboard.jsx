import React, { useRef, useEffect } from "react";
import { Stage, Layer } from "react-konva";

import Card from "./Card";

const flipCard = "./back-card.png";
const card = "https://deckofcardsapi.com/static/img/JD.png";

const Cardboard = () => {
  //   const canvasRef = useRef();

  //   useEffect(() => {
  //     const canvas = canvasRef.current;
  //     canvas.width = window.innerWidth;
  //     canvas.height = 600;

  //     const ctx = canvas.getContext("2d");
  //   }, []);

  return (
    // <canvas ref={canvasRef}>
    //   Your browser does not support canvas element
    // </canvas>
    <Stage width={window.innerWidth} height={550}>
      <Layer>
        <Card imgUrl={flipCard} position={{ x: 50, y: 50 }} />
        <Card imgUrl={card} position={{ x: 350, y: 50 }} />
      </Layer>
    </Stage>
  );
};

export default Cardboard;
