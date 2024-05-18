/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDrop, useDrag, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import VerbOptions from "./VerbOptions.jsx";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { editExperiment } from "../../../../store/actions/experiment/experimentActions.js";
import { useParams } from "react-router-dom";

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

  const [selectedStepValue, setSelectedStepValue] = useState("selectverb");
  const [steps, setSteps] = useState([]);
  const dispatch = useDispatch();
  const { experimentId } = useParams();

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
    console.log("Selected step", selectedStep);
    if (selectedStep) {
      setSelectedStepValue(selectedStep.title);
      setSteps([
        ...steps,
        {
          verb: selectedStep.title,
          description: createSuitableDescription(selectedStep.title),
        },
      ]);
    }
    setSelectedStepValue("");
  };

  const handleDeleteStep = (index) => {
    const updatedSteps = [...steps];
    updatedSteps.splice(index, 1);
    setSteps(updatedSteps);
  };

  function swapObjects(dragIndex, hoverIndex) {
    const tempSteps = [...steps];

    if (
      dragIndex >= 0 &&
      dragIndex < tempSteps.length &&
      hoverIndex >= 0 &&
      hoverIndex < tempSteps.length
    ) {
      let temp = tempSteps[dragIndex];
      tempSteps[dragIndex] = tempSteps[hoverIndex];
      tempSteps[hoverIndex] = temp;
    } else {
      console.error("Index out of bounds");
    }
    return tempSteps;
  }

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

        if (dragIndex === hoverIndex) {
          return; // Do nothing if dropped onto itself
        }

        const updatedItems = swapObjects(dragIndex, hoverIndex);

        console.log("updatedItems ==============>", updatedItems);

        setItems(updatedItems);
      },
    }));
    return (
      <tr
        ref={(node) => drag(drop(node))}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <td>{index + 1}</td>
        <td>{item.verb}</td>
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

  const validateDescriptions = (mArray) => {
    const errorsArray = [];

    mArray.forEach((element, index) => {
      const { verb, description } = element;
      const { tool1, tool2, quantity, chemical, temperature } = description;

      const checkTool = (tool, toolNumber) => {
        if (
          tool?.id === null ||
          tool?.title === null ||
          tool?.title === "Select an option"
        ) {
          errorsArray.push({
            step: index,
            message: `Step ${index + 1} Tool #${toolNumber} Must Have A Value`,
          });
        }
      };

      const checkQuantity = () => {
        if (quantity?.value === null || quantity?.value === "") {
          errorsArray.push({
            step: index,
            message: `Step ${index + 1} Quantity Must Have A Value`,
          });
        }
      };

      const checkChemical = () => {
        if (
          chemical?.id === null ||
          chemical?.title === null ||
          chemical?.title === "Select an option"
        ) {
          errorsArray.push({
            step: index,
            message: `Step ${index + 1} Chemical Must Have A Value`,
          });
        }
      };

      const checkTemperature = () => {
        if (temperature?.value === null || temperature?.value === "") {
          errorsArray.push({
            step: index,
            message: `Step ${index + 1} Temperature Must Have A Value`,
          });
        }
      };

      switch (verb) {
        case "fix":
        case "pour":
        case "near":
        case "insert":
          checkTool(tool1, 1);
          checkTool(tool2, 2);
          break;

        case "put":
          checkChemical();
          checkTool(tool1, 1);
          break;

        case "weight":
        case "collaporate":
          checkQuantity();
          checkChemical();
          checkTool(tool1, 1);
          checkTool(tool2, 2);
          if (verb === "collaporate") checkChemical();
          break;

        case "heat":
          checkTemperature();
          checkTool(tool1, 1);
          checkTool(tool2, 2);

          break;

        case "remove":
          checkTool(tool1, 1);
          break;

        default:
          break;
      }
    });

    return errorsArray;
  };

  const handelEditSteps = () => {
    if (steps.length === 0) {
      toast.error(`steps is required`);
    }

    if (validateDescriptions(steps) && validateDescriptions(steps).length > 0) {
      validateDescriptions(steps).forEach((error) => {
        toast.error(error.message);
      });
    } else {
      console.log(experimentId);
      console.log(steps);
      dispatch(editExperiment(experimentId, { steps: steps }, toast));
    }
  };
  return (
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
        <DndProvider backend={HTML5Backend}>
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
              {steps?.map((step, index) => {
                console.log(step);
                return (
                  <Item
                    key={index}
                    item={step}
                    index={index}
                    items={steps}
                    setItems={setSteps}
                  />
                );
              })}
            </tbody>
          </table>
        </DndProvider>
        <button className="btn active mt-4" onClick={handelEditSteps}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Steps;
