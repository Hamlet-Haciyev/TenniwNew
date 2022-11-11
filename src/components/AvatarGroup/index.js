import React from "react";
import { Avatar as AntAvatar } from "antd";
export const AvatarGroup = ({ children }) => {
  return (
    <AntAvatar.Group>
      {React.Children.map(children, (child, index) => {
        return child;
      })}
    </AntAvatar.Group>
  );
};
