import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/auth/login/Index.jsx";
import Register from "./components/auth/register/Index.jsx";
import Header from "./components/shared/header/Index.jsx";
import NotFoundPage from "./components/shared/NotFoundPage.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Teacher from "./layouts/teacher/Index.jsx";
import Student from "./layouts/student/index.jsx";

import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./store/actions/user/userActions.js";
import { fetchExperiments } from "./store/actions/experiment/experimentActions.js";

function App() {
  const { isLoggedIn, user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchUser());
      dispatch(fetchExperiments());
      if (user.role === "student") {
        navigate("/student");
      } else if (user.role === "teacher") {
        navigate("/teacher");
      }
    }
  }, [isLoggedIn]);
  return (
    <div className="App bg-light min-vh-100 position-relative">
      <>
        <Header />
        <Routes>
          {!isLoggedIn && <Route path="/" element={<Login />} />}
          {!isLoggedIn && <Route path="/register" element={<Register />} />}

          {user.role === "teacher" && (
            <Route path="/teacher/*" element={<Teacher />} />
          )}
          {user.role === "student" && (
            <Route path="/student/*" element={<Student />} />
          )}
          <Route
            path="*"
            element={
              <NotFoundPage
                navigateTo={`${
                  user.role === "student" ? "/student" : "/teacher"
                }`}
              />
            }
          />
        </Routes>
      </>

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
