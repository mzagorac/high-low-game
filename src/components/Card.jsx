import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const Card = ({ imgUrl, position, dim }) => {
  const [image] = useImage(imgUrl);
  return <Image image={image} {...dim} {...position} />;
};

export default Card;
