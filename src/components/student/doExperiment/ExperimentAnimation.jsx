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
        width: "100px",
        height: "100px",
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

const DropZone = ({ tool, onDrop, length, index, counter, setCounter }) => {
  const [showImage, setShowImage] = useState(false);

  const [{ isOver }, drop] = useDrop({
    accept: "TOOL",
    drop: (item, monitor) => {
      const dropPosition = monitor.getSourceClientOffset();
      const offsetPosition = monitor.getClientOffset();
      const correctDrop = onDrop(item, tool, dropPosition, offsetPosition);
      if (correctDrop) {
        setShowImage(true); // عرض الصورة عندما يكون الإفلات في المكان الصحيح
        setCounter((previousCount) => previousCount + 1);
      }
    },
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
        zIndex: length - index,
      }}
    >
      {showImage && (
        <img
          src={tool?.image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transform: "translate(-50%, -50%)",
            position: "absolute",
            left: "50%",
            top: "50%",
          }}
        />
      )}
    </div>
  );
};

const ExperimentAnimation = ({ counter, setCounter }) => {
  const { experiment } = useSelector((state) => state.experimentReducer);

  const handleDrop = (item, targetTool, dropPosition, offsetPosition) => {
    if (item.order === targetTool.order) {
      console.log("Drop Correctly:", item, targetTool._id);
      return true;
    } else {
      toast.error("Incorrect Drop!");
      return false;
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
          <p className="fw-bold fs-1 mb-5">Device :</p>
          <div
            style={{
              width: experiment?.images?.device?.dimensions?.width,
              height: experiment?.images?.device?.dimensions?.height,
              position: "relative",
            }}
          >
            <img
              src={experiment?.images?.device?.image}
              alt="Equipment"
              className="img-thumbnail bg-transparent w-100 p-0"
            />
            {experiment?.images?.tools.map((tool, index, tools) => (
              <DropZone
                key={tool._id}
                tool={tool}
                onDrop={handleDrop}
                length={tools?.length}
                index={index}
                counter={counter}
                setCounter={setCounter}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default ExperimentAnimation;
