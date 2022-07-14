import React, { useContext } from "react";
import MyButton from "./MyButton";
import { DispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const ContentItem = ({ Id, date, content }) => {
  const navigate = useNavigate();

  const { onDelete } = useContext(DispatchContext);
  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(Id);
    }
  };

  const gotoContent = () => {
    navigate(`/contentview/${Id}`);
  };

  return (
    <div className="ContentItem" onClick={gotoContent}>
      <div className="ID">{Id}번째</div>
      <div className="date">
        {new Date(parseInt(date)).toLocaleDateString()}
      </div>
      <div className="content">{content}</div>
      <MyButton
        text="삭제하기"
        onClick={handleDelete}
        bootstrapClass={"btn btn-outline-danger"}
      />
    </div>
  );
};

export default ContentItem;
