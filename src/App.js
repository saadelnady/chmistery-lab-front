import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/login/Index.jsx";
import Register from "./components/auth/register/Index.jsx";
import Header from "./components/shared/header/Index.jsx";
import NotFoundPage from "./components/shared/NotFoundPage.jsx";
import "react-toastify/dist/ReactToastify.css";

import Teacher from "./layouts/teacher/Index.jsx";
import Student from "./layouts/student/index.jsx";

import "./App.css";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./store/actions/user/userActions.js";
import { fetchExperiments } from "./store/actions/experiment/experimentActions.js";
import Loading from "./components/shared/Loading.jsx";

function App() {
  const { isLoggedIn, isLoading, user } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchUser());
      dispatch(fetchExperiments());
    }
  }, [dispatch]);
  console.log("role ===>", user);
  return (
    <div className="App bg-light min-vh-100 position-relative">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {" "}
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
      )}

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
