import React from "react";

const MyButton = ({ onClick, text, bootstrapClass = "" }) => {
  return (
    <button className={bootstrapClass} onClick={onClick} type="button">
      {text}
    </button>
  );
};

export default MyButton;
