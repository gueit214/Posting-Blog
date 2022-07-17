import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext, DispatchContext } from "../App";
import Header from "../components/Header";
import MyButton from "../components/MyButton";

const Edit = () => {
  const { onEdit } = useContext(DispatchContext);
  const { id } = useParams();
  const data = useContext(DataContext);
  const refText = useRef();
  const navigate = useNavigate();

  const targetData = data.find((it) => parseInt(it.Id) === parseInt(id));

  const [text, setText] = useState(targetData.content);

  const handleEdit = () => {
    if (window.confirm("정말 수정하시겠습니까?")) {
      onEdit(parseInt(targetData.id), targetData.date, text);
      navigate("/");
    } else {
      refText.current.focus();
    }
  };

  return (
    <div className="Edit">
      <Header isWriteNewPage={false} />
      <section>
        <textarea
          className="board"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          ref={refText}
        />
        <MyButton
          onClick={handleEdit}
          text="수정 완료"
          bootstrapClass="btn__edit btn btn-outline-success"
        />
      </section>
    </div>
  );
};

export default Edit;
