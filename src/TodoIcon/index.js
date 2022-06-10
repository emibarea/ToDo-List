import React from "react";
import "./Icon.css";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
const iconTypes = {
  check: (color) => (
    <AiOutlineCheck className="Icon-svg Icon-svg--check" fill={color} />
  ),
  delete: (color) => (
    <AiOutlineDelete className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};
function TodoIcon({ type, color = "gray", onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}
export { TodoIcon };
