import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../App";

const ContentEach = () => {
  const { id } = useParams();
  const data = useContext(DataContext);
  console.log({ data });
  const curData = data.find((it) => parseInt(it.Id) === parseInt(id));

  return (
    <div className="ContentEach">
      <div className="inner">
        <div className="container">{curData.content}</div>
      </div>
    </div>
  );
};

export default ContentEach;
