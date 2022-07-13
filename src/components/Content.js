import React, { useContext } from "react";
import { DataContext } from "../App.js";
import ContentItem from "./ContentItem.js";

const Content = () => {
  const data = useContext(DataContext);
  return (
    <div className="Content">
      <div className="inner">
        {data.map((it) => (
          <ContentItem key={it.Id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default Content;
