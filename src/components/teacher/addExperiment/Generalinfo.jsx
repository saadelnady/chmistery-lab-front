const Generalinfo = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 py-3">
      <form className="col-12 col-lg-8 px-4 py-5 rounded shadow">
        <label htmlFor="experiment-name" className="mb-3 fw-bold fs-4">
          Experiment Name:
        </label>
        <input
          id="experiment-name"
          type="text"
          className="form-control col-md-8"
        />

        {/* =================================================================== */}

        <label htmlFor="description" className="mb-3 fw-bold fs-4">
          Description:
        </label>
        <textarea
          id="description"
          type="text"
          className="form-control col-md-8"
        />

        {/* =================================================================== */}

        <label htmlFor="observation" className="mb-3 fw-bold fs-4">
          Observation:
        </label>
        <input id="observation" type="email" className="form-control" />
        {/* =================================================================== */}

        <label htmlFor="conslusion" className="mb-3 fw-bold fs-4 mt-4">
          Conslusion:
        </label>
        <input id="conslusion" type="text" className="form-control" />
        {/* =================================================================== */}

        <label htmlFor="aquation" className="mb-3 fw-bold fs-4 mt-4">
          Aquation:
        </label>
        <input id="aquation" type="text" className="form-control" />
        {/* =================================================================== */}

        <label htmlFor="objective" className="mb-3 fw-bold fs-4 mt-4">
          Objective:
        </label>
        <input id="objective" type="text" className="form-control" />
        {/* =================================================================== */}
      </form>
    </div>
  );
};

export default Generalinfo;
