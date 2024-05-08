// DragImage.js
import React from "react";
import { useDrag } from "react-dnd";

const DragImage = ({ src, alt }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "image",
    item: { src },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <img
      ref={dragRef}
      src={src}
      alt={alt}
      style={{ width: 100, height: 100, opacity, cursor: "grab" }}
    />
  );
};

export default DragImage;
