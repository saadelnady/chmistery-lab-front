import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ErrorMessage from "../../shared/ErrorMessage";
import {
  addChemical,
  editChemical,
  fetchChemical,
} from "../../../store/actions/chemical/chemicalActions";
import Loading from "../../shared/Loading";
import { showToast } from "../../../helpers/toaste_helper";
import { isObjectNotEmpty } from "../../../helpers/object_checker";
import { imageUrl } from "../../../api/api";
import { useRef } from "react";

const AddNewChemical = ({ handleActivation, chemicalId, handleChemicalId }) => {
  const { isLoading, chemicals, chemical } = useSelector(
    (state) => state.chemicalReducer
  );
  const formikRef = useRef(null);

  const initialValues = {
    name: "",
    state: "",
    color: "",
    taste: "",
    smell: "",
    molecularFormula: "",
    atomicStructure: null,
  };

  const dispatch = useDispatch();
  const [fileContent, setFileContent] = useState(null); // State to hold the file content
  const [chemicalImage, setChemicalImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event?.currentTarget?.files[0];
    setFileContent(file);
    setChemicalImage(URL.createObjectURL(file));
  };

  // =============================================================
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
  });
  useEffect(() => {
    if (chemicalId) {
      dispatch(fetchChemical(chemicalId));
    }
  }, [chemicalId, dispatch]);

  useEffect(() => {
    if (isObjectNotEmpty(chemical) && chemicalId) {
      formikRef?.current?.setFieldValue("name", chemical?.name);
      formikRef?.current?.setFieldValue("state", chemical?.state);
      formikRef?.current?.setFieldValue("color", chemical?.color);
      formikRef.current?.setFieldValue("taste", chemical?.taste);
      formikRef?.current?.setFieldValue("smell", chemical?.smell);
      formikRef?.current?.setFieldValue(
        "molecularFormula",
        chemical?.molecularFormula
      );

      if (chemical.atomicStructure) {
        setChemicalImage(`${imageUrl}/${chemical?.atomicStructure}`);
      }
    }
  }, [chemical]);

  // =============================================================

  const handleSubmit = (values) => {
    if (isObjectNotEmpty(chemical) && chemicalId) {
      handleEditChemical(values);
    } else {
      handleAddChemical(values);
    }
  };
  const handleAddChemical = (values) => {
    const existedChemical = chemicals.find((chemical, index) => {
      return chemical?.name === values?.name;
    });
    if (existedChemical) {
      showToast(toast, "chemical is already exists", "error");
    } else {
      // Handle form submission here
      const formData = new FormData();
      formData.append("name", values?.name);
      formData.append("state", values?.state);
      formData.append("color", values?.color);
      formData.append("taste", values?.taste);
      formData.append("smell", values?.smell);
      formData.append("molecularFormula", values?.molecularFormula);
      if (fileContent) {
        formData.append("atomicStructure", fileContent);
      }
      dispatch(addChemical(toast, formData));
      setTimeout(() => {
        handleActivation();
      }, 3000);
    }
  };

  const handleEditChemical = (values) => {
    const formData = new FormData();
    formData.append("name", values?.name);
    formData.append("state", values?.state);
    formData.append("color", values?.color);
    formData.append("taste", values?.taste);
    formData.append("smell", values?.smell);
    formData.append("molecularFormula", values?.molecularFormula);
    if (fileContent) {
      formData.append("atomicStructure", fileContent);
    }
    dispatch(editChemical(toast, formData, chemicalId));
    setTimeout(() => {
      handleChemicalId();
      handleActivation();
    }, 3000);
  };
  const handleChange = (e) => {
    formikRef.current.setFieldValue(e?.target?.name, e?.target?.value);
  };
  return (
    <div className="overLay d-flex justify-content-center align-items-center">
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="add-new-chemical bg-light col-12 col-sm-8 col-md-6 col-lg-5 rounded py-3 px-2">
            <div className="d-flex justify-content-end">
              <i
                className="bi bi-x-lg cursor-pointer fs-3"
                onClick={() => {
                  handleActivation();
                  if (chemicalId) {
                    handleChemicalId();
                  }
                }}
              ></i>
            </div>
            <div className="d-flex flex-column">
              <Field
                type="text"
                name="name"
                placeholder="name"
                className="form-control mb-3"
                onChange={handleChange}
              />
              {errors?.name && touched?.name && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  fieldName="name"
                />
              )}

              <Field
                type="text"
                name="state"
                placeholder="state"
                className="form-control mb-3"
                onChange={handleChange}
              />
              {errors?.state && touched?.state && (
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
                  onChange={handleChange}
                />
                {errors?.color && touched?.color && (
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
              />
              {errors?.taste && touched?.taste && (
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
              />
              {errors?.smell && touched?.smell && (
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
              />
              {errors?.molecularFormula && touched?.molecularFormula && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  fieldName="molecularFormula"
                />
              )}
              <div className="d-flex align-items-center">
                <label htmlFor="atomicStructure" className="btn active mb-3">
                  Atomic structure
                </label>
                <Field
                  type="file"
                  accept="image/*"
                  name="atomicStructure"
                  className="d-none mb-3"
                  id="atomicStructure"
                  onChange={handleFileChange}
                />
                {chemicalImage && (
                  <img
                    src={chemicalImage}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      marginLeft: "10px",
                    }}
                  />
                )}

                {errors?.atomicStructure && touched?.atomicStructure && (
                  <ErrorMessage
                    touched={touched}
                    errors={errors}
                    fieldName="atomicStructure"
                  />
                )}
              </div>

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
