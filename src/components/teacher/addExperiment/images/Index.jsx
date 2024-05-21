import { useEffect, useState } from "react";
import ToolsComponent from "./ToolsComponent";
import DeviceComponent from "./DeviceComponent";

const Index = () => {
  const [toolsImagesPreview, setToolsImagesPreview] = useState([]);
  const [draggableImages, setDraggableImages] = useState([]);
  const [images, setImages] = useState({
    device: {
      image: "URL",
      imageId: "IMAGE_ID",
      dimensions: {
        width: "",
        height: "",
      },
    },
    tools: [
      {
        order: 1,
        image: "URL",
        position: {
          x: "100px",
          y: "100px",
        },
        dimensions: {
          width: "100px",
          height: "100px",
        },
      },
      {
        order: 2,
        image: "URL",
        position: {
          x: "100px",
          y: "100px",
        },
        dimensions: {
          width: "100px",
          height: "100px",
        },
      },
      {
        order: 3,
        image: "URL",
        position: {
          x: "100px",
          y: "100px",
        },
        dimensions: {
          width: "100px",
          height: "100px",
        },
      },
      {
        order: 4,
        image: "URL",
        position: {
          x: "100px",
          y: "100px",
        },
        dimensions: {
          width: "100px",
          height: "100px",
        },
      },
    ],
  });
  useEffect(() => {}, [draggableImages]);
  return (
    <div className="shadow mt-4 py-5 px-3 rounded">
      <div className="row justify-content-between">
        <ToolsComponent />

        <DeviceComponent
          toolsImagesPreview={toolsImagesPreview}
          draggableImages={draggableImages}
          // setDraggableImages={setDraggableImages}
        />
      </div>
      <button className="btn active mt-4">Edit</button>
    </div>
  );
};

export default Index;
