import React from "react";
import "./TodoItem.css";

import TodoHeader from "../TodoHeader/TodoHeader";

class TodoItem extends React.Component {
  state = {
    isLineThrough: false,
  };

  lineThroughHandler = () => {
    this.setState({
      isLineThrough: !this.state.isLineThrough,
    });
  };

  render() {
    return (
      <div onClick={this.lineThroughHandler} className="d-flex justify-content-between align-items-center">
        <TodoHeader
          className={this.state.isLineThrough ? "line-through" : ""}
          content={this.props.content}
        />
        <button
          onClick={() => {
            this.props.deleteTodoItem(this.props.id);
          }}
          className="btn btn-danger"
        >
          Sil
        </button>
      </div>
    );
  }
}

export default TodoItem;
