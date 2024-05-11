import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import ErrorMessage from "../../shared/ErrorMessage";
import { toast } from "react-toastify";
import { userSignUp } from "../../../store/actions/user/userActions";
import { useDispatch } from "react-redux";
const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Required"),
    role: Yup.string()
      .oneOf(["teacher", "student"], "Invalid Role")
      .required("Required"),
  });

  const handleRegister = (values) => {
    const trimedValues = {
      firstName: values?.firstName?.trim(),
      lastName: values?.lastName?.trim(),
      email: values?.email?.trim(),
      phoneNumber: values?.phoneNumber?.trim(),
      password: values?.password,
      role: values?.role,
    };
    console.log("trimedValues =====>", trimedValues);
    const payLoad = { values: trimedValues, toast, navigate };
    dispatch(userSignUp(payLoad));
  };

  return (
    <div className="pt-5 min-vh-100 ">
      <h2 className="text-center">Welcome to sign-up page</h2>
      <div className="d-flex justify-content-center align-items-center mt-3 py-3">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
            role: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleRegister(values);
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form
              className="col-12 col-sm-9 col-md-8 col-lg-8 col-xl-4 px-4 py-5 rounded shadow"
              onSubmit={handleSubmit}
            >
              <label htmlFor="firstName" className="mb-3 fw-bold fs-4">
                First name
              </label>
              <Field
                id="firstName"
                name="firstName"
                type="text"
                className="form-control"
              />
              <ErrorMessage
                touched={touched}
                errors={errors}
                fieldName="firstName"
              />

              <label htmlFor="lastName" className="mb-3 fw-bold fs-4 mt-3">
                Last name
              </label>
              <Field
                id="lastName"
                name="lastName"
                type="text"
                className="form-control"
              />
              <ErrorMessage
                touched={touched}
                errors={errors}
                fieldName="lastName"
              />

              <label htmlFor="phoneNumber" className="mb-3 fw-bold fs-4 mt-3">
                Mobile phone
              </label>
              <Field
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                className="form-control"
              />
              <ErrorMessage
                touched={touched}
                errors={errors}
                fieldName="phoneNumber"
              />

              <label htmlFor="email" className="mb-3 fw-bold fs-4 mt-3">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="form-control"
              />
              <ErrorMessage
                touched={touched}
                errors={errors}
                fieldName="email"
              />

              <label htmlFor="password" className="mb-3 fw-bold fs-4 mt-4">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className="form-control"
              />
              <ErrorMessage
                touched={touched}
                errors={errors}
                fieldName="password"
              />

              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <label htmlFor="role" className="mb-3 fw-bold fs-4 mt-4">
                  Role
                </label>
                <div className="d-flex justify-content-evenly align-items-center">
                  <div className="me-4 d-flex justify-content-evenly align-items-center">
                    <label htmlFor="teacher" className="me-3 fs-4">
                      Teacher
                    </label>
                    <Field
                      type="radio"
                      name="role"
                      value="teacher"
                      id="teacher"
                    />
                  </div>
                  <div className="me-4 d-flex justify-content-evenly align-items-center">
                    <label htmlFor="student" className="me-3 fs-4">
                      Student
                    </label>
                    <Field
                      type="radio"
                      name="role"
                      value="student"
                      id="student"
                    />
                  </div>
                </div>
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  fieldName="role"
                />
              </div>

              <button
                type="submit"
                className="btn btn-danger d-block col-6 mt-3 fs-4 mx-auto"
              >
                Sign up
              </button>

              <div className="fs-5 text-center text-sm-start mt-4 d-flex justify-content-evenly flex-wrap">
                Already have an account?
                <NavLink to="/" className="ms-4 text-dark">
                  Login
                </NavLink>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Index;
