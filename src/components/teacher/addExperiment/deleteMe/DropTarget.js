// DropTarget.js
import React, { useState } from "react";
import { useDrop } from "react-dnd";

const DropTarget = () => {
  const [droppedImage, setDroppedImage] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [{ isOver }, dropRef] = useDrop({
    accept: "image",
    drop: (item, monitor) => {
      setDroppedImage(item.src);
      const dropPosition = monitor.getClientOffset();
      if (dropPosition) {
        setPosition({ x: 0, y: 0 });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleDragOver = (e) => {
    const isDragging = droppedImage !== null;
    if (isDragging) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate the new position for the image
      const newPositionX = mouseX;
      const newPositionY = mouseY;

      // Set the new position
      setPosition({ x: newPositionX, y: newPositionY });
    }
  };

  const backgroundColor = isOver ? "#e6f7ff" : "transparent";

  return (
    <div
      ref={dropRef}
      style={{
        width: 500,
        height: 500,
        border: "1px dashed #ccc",
        backgroundColor,
        position: "relative",
      }}
      onDragOver={handleDragOver}
    >
      {droppedImage && (
        <img
          src={droppedImage}
          alt="Dropped Image"
          style={{
            width: 100,
            height: 100,
            position: "absolute",
            left: position.x,
            top: position.y,
            backgroundColor: "#000000",
          }}
        />
      )}
    </div>
  );
};

export default DropTarget;
