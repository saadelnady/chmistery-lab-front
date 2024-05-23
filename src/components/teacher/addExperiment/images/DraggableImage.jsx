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

      const parentElement = divRef.current.parentElement;
      const parentRect = parentElement.getBoundingClientRect();
      setParentRect(parentRect);

      dispatch(setToolDimensions(index, rect.width, rect.height));
      dispatch(setToolPosition(index, rect.left, rect.top));
    }
  }, [dispatch, index]);

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

  const handleDrag = (e) => {
    if (!parentRect) return;

    const offsetX = e.clientX - dimensions.width / 2;
    const offsetY = e.clientY - dimensions.height / 2;

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
        opacity: isDragging ? 0.5 : 1,
        width: "100px",
        height: "100px",
        left: 0,
        top: 0,
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
