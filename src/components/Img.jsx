import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const Img = ({ imgUrl, position, dim }) => {
  const [image] = useImage(imgUrl);
  return <Image image={image} {...dim} {...position} />;
};

export default Img;
