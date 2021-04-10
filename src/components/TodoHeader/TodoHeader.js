import React from "react";
import "./TodoHeader.css";

const TodoHeader = (props) => {
  return <h5 {...props} >{props.content}</h5>;
};

export default TodoHeader;
