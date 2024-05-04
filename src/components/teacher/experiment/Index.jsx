import React, { useState } from "react";
import Generalinfo from "./Generalinfo";
import Equipments from "./Equipments";
import Chemicals from "./Chemicals";
import Steps from "./Steps";
import "./assets/styles/styles.css";

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
      case "equipments":
        return <Equipments handleTabChange={handleTabChange} />;
      case "steps":
        return <Steps handleTabChange={handleTabChange} />;
      default:
        return <Generalinfo handleTabChange={handleTabChange} />;
    }
  };

  return (
    <div className="pt-5 container">
      <div className="d-flex justify-content-end align-items-center mt-4 ">
        <ul className="d-flex justify-content-between align-items-center col-12 col-md-10 col-lg-8 shadow rounded  p-4 navlinks">
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
              activeTab === "chemicals" ? "active bg-danger text-light" : ""
            }`}
            onClick={() => handleTabChange("chemicals")}
          >
            Chemicals
          </li>
          <li
            className={`btn ${
              activeTab === "equipments" ? "active bg-danger text-light" : ""
            }`}
            onClick={() => handleTabChange("equipments")}
          >
            equipments
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
