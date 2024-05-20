import { useEffect, useRef, useState } from "react";
import ToolsComponent from "./ToolsComponent";
import DeviceComponent from "./DeviceComponent";

const Index = () => {
  // for Preview tools images and device image
  const [toolsImagesPreview, setToolsImagesPreview] = useState([]);
  const [deviceImage, setDeviceImage] = useState("");
  // ========================================================
  // for showing tools images above device image
  const [draggableImages, setDraggableImages] = useState([]);
  // ========================================================

  const deviceInputRef = useRef(null);
  const toolsInputRef = useRef(null);
  const parentDiv = useRef(null);
  // ========================================================

  const [images, setImages] = useState({
    device: {
      image: "URL",
      imageID: "IMAGE_ID",
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

  // ========================================================
  useEffect(() => {}, [draggableImages]);
  // ========================================================

  const handleToolImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const urls = files.map((file) => URL.createObjectURL(file));
    setToolsImagesPreview((prevImages) => [...prevImages, ...urls]);

    setImages((prevImages) => ({
      ...prevImages,
      tools: [
        ...prevImages.tools,
        {
          order: prevImages.tools.length,
          image: "",
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
    }));

    const currentDraggableImages = [
      ...draggableImages,
      {
        position: {
          x: 0,
          y: 0,
        },
        dimensions: {
          width: 100,
          height: 100,
        },
      },
    ];
    setDraggableImages(currentDraggableImages);
    toolsInputRef.current.value = ""; // Clear the tools input field
  };

  const handleRemoveToolImage = (index) => {
    const updatedImages = [...toolsImagesPreview];
    updatedImages.splice(index, 1);
    setToolsImagesPreview(updatedImages);
    const updatedDragableImages = [...draggableImages];
    updatedDragableImages.splice(index, 1);
    setDraggableImages(updatedDragableImages);
  };

  const handleDeviceImageUpload = (e) => {
    const file = e.target.files[0];
    setDeviceImage(URL.createObjectURL(file));

    setImages((prevImages) => ({
      ...prevImages,
      device: {
        ...prevImages.device,
        image: file,
      },
    }));
  };
  console.log("images===>", images);

  const handleRemoveDeviceImage = () => {
    setDeviceImage("");
    setImages((prevImages) => ({
      ...prevImages,
      device: {
        ...prevImages.device,
        image: "",
        dimensions: {
          ...prevImages.device.dimensions,
          width: "",
          height: "",
        },
      },
    }));
    deviceInputRef.current.value = null;
  };

  // ========================================================

  useEffect(() => {
    const handleResize = () => {
      if (parentDiv.current) {
        const { clientWidth, clientHeight } = parentDiv.current;
        setImages((prevImages) => ({
          ...prevImages,
          device: {
            ...prevImages.device,
            dimensions: {
              ...prevImages.device.dimensions,
              width: clientWidth,
              height: clientHeight,
            },
          },
        }));
      }
    };
    handleResize();
    // Event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deviceImage]);

  // ========================================================
  return (
    <div className="shadow mt-4 py-5 px-3 rounded">
      <div className="row justify-content-between">
        <ToolsComponent
          toolsImagesPreview={toolsImagesPreview}
          handleRemoveToolImage={handleRemoveToolImage}
          handleToolImageUpload={handleToolImageUpload}
          toolsInputRef={toolsInputRef}
        />

        <DeviceComponent
          toolsImagesPreview={toolsImagesPreview}
          deviceImage={deviceImage}
          parentDiv={parentDiv}
          deviceInputRef={deviceInputRef}
          handleRemoveDeviceImage={handleRemoveDeviceImage}
          draggableImages={draggableImages}
          setDraggableImages={setDraggableImages}
          handleDeviceImageUpload={handleDeviceImageUpload}
        />
      </div>
      <button className="btn active mt-4">Edit</button>
    </div>
  );
};

export default Index;
