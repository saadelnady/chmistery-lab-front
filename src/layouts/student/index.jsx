import { Route, Routes } from "react-router-dom";
import Experiment from "../../components/student/doExperiment/Index";
import Student from "../../components/student/Index";
const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/experiment" element={<Experiment />} />
      </Routes>
    </div>
  );
};

export default index;
