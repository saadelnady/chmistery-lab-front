import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../../components/shared/ErrorMessage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editExperiment } from "../../../store/actions/experiment/experimentActions";

const Generalinfo = () => {
  const dispatch = useDispatch();
  const { experimentId } = useParams();
  const [info, setInfo] = useState({
    name: "",
    description: "",
    observation: "",
    conclusion: "",
    equation: "",
    objective: "",
  });
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    description: Yup.string().required("required"),
    observation: Yup.string().required("required"),
    conclusion: Yup.string().required("required"),
    equation: Yup.string().required("required"),
    objective: Yup.string().required("required"),
  });

  const handleSubmit = (values) => {
    const info = { ...values };
    dispatch(editExperiment(experimentId, info));
  };
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 py-3">
      <Formik
        initialValues={info}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="col-12 col-lg-8 px-4 py-5 rounded shadow">
            {/* Experiment Name */}
            <label htmlFor="experimentName" className="mb-3 fw-bold fs-4">
              Experiment Name:
            </label>
            <Field
              id="experimentName"
              name="name"
              type="text"
              className="form-control col-md-8"
            />
            {errors.name && touched.name && (
              <ErrorMessage
                touched={touched}
                errors={errors}
                fieldName="name"
              />
            )}

            {/* Description */}
            <label htmlFor="description" className="mb-3 fw-bold fs-4">
              Description:
            </label>
            <Field
              id="description"
              name="description"
              as="textarea"
              className="form-control col-md-8"
            />
            {errors.description && touched.description && (
              <ErrorMessage
                touched={touched}
                errors={errors}
                fieldName="description"
              />
            )}

            {/* Observation */}
            <label htmlFor="observation" className="mb-3 fw-bold fs-4">
              Observation:
            </label>
            <Field
              id="observation"
              name="observation"
              type="text"
              className="form-control"
            />
            {errors.observation && touched.observation && (
              <ErrorMessage
                touched={touched}
                errors={errors}
                fieldName="observation"
              />
            )}

            {/* Conclusion */}
            <label htmlFor="conclusion" className="mb-3 fw-bold fs-4 mt-4">
              Conclusion:
            </label>
            <Field
              id="conclusion"
              name="conclusion"
              type="text"
              className="form-control"
            />
            {errors.conclusion && touched.conclusion && (
              <ErrorMessage
                touched={touched}
                errors={errors}
                fieldName="conclusion"
              />
            )}

            {/* Equation */}
            <label htmlFor="equation" className="mb-3 fw-bold fs-4 mt-4">
              Equation:
            </label>
            <Field
              id="equation"
              name="equation"
              type="text"
              className="form-control"
            />
            {errors.equation && touched.equation && (
              <ErrorMessage
                touched={touched}
                errors={errors}
                fieldName="equation"
              />
            )}

            {/* Objective */}
            <label htmlFor="objective" className="mb-3 fw-bold fs-4 mt-4">
              Objective:
            </label>
            <Field
              id="objective"
              name="objective"
              type="text"
              className="form-control"
            />
            {errors.objective && touched.objective && (
              <ErrorMessage
                touched={touched}
                errors={errors}
                fieldName="objective"
              />
            )}

            <button className="btn active mt-4">Edit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Generalinfo;
