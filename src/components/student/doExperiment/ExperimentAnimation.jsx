import { useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const DraggableTool = ({ tool }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TOOL",
    item: { id: tool._id, order: tool.order, dimensions: tool.dimensions },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        width: tool?.dimensions?.width,
        height: tool?.dimensions?.height,
        cursor: "move",
        transition: "transform 0.3s ease",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <img
        src={tool.image}
        alt="tool-img"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

const DropZone = ({ tool, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "TOOL",
    drop: (item) => onDrop(item, tool),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        position: "absolute",
        width: tool?.dimensions?.width,
        height: tool?.dimensions?.height,
        left: tool?.position?.x,
        top: tool?.position?.y,
        backgroundColor: isOver ? "lightgreen" : "transparent",
        border: "1px dashed gray",
        transition: "left 0.3s ease, top 0.3s ease",
      }}
    />
  );
};

const ExperimentAnimation = () => {
  const { experiment } = useSelector((state) => state.experimentReducer);
  const [correctDrops, setCorrectDrops] = useState([]);

  const handleDrop = (item, targetTool) => {
    if (item.order === targetTool.order) {
      const droppedTool = experiment?.images?.tools.find(
        (tool) => tool._id === item.id
      );

      if (
        droppedTool &&
        !correctDrops.some((drop) => drop._id === droppedTool._id)
      ) {
        setCorrectDrops((prevDrops) => [
          ...prevDrops,
          { ...droppedTool, position: targetTool.position },
        ]);
      }
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
            {experiment?.images?.tools.map((tool) => (
              <DraggableTool key={tool._id} tool={tool} />
            ))}
          </div>
        </div>
        <div className="rounded border">
          <p className="fw-bold fs-1">Device :</p>
          <div
            style={{
              width: experiment?.images?.device?.dimensions?.width,
              height: experiment?.images?.device?.dimensions?.height,
              position: "relative",
            }}
            className="mt-5"
          >
            <img
              src={experiment?.images?.device?.image}
              alt="Equipment"
              className="img-thumbnail bg-transparent w-100 p-0"
            />
            {experiment?.images?.tools.map((tool) => (
              <DropZone key={tool._id} tool={tool} onDrop={handleDrop} />
            ))}
            {correctDrops.map((drop) => (
              <div
                key={drop._id}
                style={{
                  position: "absolute",
                  width: drop.dimensions.width,
                  height: drop.dimensions.height,
                  left: drop.position.x,
                  top: drop.position.y,
                }}
              >
                <img
                  src={drop.image}
                  alt="tool-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default ExperimentAnimation;
