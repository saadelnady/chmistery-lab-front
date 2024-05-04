import React from "react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="pt-5 min-vh-100 ">
      <h2 className="text-center">Wellcome to sign-up page</h2>
      <div className="d-flex justify-content-center align-items-center mt-3 py-3">
        <form className="col-12 col-sm-9 col-md-8 col-lg-8 col-xl-4 px-4 py-5 rounded shadow">
          <label htmlFor="firstname" className="mb-3 fw-bold fs-4">
            First name
          </label>
          <input id="firstname" type="text" className="form-control" />
          <label htmlFor="lastname" className="mb-3 fw-bold fs-4 mt-3">
            Last name
          </label>
          <input id="lastname" type="text" className="form-control " />
          <label htmlFor="mobilephone" className="mb-3 fw-bold fs-4 mt-3">
            mobile phone
          </label>
          <input id="mobilephone" type="text" className="form-control " />
          <label htmlFor="email" className="mb-3 fw-bold fs-4 mt-3">
            Email
          </label>
          <input id="email" type="email" className="form-control" />
          <label htmlFor="password" className="mb-3 fw-bold fs-4 mt-4">
            Password
          </label>
          <input id="password" type="password" className="form-control" />
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <label htmlFor="role" className="mb-3 fw-bold fs-4 mt-4">
              Role
            </label>
            <div className="d-flex justify-content-evenly align-items-center">
              <div className="me-4 d-flex justify-content-evenly align-items-center">
                <label htmlFor="teacher" className="me-3 fs-4">
                  teacher
                </label>
                <input type="radio" name="role" value="teacher" id="teacher" />
              </div>
              <div className="me-4 d-flex justify-content-evenly align-items-center">
                <label htmlFor="student" className="me-3 fs-4">
                  student
                </label>
                <input type="radio" name="role" value="student" id="student" />
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Sign up"
            className="btn btn-danger d-block col-6 mt-3 fs-4 mx-auto"
          />
          <div className="fs-5 text-center text-sm-start mt-4 d-flex justify-content-evenly flex-wrap">
            Already have an account ?
            <NavLink to="/" className="ms-4 text-dark ">
              login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
