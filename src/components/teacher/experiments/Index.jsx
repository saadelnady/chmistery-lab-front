import { useState } from "react";
import Allexperiments from "./Allexperiments";
import Chemicals from "./Chemicals";
import Tools from "./Tools";
const Index = ({ isActive, handleActivation }) => {
  const [activeTab, setActiveTab] = useState("experiments");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "experiments":
        return <Allexperiments />;
      case "chemicals":
        return (
          <Chemicals isActive={isActive} handleActivation={handleActivation} />
        );
      case "tools":
        return (
          <Tools isActive={isActive} handleActivation={handleActivation} />
        );

      default:
        return <Allexperiments />;
    }
  };
  return (
    <div className="pt-5 container">
      <div className="d-flex justify-content-end align-items-center mt-4 ">
        <ul className="d-flex justify-content-between align-items-center col-12 col-md-10 col-lg-8 shadow rounded  p-4 navlinks">
          <li
            className={`btn ${
              activeTab === "experiments" ? "active bg-danger text-light" : ""
            }`}
            onClick={() => handleTabChange("experiments")}
          >
            All experiments
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
        </ul>
      </div>
      {renderContent()}
    </div>
  );
};

export default Index;
