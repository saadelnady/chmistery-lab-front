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
  // for getting tools files and device file
  const [selectedToolsFiles, setSelectedToolsFiles] = useState([]);
  const [selectedDeviceFile, setSelectedDeviceFile] = useState(null);
  // ========================================================

  const [images, setImages] = useState({
    device: {
      image: "IMAGE",
      dimensions: {
        width: "100px",
        height: "100px",
      },
    },
    toolsImages: [
      {
        order: 1,
        image: "IMAGE",
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
        image: "IMAGE",
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
  const [parentDimention, setParentDimensions] = useState({
    width: 0,
    height: 0,
  });
  console.log("selectedToolsFiles ===>", selectedToolsFiles);
  console.log("selectedDeviceFile ===>", selectedDeviceFile);
  console.log(
    "deviceInputRef.current.value ===>",
    deviceInputRef?.current?.value
  );
  const handleToolImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedToolsFiles((prevFiles) => {
      return [...prevFiles, ...files];
    });

    const urls = files.map((file) => URL.createObjectURL(file));
    setToolsImagesPreview((prevImages) => [...prevImages, ...urls]);

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
  useEffect(() => {}, [draggableImages]);
  const handleRemoveToolImage = (index) => {
    const updatedImages = [...toolsImagesPreview];
    updatedImages.splice(index, 1);
    setToolsImagesPreview(updatedImages);
    const updatedDragableImages = [...draggableImages];
    updatedDragableImages.splice(index, 1);
    setDraggableImages(updatedDragableImages);

    const updatedTools = [...selectedToolsFiles];
    updatedTools.splice(index, 1);
    setSelectedToolsFiles(updatedTools);
  };

  const handleDeviceImageUpload = (e) => {
    const file = e.target.files[0];
    setDeviceImage(URL.createObjectURL(file));
    setSelectedDeviceFile(file);
  };

  const handleRemoveDeviceImage = () => {
    setDeviceImage("");
    deviceInputRef.current.value = null;
  };
  useEffect(() => {}, [draggableImages]);
  // ========================================================

  useEffect(() => {
    const handleResize = () => {
      if (parentDiv.current) {
        // console.log("parentDimention", parentDimention);
        const { clientWidth, clientHeight } = parentDiv.current;
        setParentDimensions({ width: clientWidth, height: clientHeight });
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
  // console.log("dragaable images", draggableImages);
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
