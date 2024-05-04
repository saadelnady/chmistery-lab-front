import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddExperiment from "../../components/teacher/addExperiment/Index.jsx";
import Experiments from "../../components/teacher/experiments/Index.jsx";
import Tools from "../../components/teacher/tools/Index.jsx";
import Chemicals from "../../components/teacher/chemicals/Index.jsx";

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  const handleActivation = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Experiments
              isActive={isActive}
              handleActivation={handleActivation}
            />
          }
        />
        <Route
          path="/add-experiment"
          element={
            <AddExperiment
              isActive={isActive}
              handleActivation={handleActivation}
            />
          }
        />
        <Route
          path="/tools"
          element={
            <Tools isActive={isActive} handleActivation={handleActivation} />
          }
        />
        <Route
          path="/chemicals"
          element={
            <Chemicals
              isActive={isActive}
              handleActivation={handleActivation}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Index;
