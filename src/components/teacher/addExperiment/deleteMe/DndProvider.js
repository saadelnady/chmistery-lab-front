// DndProvider.js
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropTarget from "./DropTarget";
import DragImage from "./DragImage";

const DndProviderExample = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex" }}>
        <DragImage
          src="https://i.ibb.co/8dQnHwW/ic-flask.png"
          alt="Draggable Image"
        />
        <DropTarget />
      </div>
    </DndProvider>
  );
};

export default DndProviderExample;
