import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { toast } from "react-toastify";

const DraggableTool = ({
  tool,
  onDrop,
  droppedPosition,
  setDroppedPosition,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TOOL",
    item: { id: tool._id, order: tool.order, originalPosition: tool.position },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: tool?.dimensions?.width || "100px",
        height: tool?.dimensions?.height || "100px",
        objectFit: "contain",
        cursor: "move", // Add cursor style
        transition: "transform 0.3s ease", // Add transition for smooth movement
        transform: isDragging ? "scale(1.2)" : "scale(1)", // Scale up when dragging
      }}
    >
      {tool.order}
      <img src={tool.image} alt="tool-img" />
    </div>
  );
};

const DropZone = ({ tool, onDrop, droppedPosition, setDroppedPosition }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TOOL",
    drop: (item) => onDrop(item, tool.order),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  useEffect(() => {
    if (droppedPosition && droppedPosition.x && droppedPosition.y) {
      // Update the position of the dropped tool
      const updatedTool = {
        ...tool,
        position: {
          x: droppedPosition.x,
          y: droppedPosition.y,
        },
      };
      setDroppedPosition(null); // Reset droppedPosition after updating tool position
    }
  }, [droppedPosition, tool, setDroppedPosition]);

  return (
    <div
      ref={drop}
      style={{
        position: "absolute",
        width: tool?.dimensions?.width || "100px",
        height: tool?.dimensions?.height || "100px",
        left: tool?.position?.x || 0,
        top: tool?.position?.y || 0,
        backgroundColor: isOver ? "lightgreen" : "transparent",
        border: "1px dashed gray",
        transition: "left 0.3s ease, top 0.3s ease", // Add transition for smooth movement
      }}
    />
  );
};

const DraggableToolsContainer = ({
  tools,
  onDrop,
  droppedPosition,
  setDroppedPosition,
}) => {
  return (
    <>
      {tools.map((tool) => (
        <DraggableTool
          key={tool._id}
          tool={tool}
          onDrop={onDrop}
          droppedPosition={droppedPosition}
          setDroppedPosition={setDroppedPosition}
        />
      ))}
    </>
  );
};

const ExperimentAnimation = () => {
  const { experiment } = useSelector((state) => state.experimentReducer);
  const [droppedPosition, setDroppedPosition] = useState(null);

  const handleDrop = (item, order) => {
    if (
      item.order === order &&
      experiment?.images?.device?.dimensions?.width &&
      experiment?.images?.device?.dimensions?.height
    ) {
      console.log("Correct Drop!");
      // const updatedPosition = {
      //   x:
      //     (experiment.images.device.dimensions.width - item.dimensions.width) /
      //     2,
      //   y:
      //     (experiment.images.device.dimensions.height -
      //       item.dimensions.height) /
      //     2,
      // };
      // setDroppedPosition(updatedPosition); // Update the dropped position
    } else {
      toast.error("Incorrect Drop!");
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="d-flex justify-content-between mt-4">
        <div className="rounded border col-4">
          <p className="fw-bold fs-1">Tools :</p>
          <div className="d-flex flex-wrap">
            <DraggableToolsContainer
              tools={experiment?.images?.tools || []}
              onDrop={handleDrop}
              droppedPosition={droppedPosition}
              setDroppedPosition={setDroppedPosition}
            />
          </div>
        </div>
        <div className="rounded border">
          <p className="fw-bold fs-1">Device :</p>
          <div
            style={{
              width: experiment?.images?.device?.dimensions?.width || "",
              height: experiment?.images?.device?.dimensions?.height || "",
              position: "relative", // Add position relative
            }}
            className="mt-5"
          >
            <img
              src={experiment?.images?.device?.image}
              alt="Equipment"
              className="img-thumbnail bg-transparent w-100 p-0"
            />
            {experiment?.images?.tools?.map((tool) => (
              <DropZone
                key={tool._id}
                tool={tool}
                onDrop={handleDrop}
                droppedPosition={droppedPosition}
                setDroppedPosition={setDroppedPosition}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default ExperimentAnimation;
