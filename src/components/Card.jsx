import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const Card = ({ imgUrl, position }) => {
  const [image] = useImage(imgUrl);
  return <Image image={image} width={226} height={314} {...position} />;
};

export default Card;
