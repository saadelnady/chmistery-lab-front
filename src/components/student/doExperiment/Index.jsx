import React, { useState } from "react";
import { motion } from "framer-motion";
import icEquipment from "./assets/ic_equipment.png";
import icFlame from "./assets/ic_flame.png";
import icFlask from "./assets/ic_flask.png";
import icHolder from "./assets/ic_holder.png";
import icIceTube from "./assets/ic_iceTube.png";
import icTestTube from "./assets/ic_testTube.png";

const Index = () => {
  const [tools, setTools] = useState([
    {
      id: "flame",
      image: icFlame,
      name: "Flame",
      position: { x: 157, y: 330 },
      isDragging: false,
    },
    {
      id: "flask",
      image: icFlask,
      name: "Flask",
      position: { x: 505, y: 287.625 },
      isDragging: false,
    },
    {
      id: "holder",
      image: icHolder,
      name: "Holder",
      position: { x: 275, y: 350 },
      isDragging: false,
    },
    {
      id: "iceTube",
      image: icIceTube,
      name: "IceTube",
      position: { x: 427, y: 310 },
      isDragging: false,
    },
    {
      id: "testTube",
      image: icTestTube,
      name: "TestTube",
      position: { x: 89, y: 116.265625 },
      isDragging: false,
    },
  ]);

  const handleDragStart = (toolId) => {
    setTools((prevTools) =>
      prevTools.map((tool) =>
        tool.id === toolId ? { ...tool, isDragging: true } : tool
      )
    );
  };

  const handleDragEnd = (toolId, x, y) => {
    setTools((prevTools) =>
      prevTools.map((tool) =>
        tool.id === toolId
          ? { ...tool, position: { x, y }, isDragging: false }
          : tool
      )
    );
  };

  const handleDropOnEquipment = (e) => {
    const equipment = e.currentTarget;
    const rect = equipment.getBoundingClientRect();
    console.log("rect ===>", rect);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setTools((prevTools) =>
      prevTools.map((tool) =>
        tool.isDragging
          ? { ...tool, position: { x, y }, isDragging: false }
          : tool
      )
    );
  };

  return (
    <div className="d-flex p-3 justify-content-evenly align-items-center min-vh-100 flex-wrap">
      <div className="d-flex justify-content-between align-items-center col-12 col-md-4 flex-wrap border rounded p-3">
        <p className="fw-bold fs-1">Tools :</p>
        <div className="d-flex justify-content-evenly align-items-center flex-wrap">
          {tools.map((tool) => (
            <motion.img
              key={tool.id}
              src={tool.image}
              alt={tool.name}
              className={tool.isDragging ? "dragging" : ""}
              style={{ cursor: "move" }}
              drag
              // dragConstraints={{ top: 0, left: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragStart={() => handleDragStart(tool.id)}
              onDragEnd={(e, { point }) =>
                handleDragEnd(tool.id, point.x, point.y)
              }
            />
          ))}
        </div>
      </div>

      <div
        className="border col-12 col-md-5 rounded p-3"
        onDrop={handleDropOnEquipment}
        onDragOver={(e) => e.preventDefault()}
      >
        <p className="fw-bold fs-1">Device :</p>
        <motion.img src={icEquipment} alt="Equipment" className="col-12" />
      </div>
    </div>
  );
};

export default Index;
