import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/login/Index.jsx";
import Register from "./components/auth/register/Index.jsx";
import Header from "./components/shared/header/Index.jsx";

import Teacher from "./layouts/teacher/Index.jsx";
import Student from "./layouts/student/index.jsx";

import "./App.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App bg-light min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacher/*" element={<Teacher />} />
        <Route path="/student/*" element={<Student />} />
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
