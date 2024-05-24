import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DraggableTool = ({ tool }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TOOL", // هنا يتم تحديد نوع العنصر
    item: { id: tool._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: tool?.dimensions?.width,
        height: tool?.dimensions?.height,
        objectFit: "contain",
      }}
    >
      {tool.order}
      <img src={tool.image} alt="tool-img" />
    </div>
  );
};

const DraggableToolsContainer = ({ tools }) => {
  return (
    <>
      {tools.map((tool) => (
        <DraggableTool key={tool._id} tool={tool} />
      ))}
    </>
  );
};

const ExperimentAnimation = () => {
  const { isLoading, experiment } = useSelector(
    (state) => state.experimentReducer
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="row justify-content-between mt-4">
        {/* tools */}
        <div className="col-12 col-sm-5 border">
          <p className="fw-bold fs-1">Tools :</p>
          <div className="d-flex flex-wrap">
            <DraggableToolsContainer tools={experiment?.images?.tools || []} />
          </div>
        </div>
        {/* device */}
        <div className="col-12 col-sm-6 border">
          <p className="fw-bold fs-1">Device :</p>
          <div
            style={{
              width: experiment?.images?.device?.dimensions?.width
                ? experiment?.images?.device?.dimensions?.width
                : "",
              height: experiment?.images?.device?.dimensions?.height
                ? experiment?.images?.device?.dimensions?.height
                : "",
            }}
            className="mt-5 position-relative"
          >
            <img
              src={experiment?.images?.device?.image}
              alt="Equipment"
              className="img-thumbnail bg-transparent w-100 p-0"
            />
            {experiment?.images?.tools?.map((tool) => (
              <div
                key={tool._id}
                style={{
                  position: "absolute",
                  width: tool ? tool?.dimensions?.width : "100px",
                  height: tool ? tool?.dimensions?.height : "100px",
                  left: tool ? tool?.position?.x : 0,
                  top: tool ? tool?.position?.y : 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "red",
                }}
              >
                {tool.order}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default ExperimentAnimation;
