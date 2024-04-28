import React from "react";

const Index = () => {
  return (
    <div className="pt-5 min-vh-100 ">
      <h2 className="text-center">experiment page</h2>
      <div className="d-flex justify-content-center align-items-center mt-3 py-3">
        <form className="col-12 col-sm-9 col-md-8 col-lg-6 px-4 py-5 rounded shadow">
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

          <label htmlFor="objective" className="mb-3 fw-bold fs-4">
            Objective:
          </label>
          <input id="objective" type="text" className="form-control " />

          {/* =================================================================== */}

          <label htmlFor="observation" className="mb-3 fw-bold fs-4">
            Observation:
          </label>
          <input id="observation" type="email" className="form-control" />
          <label htmlFor="conslusion" className="mb-3 fw-bold fs-4 mt-4">
            Conslusion:
          </label>
          <input id="conslusion" type="text" className="form-control" />
          <label htmlFor="apparatus" className="mb-3 fw-bold fs-4 mt-4">
            Apparatus:
          </label>
          <input id="apparatus" type="text" className="form-control" />
          <label htmlFor="aquation" className="mb-3 fw-bold fs-4 mt-4">
            Aquation:
          </label>
          <input id="aquation" type="text" className="form-control" />
          <label htmlFor="atomic-structure" className="mb-3 fw-bold fs-4 mt-4">
            Atomic Structure:
          </label>
          <input id="atomic-structure" type="text" className="form-control" />
          <div className="d-flex">
            <input
              type="submit"
              value="Add experiment "
              className="btn btn-danger mt-3 fs-4 mx-auto"
            />
            <input
              type="submit"
              value="Reset"
              className="btn mt-3 fs-4 mx-auto"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
