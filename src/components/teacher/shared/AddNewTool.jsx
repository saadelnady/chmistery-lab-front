import ErrorMessage from "../../shared/ErrorMessage";
import { Formik, Form, Field } from "formik";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  addTool,
  editTool,
  fetchTool,
} from "../../../store/actions/tools/toolActions";
import { toast } from "react-toastify";
import Loading from "../../shared/Loading";
import { isObjectNotEmpty } from "../../../helpers/object_checker";
import { imageUrl } from "../../../api/api";
import { showToast } from "../../../helpers/toaste_helper";

const AddNewTool = ({ handleActivation, toolId, handleToolId }) => {
  const { isLoading, tools, tool } = useSelector((state) => state.toolReducer);
  const dispatch = useDispatch();
  const formikRef = useRef(null);

  const initialValues = {
    name: "",
    description: "",
    image: null,
  };
  const [fileContent, setFileContent] = useState(null);
  const [toolImage, setToolImage] = useState(null); // State to hold the file content
  // =====================================

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setFileContent(file);
    setToolImage(URL.createObjectURL(file));
  };
  // =====================================
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    description: Yup.string().required("required"),
  });
  // =====================================
  useEffect(() => {
    if (toolId) {
      dispatch(fetchTool(toolId));
    }
  }, [toolId, dispatch]);
  useEffect(() => {
    if (isObjectNotEmpty(tool) && toolId) {
      formikRef.current.setFieldValue("name", tool?.name);
      formikRef.current.setFieldValue("description", tool?.description);
      if (tool.image) {
        setToolImage(`${imageUrl}/${tool?.image}`);
      }
    }
  }, [tool]);

  // =====================================
  const handleSubmit = (values) => {
    if (isObjectNotEmpty(tool) && toolId) {
      handleEditTool(values);
    } else {
      handleAddTool(values);
    }
  };
  const handleChange = (e) => {
    formikRef.current.setFieldValue(e.target.name, e.target.value);
  };
  const handleEditTool = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);

    if (fileContent) {
      formData.append("image", fileContent);
    }
    dispatch(editTool(toast, formData, toolId));
    setTimeout(() => {
      handleToolId();
      handleActivation();
    }, 3000);
  };

  const handleAddTool = (values) => {
    const existedTool = tools.find((tool, index) => {
      return tool?.name === values?.name;
    });
    if (existedTool) {
      showToast(toast, "tool is already exists", "error");
    } else {
      const formData = new FormData();
      formData.append("name", values?.name);
      formData.append("description", values?.description);
      if (fileContent) {
        formData.append("image", fileContent);
      }
      dispatch(addTool(toast, formData));
      setTimeout(() => {
        handleActivation();
      }, 3000);
    }
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
          <Form className="add-new-chemical bg-light col-12 col-sm-10 col-md-6 col-lg-4 rounded py-3 px-2">
            <div className="d-flex justify-content-end">
              <i
                className="bi bi-x-lg cursor-pointer fs-3"
                onClick={() => {
                  handleActivation();
                  if (toolId) {
                    handleToolId();
                  }
                }}
              ></i>
            </div>
            <div className="d-flex flex-column">
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="form-control mb-2"
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
                name="description"
                placeholder="Description"
                className="form-control mb-2"
                onChange={handleChange}
              />
              {errors?.description && touched?.description && (
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

                {errors?.image && touched?.image && (
                  <ErrorMessage
                    touched={touched}
                    errors={errors}
                    fieldName="image"
                  />
                )}
              </div>

              <button className="btn btn-danger">
                {isLoading ? <Loading /> : `${toolId ? "Edit" : "Add"} tool`}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddNewTool;
