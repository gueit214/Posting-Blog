import React, { useContext } from "react";
import MyButton from "./MyButton";
import { DispatchContext } from "../App";

const ContentItem = ({ Id, date, content }) => {
  const { onDelete } = useContext(DispatchContext);
  console.log(onDelete);

  return (
    <div className="ContentItem">
      <div className="ID">{Id}번째</div>
      <div className="date">
        {new Date(parseInt(date)).toLocaleDateString()}
      </div>
      <div className="content">{content}</div>
      <MyButton
        text="삭제하기"
        onClick={onDelete}
        bootstrapClass={"btn btn-outline-danger"}
      />
    </div>
  );
};

export default ContentItem;
