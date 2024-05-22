import { useEffect, useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import {
  setToolDimensions,
  setToolPosition,
} from "../../../../store/actions/experiment/experimentActionsCreators";

const DraggableImage = ({ src, index }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: { src, offset: { x: 0, y: 0 } },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const divRef = useRef(null);
  const [parentRect, setParentRect] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });

      // Get parent div's bounding rect
      const parentElement = divRef.current.parentElement;
      const parentRect = parentElement.getBoundingClientRect();
      setParentRect(parentRect);
    }
  }, []);

  useEffect(() => {
    const divElement = divRef.current;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      dispatch(setToolDimensions(index, width, height));
      dispatch(
        setToolPosition(
          index,
          divRef.current.style.left,
          divRef.current.style.top
        )
      );
    });

    observer.observe(divElement);

    return () => {
      observer.unobserve(divElement);
    };
  }, [dispatch, index]);

  const handleDragStart = (e) => {
    e.stopPropagation(); // Stop event bubbling
    e.dataTransfer.setData("text/plain", ""); // Necessary for drag to work
  };

  const handleDrag = (e) => {
    if (!parentRect) return; // Return if parentRect is not set yet

    const offsetX = e.clientX - dimensions.width / 2; // Adjust position to center the element
    const offsetY = e.clientY - dimensions.height / 2; // Adjust position to center the element

    // Apply constraints to the element's position
    let newLeft = Math.min(
      Math.max(offsetX, parentRect.left),
      parentRect.right - dimensions.width
    );
    let newTop = Math.min(
      Math.max(offsetY, parentRect.top),
      parentRect.bottom - dimensions.height
    );

    divRef.current.style.left = `${newLeft - parentRect.left}px`;
    divRef.current.style.top = `${newTop - parentRect.top}px`;
    console.log("divRef.current.style.left--->", divRef.current.style.left);
    dispatch(setToolPosition(index, newLeft, newTop));
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
        opacity: isDragging ? 0.5 : 1,
        width: "100px",
        height: "100px",
        left: 0,
        top: 0,
        resize: "both",
        overflow: "auto",
      }}
      draggable // Make the div draggable
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
