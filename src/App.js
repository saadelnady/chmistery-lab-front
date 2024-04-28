import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/login/Index.jsx";
import Home from "./components/home/Index.jsx";
// import TeacherRegister from "./components/auth/register/teacher/Index.jsx";
import StudentRegister from "./components/auth/register/student/Index.jsx";
import Teacher from "./layots/teacher/Index.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App bg-light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/teacher-register" element={<TeacherRegister />} /> */}
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/teacher/*" element={<Teacher />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
