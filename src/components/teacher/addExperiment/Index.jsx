import React, { useState } from "react";
import Generalinfo from "./Generalinfo";
import Tools from "./Tools";
import Chemicals from "./Chemicals";
import Steps from "./Steps";
import ExperimentImages from "./ExperimentImages";
import "./assets/styles/styles.css";
import DraggableComponent from "./deleteMe/DraggableComponent";

const Index = ({ isActive, handleActivation }) => {
  const [activeTab, setActiveTab] = useState("general");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return <Generalinfo handleTabChange={handleTabChange} />;
      case "chemicals":
        return (
          <Chemicals
            handleTabChange={handleTabChange}
            isActive={isActive}
            handleActivation={handleActivation}
          />
        );
      case "images":
        // return <DraggableComponent handleTabChange={handleTabChange} />;
        return <ExperimentImages handleTabChange={handleTabChange} />;
      case "tools":
        return (
          <Tools
            handleTabChange={handleTabChange}
            isActive={isActive}
            handleActivation={handleActivation}
          />
        );
      case "steps":
        return <Steps handleTabChange={handleTabChange} />;
      default:
        return <Generalinfo handleTabChange={handleTabChange} />;
    }
  };

  return (
    <div className="pt-5 container">
      <div className="d-flex justify-content-end align-items-center mt-4 ">
        <ul className="d-flex justify-content-between align-items-center col-12 col-md-10 col-lg-8 shadow rounded  p-4 navlinks flex-wrap">
          <li
            className={`btn ${
              activeTab === "general" ? "active bg-danger text-light" : ""
            }`}
            onClick={() => handleTabChange("general")}
          >
            General info
          </li>
          <li
            className={`btn ${
              activeTab === "images" ? "active bg-danger text-light" : ""
            }`}
            onClick={() => handleTabChange("images")}
          >
            Images
          </li>
          <li
            className={`btn ${
              activeTab === "chemicals" ? "active bg-danger text-light" : ""
            }`}
            onClick={() => handleTabChange("chemicals")}
          >
            Chemicals
          </li>
          <li
            className={`btn ${
              activeTab === "tools" ? "active bg-danger text-light" : ""
            }`}
            onClick={() => handleTabChange("tools")}
          >
            Tools
          </li>
          <li
            className={`btn ${
              activeTab === "steps" ? "active bg-danger text-light" : ""
            }`}
            onClick={() => handleTabChange("steps")}
          >
            Steps
          </li>
        </ul>
      </div>
      {renderContent()}
    </div>
  );
};

export default Index;
