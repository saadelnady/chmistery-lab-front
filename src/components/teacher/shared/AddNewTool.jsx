import ErrorMessage from "../../shared/ErrorMessage";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addTool } from "../../../store/actions/tools/toolActions";
import { toast } from "react-toastify";
import Loading from "../../shared/Loading";

const AddNewTool = ({ handleActivation }) => {
  const { isLoading } = useSelector((state) => state.toolReducer);
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    description: "",
    image: null, // Change this to null instead of an empty string
  };
  const [fileContent, setFileContent] = useState(null);
  const [toolImage, setToolImage] = useState(null); // State to hold the file content
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    description: Yup.string().required("required"),
  });
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setFileContent(file);
    setToolImage(URL.createObjectURL(file));
  };
  const handleSubmit = (values) => {
    handleAddTool(values);
  };
  const handleAddTool = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("image", fileContent);
    dispatch(addTool(toast, formData));
  };
  return (
    <div className="overLay d-flex justify-content-center align-items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="add-new-chemical bg-light col-12 col-sm-10 col-md-6 col-lg-4 rounded py-3 px-2">
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
                placeholder="Name"
                className="form-control mb-2"
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
                name="description"
                placeholder="Description"
                className="form-control mb-2"
              />
              {errors.description && touched.description && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  fieldName="description"
                />
              )}
              <div className="d-flex align-items-center">
                <label htmlFor="toolImage" className="btn active mb-3">
                  tool image
                </label>

                <Field
                  type="file"
                  name="image"
                  className="d-none mb-2"
                  accept="image/*"
                  id="toolImage"
                  onChange={handleFileChange}
                />
                {toolImage && (
                  <img
                    src={toolImage}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      marginLeft: "10px",
                    }}
                  />
                )}

                {errors.image && touched.image && (
                  <ErrorMessage
                    touched={touched}
                    errors={errors}
                    fieldName="image"
                  />
                )}
              </div>

              <button className="btn btn-danger">
                {isLoading ? <Loading /> : "Add Tool"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewTool;
