import { useRef, useState } from "react";

import { useDrag, useDrop, DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";
import VerbOptions from "./VerbOptions.jsx";

const Steps = () => {
  const steps = [
    {
      order: 0,
      verb: "fix",
      description: {
        tool_1: {
          id: "",
          title: "",
        },
        tool_2: {
          id: "",
          title: "",
        },
      },
    },
    {
      order: 1,
      verb: "collaporate",
      description: {
        quantity: {
          value: "",
          title: "",
        },
        chemical: {
          id: "",
          title: "",
        },
        tool_1: {
          id: "",
          title: "",
        },
        tool_2: {
          id: "",
          title: "",
        },
      },
    },
    {
      order: 2,
      verb: "heat",
      description: {
        tool_1: {
          id: "",
          title: "",
        },
        tool_2: {
          id: "",
          title: "",
        },
        temperature: {
          value: "",
          title: "",
        },
      },
    },
    {
      order: 3,
      verb: "insert",
      description: {
        tool_1: {
          id: "",
          title: "",
        },
        tool_2: {
          id: "",
          title: "",
        },
      },
    },
    {
      order: 4,
      verb: "pour",
      description: {
        tool_1: {
          id: "",
          title: "",
        },
        tool_2: {
          id: "",
          title: "",
        },
      },
    },
    {
      order: 5,
      verb: "weight",
      description: {
        quantity: {
          value: "",
          title: "",
        },
        tool_1: {
          id: "",
          title: "",
        },
        tool_2: {
          id: "",
          title: "",
        },
      },
    },
    {
      order: 6,
      verb: "near",
      description: {
        tool_1: {
          id: "",
          title: "",
        },
        tool_2: {
          id: "",
          title: "",
        },
      },
    },
    {
      order: 7,
      verb: "put",
      description: {
        chemical: {
          id: "",
          title: "",
        },
        tool_1: {
          id: "",
          title: "",
        },
      },
    },
    {
      order: 7,
      verb: "remove",
      description: {
        tool: {
          id: "",
          title: "",
        },
      },
    },
  ];

  const [tableData, setTableData] = useState([]);
  const selectRef = useRef();
  console.log("tableData ===>", tableData);
  const handleStepChange = (e) => {
    const selectedStep = steps.find((step) => step.verb === e.target.value);
    const newTableData = [...tableData, selectedStep];
    setTableData(newTableData);
    selectRef.current.value = "";
  };

  const handleDeleteStep = (index) => {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  };
  const moveItem = (dragIndex, hoverIndex) => {
    const updatedData = [...tableData];
    const dragItem = updatedData[dragIndex];
    updatedData.splice(dragIndex, 1);
    updatedData.splice(hoverIndex, 0, dragItem);
    setTableData(updatedData);
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
        <td>{item.verb}</td>
        <td>
          <VerbOptions step={item} />
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
              <option value="" disabled>
                Select step
              </option>
              {steps.map((step) => (
                <option key={step.order} value={step.verb}>
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
                <Item key={step.order} item={step} index={index} />
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
