import React, { useContext } from "react";
import { DataContext } from "../App";

const ContentEach = ({ id }) => {
  const data = useContext(DataContext);
  const curData = data.find((it) => parseInt(it.Id) === parseInt(id));

  return (
    <div className="ContentEach">
      <div className="inner">
        <span className="container">{curData.content}</span>
        <span className="date">
          {new Date(parseInt(curData.date)).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default ContentEach;
