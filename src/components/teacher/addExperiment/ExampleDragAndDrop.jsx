import { useCallback, useRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Table } from "antd";
import update from "immutability-helper";

const type = "DraggableBodyRow";
const DraggableBodyRow = ({
  index,
  moveRow,
  className,
  style,
  ...restProps
}) => {
  const ref = useRef();
  const [{ isOver, dropClassName }, drop] = useDrop(
    () => ({
      accept: type,
      collect: (monitor) => {
        const { index: dragIndex } = monitor.getItem() || {};
        if (dragIndex === index) {
          return {};
        }
        return {
          isOver: monitor.isOver(),
          dropClassName:
            dragIndex < index ? "drop-over-downTward" : "drop-over-upward",
        };
      },
      drop: (item) => {
        moveRow(item.index, index);
      },
    }),
    [index]
  );
  const [, drag] = useDrag(() => ({
    type,
    item: { index },
    collect: (monitor) => {
      isDragging: monitor.isDragging();
    },
  }));
  drop(drag(ref));
  return (
    <tr
      ref={ref}
      className={`${className} ${isOver ? dropClassName : ""}`}
      style={{ cursor: "move", ...style }}
      {...restProps}
    ></tr>
  );
};
const columns = [
  {
    title: "name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "address",
    dataIndex: "address",
    key: "address",
  },
];
const ExampleDragAndDrop = () => {
  const [data, setData] = useState([
    { key: 1, name: "saad", age: "27", address: "mansoura" },
    { key: 2, name: "mohamed", age: "30", address: "egypt" },
    { key: 3, name: "Card 3", age: "35", address: "elmonofia" },
  ]);
  const components = {
    body: { row: DraggableBodyRow },
  };
  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = data[dragIndex];
      setData(
        update(data, { $splice: [[(dragIndex, 1)], [hoverIndex, 0, dragRow]] })
      );
    },
    [data]
  );
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <Table
          columns={columns}
          dataSource={data}
          components={components}
          onRow={(record, index) => ({ index, moveRow })}
        ></Table>
      </div>
    </DndProvider>
  );
};

export default ExampleDragAndDrop;
