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
    <>
      <div className="container">
        <div className="mt-5 row justify-content-between  ">
          <ul className="shadow col-12 col-sm-4 col-md-3 p-3">
            <p className="fw-bold text-center">Chemicals</p>
            <li> Silver Nitrate</li>
            <li>Silver cloride</li>
            <li>SoduimNitrate</li>
            <li>Soduim cloride</li>
          </ul>
          <ul className="shadow col-12  col-sm-4 col-md-3 p-3">
            <p className="fw-bold text-center">Steps</p>
            <li className="mb-3">
              <span>1.</span> measure 30g of Silver Nitrate solution in test
              tube
            </li>
            <li className="mb-3">
              <span>2.</span> pour the test tube into the retort measure 30g of
              Soduim cloride
            </li>
            <li className="mb-3">
              <span>3.</span> solution in test tube pour the test tube into the
              retort Observe the
            </li>
            <li className="mb-3">
              <span>4.</span> pour the test tube into the retort measure 30g of
              Soduim cloride reaction
            </li>
          </ul>
          <ul className="shadow col-12  col-sm-4 col-md-3 p-3">
            <p className="fw-bold text-center">Tools</p>

            <li> Test tube </li>
            <li>Test tube holder</li>
            <li>Balance</li>
            <li>Filter paper</li>
            <li> pipette </li>
          </ul>
        </div>
      </div>
      <div className="row mt-4 py-3 px-2 shadow justify-content-between flex-wrap">
        <div className="d-flex col-12 col-sm-5 flex-wrap border rounded p-3">
          <p className="fw-bold fs-1">Tools :</p>
          <div className="d-flex justify-content-evenly align-items-center flex-wrap">
            {tools.map((tool) => (
              <motion.img
                key={tool.id}
                src={tool.image}
                alt={tool.name}
                className={tool.isDragging ? "dragging " : ""}
                style={{ cursor: "move" }}
                drag
                // dragConstraints={{ top: 0, left: 0, bottom: 0 }}

                onDragStart={() => handleDragStart(tool.id)}
                onDragEnd={(e, { point }) =>
                  handleDragEnd(tool.id, point.x, point.y)
                }
              />
            ))}
          </div>
        </div>

        <div
          className="border col-12 col-sm-6 rounded p-3"
          onDrop={handleDropOnEquipment}
          onDragOver={(e) => e.preventDefault()}
        >
          <p className="fw-bold fs-1">Device :</p>
          <motion.img
            src={icEquipment}
            alt="Equipment"
            className="img-thumbnail bg-transparent "
          />
        </div>
      </div>
      <div className="container mb-4">
        <ul className="shadow col-12 py-3">
          <p className="fw-bold text-center">Observations:</p>
          <p className="text-center">Observations of the experiment</p>
          <p className="fw-bold text-center">Conclusion :</p>
          <p className="text-center">Conclusion of the experiment</p>
        </ul>
      </div>
    </>
  );
};

export default Index;
