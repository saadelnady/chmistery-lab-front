import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ErrorMessage from "../../shared/ErrorMessage";
import {
  addChemical,
  getChemical,
} from "../../../store/actions/chemical/chemicalActions";
import Loading from "../../shared/Loading";
import { showToast } from "../../../helpers/toaste_helper";
import { editChemical } from "../../../store/actions/chemical/chemicalActionsCreators";

const AddNewChemical = ({ handleActivation, chemicalId }) => {
  const { isLoading, chemicals, chemical } = useSelector(
    (state) => state.chemicalReducer
  );
  const [fileContent, setFileContent] = useState(null); // State to hold the file content

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setFileContent(file);
  };
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState({
    name: "",
    state: "",
    color: "",
    taste: "",
    smell: "",
    molecularFormula: "",
    atomicStructure: null,
  });

  useEffect(() => {
    if (chemicalId) {
      dispatch(getChemical(chemicalId));
      setInitialValues(chemical);
    }
  }, [dispatch, chemicalId, initialValues]);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    state: Yup.string().required("required"),
    color: Yup.string().required("required"),
    taste: Yup.string().required("required"),
    smell: Yup.string().required("required"),
    molecularFormula: Yup.string().required("required"),
    // atomicStructure: Yup.mixed().required("File is required"),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInitialValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (values) => {
    if (chemicalId) {
      handleEditChemical(values);
    } else {
      handleAddChemical(values);
    }
  };
  const handleAddChemical = (values) => {
    const existedChemical = chemicals.find((chemical, index) => {
      return chemical.name === values.name;
    });
    if (existedChemical) {
      showToast(toast, "chemical is already exists", "error");
    } else {
      // Handle form submission here
      const formData = new FormData();
      console.log("values ====>", values);
      formData.append("name", values?.name);
      formData.append("state", values?.state);
      formData.append("color", values?.color);
      formData.append("taste", values?.taste);
      formData.append("smell", values?.smell);
      formData.append("molecularFormula", values?.molecularFormula);
      formData.append("atomicStructure", fileContent);
      dispatch(addChemical(toast, formData));
      setTimeout(() => {
        handleActivation();
      }, 3000);
    }
  };

  const handleEditChemical = (values) => {
    // Handle edit operation
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("state", values.state);
    formData.append("color", values.color);
    formData.append("taste", values.taste);
    formData.append("smell", values.smell);
    formData.append("molecularFormula", values.molecularFormula);
    formData.append("atomicStructure", fileContent);
    dispatch(editChemical(toast, formData, chemicalId));
    setTimeout(() => {
      handleActivation();
    }, 3000);
  };

  return (
    <div className="overLay d-flex justify-content-center align-items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="add-new-chemical bg-light col-12 col-sm-6 col-md-6 col-lg-5 rounded py-3 px-2">
            <div className="d-flex justify-content-end">
              <i
                className="bi bi-x-lg cursor-pointer fs-3"
                onClick={handleActivation}
              ></i>
            </div>
            <div className="d-flex flex-column">
              <Field
                type="text"
                name="name"
                placeholder="name"
                className="form-control mb-3"
                value={initialValues.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  fieldName="name"
                />
              )}

              <Field
                type="text"
                name="state"
                value={initialValues.state}
                placeholder="state"
                className="form-control mb-3"
                onChange={handleChange}
              />
              {errors.state && touched.state && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  fieldName="state"
                />
              )}
              <div className="d-flex  ps-4">
                <label htmlFor="color" className="me-3">
                  color
                </label>
                <Field
                  type="color"
                  name="color"
                  id="color"
                  className="mb-3 col-3"
                  value={initialValues.color}
                  onChange={handleChange}
                />
                {errors.color && touched.color && (
                  <ErrorMessage
                    touched={touched}
                    errors={errors}
                    fieldName="color"
                  />
                )}
              </div>

              <Field
                type="text"
                name="taste"
                placeholder="taste"
                className="form-control mb-3"
                onChange={handleChange}
                value={initialValues.taste}
              />
              {errors.taste && touched.taste && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  fieldName="taste"
                />
              )}

              <Field
                type="text"
                name="smell"
                placeholder="smell"
                className="form-control mb-3"
                onChange={handleChange}
                value={initialValues.smell}
              />
              {errors.smell && touched.smell && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  fieldName="smell"
                />
              )}
              <Field
                type="text"
                name="molecularFormula"
                placeholder="molecular formula"
                className="form-control mb-3"
                onChange={handleChange}
                value={initialValues.molecularFormula}
              />
              {errors.molecularFormula && touched.molecularFormula && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  fieldName="molecularFormula"
                />
              )}

              <Field
                type="file"
                accept="image/*"
                name="atomicStructure"
                className="form-control mb-3"
                onChange={handleFileChange}
              />
              {errors.atomicStructure && touched.atomicStructure && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  fieldName="atomicStructure"
                />
              )}

              <button className="btn btn-danger">
                {isLoading ? (
                  <Loading />
                ) : (
                  `${chemicalId ? "Edit" : "Add"} chemical`
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewChemical;
