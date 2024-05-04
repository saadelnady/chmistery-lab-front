import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Experiment from "../../components/teacher/experiment/Index.jsx";

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
            <Experiment
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
