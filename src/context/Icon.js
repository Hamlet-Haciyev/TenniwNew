import React from "react";
import { IconContext } from "react-icons";

const Icon = ({ size, children,color }) => {
  return (
    <IconContext.Provider value={{ size: size }}>
      {children}
    </IconContext.Provider>
  );
};

export default Icon;
