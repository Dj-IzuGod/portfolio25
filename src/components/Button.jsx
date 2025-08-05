import React from "react";

function Button(props) {
  return (
    // Button component
    <div className={props.class}>
      <a href={props.value}>{props.name}</a>
    </div>
  );
}

export default Button;
