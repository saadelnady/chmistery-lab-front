import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userLogout } from "../../../store/actions/user/userActions";
import { toast } from "react-toastify";

const Index = () => {
  const { isLoggedIn, user } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(userLogout({ toast, navigate }));
  };
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between shadow">
      <div className="container">
        <NavLink className="fw-bold fs-2 col-md-3 " to="/">
          Virtual Lab
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-12 d-flex justify-content-md-end">
            {isLoggedIn && (
              <li className="nav-item mb-3 mb-md-0 align-self-start">
                <NavLink
                  className="nav-link active btn me-2"
                  aria-current="page"
                  to={user.role === "student" ? "/student" : "/teacher"}
                >
                  Home
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item mb-3 mb-md-0 align-self-start">
                <button
                  className="nav-link active btn btn-danger text-light"
                  onClick={() => {
                    handleLogOut();
                  }}
                >
                  log out
                </button>
              </li>
            )}
            {!isLoggedIn && (
              <li className="nav-item mb-3 mb-md-0 align-self-start">
                <NavLink
                  className="nav-link active btn btn-danger text-light"
                  aria-current="page"
                  to="/register"
                >
                  Sign up
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;
