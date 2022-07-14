import React from "react";

const Students = ({ name }) => {
  return (
    <div>
      <span>{name}</span>
      <button>삭제</button>
    </div>
  );
};

export default Students;
