import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddExperiment from "../../components/teacher/addExperiment/Index.jsx";
import Experiments from "../../components/teacher/experiments/Index.jsx";
import Tools from "../../components/teacher/tools/Index.jsx";
import Chemicals from "../../components/teacher/chemicals/Index.jsx";
import { useDispatch } from "react-redux";
import { fetchChemicals } from "../../store/actions/chemical/chemicalActions.js";
import { fetchTools } from "../../store/actions/tools/toolActions.js";

const Index = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [isDescription, setIsDescription] = useState(false);
  const handleActivation = () => {
    setIsActive(!isActive);
  };
  const handleDescription = () => {
    setIsDescription(!isDescription);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchChemicals());
      dispatch(fetchTools());
    }
  }, [dispatch]);
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
          path="/add-experiment/:experimentId"
          element={
            <AddExperiment
              isActive={isActive}
              handleActivation={handleActivation}
              isDescription={isDescription}
              handleDescription={handleDescription}
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
