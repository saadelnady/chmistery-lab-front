import React from "react";
import { Route, Routes } from "react-router-dom";
import Experiment from "../../components/teacher/experiment/Index.jsx";
import Chemicals from "../../components/teacher/chemicals/Index";
import Header from "../../components/teacher/shared/header/Index";

const Index = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Experiment />} />
        <Route path="/chemicals" element={<Chemicals />} />
      </Routes>
    </div>
  );
};

export default Index;
