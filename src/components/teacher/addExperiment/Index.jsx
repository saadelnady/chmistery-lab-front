import React, { useEffect, useState } from "react";
import Generalinfo from "./Generalinfo";
import Tools from "./Tools";
import Chemicals from "./Chemicals";
import Steps from "./steps/Steps";
import ExperimentImages from "./images/ExperimentImages";
import "./assets/styles/styles.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiment } from "../../../store/actions/experiment/experimentActions";

const Index = ({
  isActive,
  isDescription,
  handleActivation,
  handleDescription,
}) => {
  const [activeTab, setActiveTab] = useState("general");
  const { experiment } = useSelector((state) => state.experimentReducer);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const { experimentId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExperiment(experimentId));
  }, [dispatch, experimentId]);

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return <Generalinfo />;
      case "chemicals":
        return (
          <Chemicals
            isActive={isActive}
            handleActivation={handleActivation}
            isDescription={isDescription}
            handleDescription={handleDescription}
          />
        );
      case "images":
        return <ExperimentImages />;
      case "tools":
        return (
          <Tools
            isActive={isActive}
            handleActivation={handleActivation}
            isDescription={isDescription}
            handleDescription={handleDescription}
          />
        );
      case "steps":
        return <Steps />;

      default:
        return <Generalinfo />;
    }
  };

  return (
    <div className="pt-5 container">
      <div className="d-flex justify-content-between align-items-center mt-4 ">
        <div className="d-flex align-items-center">
          Experiment name :<h4>{experiment?.info?.name || "untitled"}</h4>
        </div>
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
