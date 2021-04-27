import React from "react";
import "./InputOption.css";

function InputOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
      <Icon className="inputOption__icon" style={{ color: color }} />
      <h5 className="headerOption__title">{title} </h5>
    </div>
  );
}

export default InputOption;
