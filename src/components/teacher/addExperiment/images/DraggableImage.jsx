import { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  setToolDimensions,
  setToolPosition,
} from "../../../../store/actions/experiment/experimentActionsCreators";

const DraggableImage = ({ src, index, tool, parentRef }) => {
  const { experiment } = useSelector((state) => state.experimentReducer);
  const { tools } = experiment.images;

  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: { src, offset: { x: 0, y: 0 } },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const divRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();

      dispatch(setToolDimensions(index, rect.width, rect.height));
      dispatch(
        setToolPosition(
          index,
          tools[index]?.position?.x || 0,
          tools[index]?.position?.y || 0
        )
      );
    }
  }, [index]);

  useEffect(() => {
    const divElement = divRef.current;
    if (!divElement) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      dispatch(setToolDimensions(index, width, height));
      const computedStyle = getComputedStyle(divElement);
      const left = parseInt(computedStyle.left, 10);
      const top = parseInt(computedStyle.top, 10);
      dispatch(setToolPosition(index, left, top));
    });

    observer.observe(divElement);

    return () => {
      observer.unobserve(divElement);
    };
  }, [dispatch, index, divRef]);

  const handleDragStart = (e) => {
    e.stopPropagation();
    e.dataTransfer.setData("text/plain", "");
  };

  const handleDrag = (event) => {
    event.preventDefault();

    const parentRect = parentRef.current.getBoundingClientRect();
    const draggableRect = event.target.getBoundingClientRect();

    let newLeft = event.clientX - draggableRect.width / 2;
    let newTop = event.clientY - draggableRect.height / 2;

    if (newLeft < parentRect.left) {
      newLeft = parentRect.left;
    } else if (newLeft + draggableRect.width > parentRect.right) {
      newLeft = parentRect.right - draggableRect.width;
    }

    if (newTop < parentRect.top) {
      newTop = parentRect.top;
    } else if (newTop + draggableRect.height > parentRect.bottom) {
      newTop = parentRect.bottom - draggableRect.height;
    }

    event.target.style.left = `${newLeft - parentRect.left}px`;
    event.target.style.top = `${newTop - parentRect.top}px`;
    divRef.current.style.left = `${newLeft - parentRect.left}px`;
    divRef.current.style.top = `${newTop - parentRect.top}px`;

    dispatch(
      setToolPosition(index, newLeft - parentRect.left, newTop - parentRect.top)
    );
  };

  return (
    <div
      ref={divRef}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      style={{
        cursor: "move",
        position: "absolute",
        zIndex: 100,
        width: tool?.dimensions?.width || "100px",
        height: tool?.dimensions?.height || "100px",
        left: tool?.position?.x || 0,
        top: tool?.position?.y || 0,
        resize: "both",
        overflow: "auto",
      }}
      draggable
    >
      <img
        src={src}
        alt=""
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default DraggableImage;
