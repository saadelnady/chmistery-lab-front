import { useEffect, useRef, useState } from "react";

import { useDrag, useDrop, DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";
import VerbOptions from "./VerbOptions.jsx";

const Steps = () => {
  const verbs = [
    {
      title: "fix",
    },
    {
      title: "collaporate",
    },
    {
      title: "heat",
    },
    {
      title: "insert",
    },
    {
      title: "pour",
    },
    {
      title: "weight",
    },
    {
      title: "near",
    },
    {
      title: "put",
    },
    {
      title: "remove",
    },
  ];

  const [tableData, setTableData] = useState([]);
  const [steps, setSteps] = useState([]);
  const [description, setDescription] = useState({});
  const selectRef = useRef();
  useEffect(() => {
    console.log("currentSteps: ---------------->", steps);
  }, [steps]);
  const createSuitableDescription = (verb) => {
    let suitableDescription = {};

    switch (verb) {
      case "fix":
      case "insert":
      case "pour":
      case "near":
        suitableDescription = {
          tool1: { id: null, title: null },
          tool2: { id: null, title: null },
        };
        break;

      case "collaborate":
        suitableDescription = {
          quantity: { value: null, title: null },
          chemical: { id: null, title: null },
          tool1: { id: null, title: null },
          tool2: { id: null, title: null },
        };
        break;

      case "heat":
        suitableDescription = {
          tool1: { id: null, title: null },
          tool2: { id: null, title: null },
          temperature: { value: null, title: null },
        };
        break;

      case "weigh":
        suitableDescription = {
          quantity: { value: null, title: null },
          tool1: { id: null, title: null },
          tool2: { id: null, title: null },
        };
        break;

      case "put":
        suitableDescription = {
          chemical: { id: null, title: null },
          tool1: { id: null, title: null },
        };
        break;

      default:
        break;
    }

    return suitableDescription;
  };

  const handleStepChange = (e) => {
    const selectedStep = verbs.find((verb) => verb.title === e.target.value);
    const newTableData = [...tableData, selectedStep];

    setTableData(newTableData);
    setSteps([
      ...steps,
      {
        verb: selectedStep.title,
        description: createSuitableDescription(selectedStep.title),
        order: steps.length,
      },
    ]);
    selectRef.current.value = "";
  };

  const handleDeleteStep = (index) => {
    const updatedData = [...tableData];
    const updatedSteps = [...steps];
    updatedData.splice(index, 1);
    updatedSteps.splice(index, 1);
    setTableData(updatedData);
    setSteps(updatedSteps);
  };
  const moveItem = (dragIndex, hoverIndex) => {
    const updatedData = [...tableData];
    const dragItem = updatedData[dragIndex];
    updatedData.splice(dragIndex, 1);
    updatedData.splice(hoverIndex, 0, dragItem);
    setTableData(updatedData);
    setSteps(updatedData);
  };
  const Item = ({ item, index }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
      accept: "STEP",
      hover(item, monitor) {
        if (!ref.current) {
          return;
        }

        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveItem(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });

    const [{ isDragging }, drag] = useDrag({
      type: "STEP",
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const opacity = isDragging ? 0.5 : 1;

    drag(drop(ref));

    return (
      <tr ref={ref} style={{ opacity }}>
        <td>{index + 1}</td>
        <td>{item.title}</td>
        <td>
          <VerbOptions
            index={index}
            step={item}
            steps={steps}
            setSteps={setSteps}
          />
        </td>
        <td>
          <i
            className="bi bi-trash3-fill fs-3 cursor-pointer"
            onClick={() => handleDeleteStep(index)}
          ></i>
        </td>
      </tr>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="d-flex justify-content-center align-items-center mt-3 py-3">
        <div className="col-12 col-lg-10 px-4 py-5 rounded shadow">
          <h3 className="text-center fw-bold">Choose your steps</h3>
          <div className="d-flex justify-content-between mt-4">
            <select
              ref={selectRef}
              id="dropdown"
              className="form-control"
              onChange={handleStepChange}
            >
              <option disabled>select verb</option>
              {verbs.map((verb) => (
                <option key={verb.order} value={verb.title}>
                  {verb.title}
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
                <Item key={index} item={step} index={index} />
              ))}
            </tbody>
          </table>
          <button className="btn active mt-4">Edit</button>
        </div>
      </div>
    </DndProvider>
  );
};

export default Steps;
