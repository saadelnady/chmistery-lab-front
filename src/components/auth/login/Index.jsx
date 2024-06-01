import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import ErrorMessage from "../../shared/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userLogin } from "../../../store/actions/user/userActions";
import Loading from "../../shared/Loading";

const Login = () => {
  const { isLoading } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Required"),
  });
  const handleLogin = (values) => {
    const trimedValues = {
      email: values?.email?.trim(),
      password: values?.password,
    };
    const payload = { values: trimedValues, toast, navigate };
    dispatch(userLogin(payload));
  };

  return (
    <div className="pt-5 min-vh-100">
      <h2 className="text-center">Welcome to the login page</h2>
      <div className="d-flex justify-content-center align-items-center mt-5 py-5">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            handleLogin(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="col-12 col-sm-9 col-md-8 col-lg-8 col-xl-4 px-4 py-5 rounded shadow">
              <label htmlFor="email" className="mb-3 fw-bold fs-4">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="form-control"
              />
              {errors?.email && touched?.email && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  fieldName="email"
                />
              )}

              <label htmlFor="password" className="mb-3 fw-bold fs-4 mt-4">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className="form-control"
              />
              {errors?.password && touched?.password && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  fieldName="password"
                />
              )}

              <button
                type="submit"
                className="btn btn-danger d-block col-6 mt-3 fs-4 mx-auto"
              >
                {isLoading ? <Loading /> : "Login"}
              </button>

              <div className="fs-5 text-center text-sm-start mt-4 d-flex justify-content-evenly flex-wrap">
                Don't have an account?
                <NavLink to="/register" className="ms-4 text-dark">
                  SignUp
                </NavLink>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
