import React, { useRef, useEffect } from "react";

const LevelBar = ({ min, max, width }) => {
  const level = useRef(null);
  useEffect(() => {
    Array.from(level.current.children).map((child) => {
      if (child.textContent == min || child.textContent == max) {
        child.children[0].style.display = "flex";
      } else {
        child.children[0].style.display = "none";
      }
      if (
        !(
          parseInt(child.textContent) >= min &&
          parseInt(child.textContent) <= max
        )
      ) {
        child.style.background = "#D3D3D3";
      }
    });
  }, [min, max]);
  return (
    <div className="flex items-center justify-between w-full" ref={level}>
      <div
        className={`w-${
          width ? width : 5
        } h-[6.5px] rounded-l-md bg-[#0066FF] mx-[2px] relative`}
      >
        <span className="absolute bottom-2 left-1">1</span>
      </div>
      <div
        className={`w-${
          width ? width : 5
        } h-[6.5px] bg-[#0066FF] mx-[2px] relative`}
      >
        <span className="absolute bottom-2 left-1">2</span>
      </div>
      <div
        className={`w-${
          width ? width : 5
        } h-[6.5px] bg-[#33C148] mx-[2px] relative`}
      >
        <span className="absolute bottom-2 left-1">3</span>
      </div>
      <div
        className={`w-${
          width ? width : 5
        } h-[6.5px] bg-[#33C148] mx-[2px] relative`}
      >
        <span className="absolute bottom-2 left-1">4</span>
      </div>
      <div
        className={`w-${
          width ? width : 5
        } h-[6.5px] bg-[#FEE827] mx-[2px] relative`}
      >
        <span className="absolute bottom-2 left-1">5</span>
      </div>
      <div
        className={`w-${
          width ? width : 5
        } h-[6.5px] bg-[#FEE827] mx-[2px] relative`}
      >
        <span className="absolute bottom-2 left-1">6</span>
      </div>
      <div
        className={`w-${
          width ? width : 5
        } h-[6.5px] bg-[#E8993C] mx-[2px] relative`}
      >
        <span className="absolute bottom-2 left-1">7</span>
      </div>
      <div
        className={`w-${
          width ? width : 5
        } h-[6.5px] bg-[#E8993C] mx-[2px] relative`}
      >
        <span className="absolute bottom-2 left-1">8</span>
      </div>
      <div
        className={`w-${
          width ? width : 5
        } h-[6.5px] bg-[#DF5555] mx-[2px] relative`}
      >
        <span className="absolute bottom-2 left-1">9</span>
      </div>
      <div
        className={`w-${
          width ? width : 5
        } h-[6.5px] rounded-r-md bg-[#DF5555] mx-[2px] relative`}
      >
        <span className="absolute bottom-2 left-1">10</span>
      </div>
    </div>
  );
};
export default LevelBar;
