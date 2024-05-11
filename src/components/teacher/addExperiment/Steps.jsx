import { useState } from "react";
import VerbOptions from "./VerbOptions.jsx";
const Steps = () => {
  const steps = [
    {
      order: 0,
      verb: "fix",
      description: {
        tool_1: {
          id: "SOME_ID",
          title: "TITLE",
        },
        tool_2: {
          id: "SOME_ID",
          title: "TITLE",
        },
      },
    },
    {
      order: 1,
      verb: "collaporate",
      description: {
        quantity: {
          value: 200,
          title: "TITLE",
        },
        chemical: {
          id: "SOME_ID",
          title: "TITLE",
        },
        tool_1: {
          id: "SOME_ID",
          title: "TITLE",
        },
        tool_2: {
          id: "SOME_ID",
          title: "TITLE",
        },
      },
    },
    {
      order: 2,
      verb: "heeat",
      description: {
        tool_1: {
          id: "SOME_ID",
          title: "TITLE",
        },
        tool_2: {
          id: "SOME_ID",
          title: "TITLE",
        },
        temperature: {
          value: 200,
          title: "TITLE",
        },
      },
    },
    {
      order: 3,
      verb: "insert",
      description: {
        tool_1: {
          id: "SOME_ID",
          title: "TITLE",
        },
        tool_2: {
          id: "SOME_ID",
          title: "TITLE",
        },
      },
    },
    {
      order: 4,
      verb: "pour",
      description: {
        tool_1: {
          id: "SOME_ID",
          title: "TITLE",
        },
        tool_2: {
          id: "SOME_ID",
          title: "TITLE",
        },
      },
    },
    {
      order: 5,
      verb: "weight",
      description: {
        quantity: {
          value: 200,
          title: "TITLE",
        },
        tool_1: {
          id: "SOME_ID",
          title: "TITLE",
        },
        tool_2: {
          id: "SOME_ID",
          title: "TITLE",
        },
      },
    },
    {
      order: 6,
      verb: "near",
      description: {
        tool_1: {
          id: "SOME_ID",
          title: "TITLE",
        },
        tool_2: {
          id: "SOME_ID",
          title: "TITLE",
        },
      },
    },
    {
      order: 7,
      verb: "put",
      description: {
        chemical: {
          id: "SOME_ID",
          title: "TITLE",
        },
        tool_1: {
          id: "SOME_ID",
          title: "TITLE",
        },
      },
    },
  ];

  const [tableData, setTableData] = useState([]);

  const handleStepChange = (e) => {
    const selectedStep = e.target.value;
    const selectedStepDetails = steps.find(
      (step) => step.verb === selectedStep
    );
    if (selectedStepDetails) {
      setTableData([...tableData, selectedStepDetails]);
    }
  };

  const handleDeleteStep = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 py-3">
      <div className="col-12 col-lg-10 px-4 py-5 rounded shadow">
        <h3 className="text-center fw-bold">Choose your steps</h3>
        <div className="d-flex justify-content-between mt-4">
          <select
            id="dropdown"
            className="form-control"
            onChange={handleStepChange}
          >
            <option value="" disabled>
              Select step
            </option>
            {steps.map((step, index) => (
              <option key={index} value={step.verb}>
                {step.verb}
              </option>
            ))}
          </select>
        </div>

        <table className="col-12 table mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Verb</th>
              <th>options</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((step, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{step.verb}</td>
                <td>
                  <VerbOptions step={step} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteStep(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Steps;
