import React from "react";

function Button(props) {
  return (
    <div className="btn">
      <a href={props.value}>{props.name}</a>
    </div>
  );
}

export default Button;
