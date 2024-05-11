const ErrorMessage = ({ touched, errors, fieldName, condition = true }) => {
  return touched[fieldName] && errors[fieldName] && condition ? (
    <p className="text-sm-end">
      <i className="bi bi-info-circle fs-3 cursor-pointer"></i>
      {errors[fieldName]}
    </p>
  ) : null;
};

export default ErrorMessage;
