import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Index = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { experiments } = useSelector((state) => state.experimentReducer);
  return (
    <div className="min-vh-100 d-flex justify-content-evenly align-items-center flex-column">
      <h2>Wellcome back {user?.firstName}</h2>
      <ul className="d-flex flex-column shadow p-4 rounded">
        {experiments?.map((experiment, index) => {
          return (
            <NavLink
              to={`/student/experiment/${experiment?._id}`}
              className="btn active mb-3 "
              key={index}
            >
              <li>{experiment?.info?.name || "untitled"} </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
