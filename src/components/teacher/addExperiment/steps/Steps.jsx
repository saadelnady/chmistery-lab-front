/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDrop, useDrag, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import VerbOptions from "./VerbOptions.jsx";
import update from "immutability-helper";

const Steps = () => {
  const verbs = [
    {
      title: "fix",
    },
    {
      title: "insert",
    },
    {
      title: "pour",
    },
    {
      title: "near",
    },
    {
      title: "collaporate",
    },
    {
      title: "heat",
    },
    {
      title: "weight",
    },
    {
      title: "put",
    },
    {
      title: "remove",
    },
  ];

  const [tableData, setTableData] = useState([]);
  const [selectedStepValue, setSelectedStepValue] = useState("selectverb");
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    console.log("currentSteps: ---------------->", steps);
  }, [JSON.stringify(steps)]);

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

      case "collaporate":
        suitableDescription = {
          quantity: { value: null },
          chemical: { id: null, title: null },
          tool1: { id: null, title: null },
          tool2: { id: null, title: null },
        };
        break;

      case "heat":
        suitableDescription = {
          tool1: { id: null, title: null },
          tool2: { id: null, title: null },
          temperature: { value: null },
        };
        break;

      case "weight":
        suitableDescription = {
          quantity: { value: null },
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
      case "remove":
        suitableDescription = {
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
    if (selectedStep) {
      const newTableData = [...tableData, selectedStep];
      setTableData(newTableData);
      setSelectedStepValue(selectedStep.title);
      setSteps([
        ...steps,
        {
          verb: selectedStep.title,
          description: createSuitableDescription(selectedStep.title),
          order: steps.length,
        },
      ]);
    }
    setSelectedStepValue("");
  };

  const handleDeleteStep = (index) => {
    const updatedData = [...tableData];
    const updatedSteps = [...steps];
    updatedData.splice(index, 1);
    updatedSteps.splice(index, 1);
    setTableData(updatedData);
    setSteps(updatedSteps);
  };

  // const swapSteps = (index1, index2) => {
  //   const clonedSteps = [...steps];
  //   const stepOne = { ...steps[index1] };
  //   const stepTwo = { ...steps[index2] };
  //   let finalSteps = [];
  //   clonedSteps.map((element, index) => {
  //     if (index1 === index) {
  //       return finalSteps.push(stepTwo);
  //     }
  //     if (index2 === index) {
  //       return finalSteps.push(stepOne);
  //     }
  //     return finalSteps.push(element);
  //   });
  //   setSteps([...finalSteps]);
  // };

  const Item = ({ item, index, items, setItems }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "DRAGGABLE_ITEM",
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    const [, drop] = useDrop(() => ({
      accept: "DRAGGABLE_ITEM",
      drop: (droppedItem) => {
        const dragIndex = droppedItem.index;
        const hoverIndex = index;
        console.log("dragIndex ==============>", dragIndex);
        console.log("hoverIndex ==============>", hoverIndex);
        console.log("droppedItem ==============>", droppedItem);
        if (dragIndex === hoverIndex) {
          return; // Do nothing if dropped onto itself
        }

        // Reorder items in the list
        const updatedItems = update(items, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, droppedItem.index],
          ],
        });

        // Update state with the reordered items
        setItems(updatedItems);
      },
    }));
    return (
      <tr
        ref={(node) => drag(drop(node))}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
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

          <select
            id="dropdown"
            className="form-control my-3"
            value={selectedStepValue}
            onChange={handleStepChange}
          >
            <option>select verb</option>
            {verbs.map((verb, index) => (
              <option key={index} value={verb.title}>
                {verb.title}
              </option>
            ))}
          </select>

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
                <Item
                  key={index}
                  item={step}
                  index={index}
                  items={tableData}
                  setItems={setTableData}
                />
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
