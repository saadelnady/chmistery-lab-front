import React, { useState } from "react";
import Generalinfo from "./Generalinfo";
import Equipments from "./Equipments";
import Chemicals from "./Chemicals";
import "./assets/styles/styles.css";
const Index = () => {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return <Generalinfo />;
      case "chemicals":
        return <Chemicals />;
      case "equipment":
        return <Equipments />;
      case "steps":
        return <StepsPage />;
      default:
        return <Generalinfo />;
    }
  };

  return (
    <div className="pt-5 min-vh-100 container">
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
              activeTab === "equipment" ? "active bg-danger text-light" : ""
            }`}
            onClick={() => handleTabChange("equipment")}
          >
            Equipment
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

const StepsPage = () => {
  return (
    <div>
      <h3>Steps Page</h3>
      {/* Add your content here */}
    </div>
  );
};

export default Index;
