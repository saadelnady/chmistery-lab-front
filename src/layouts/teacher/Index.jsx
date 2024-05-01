import React from "react";
import { Route, Routes } from "react-router-dom";
import Experiment from "../../components/teacher/experiment/Index.jsx";

const Index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Experiment />} />
      </Routes>
    </div>
  );
};

export default Index;
