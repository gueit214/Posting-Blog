import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { DataContext } from "../App";
import MyButton from "../components/MyButton";

const ContentView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useContext(DataContext);
  const [state, setState] = useState("");

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    if (data.length >= 1) {
      const curData = data.find((it) => parseInt(it.Id) === parseInt(id));
      if (curData) {
        setState(curData);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, data]);

  // console.log(curData.content);
  return (
    <div className="ContentView">
      <Header isWriteNewPage={true} />
      <section>
        <span className="container">{state.content}</span>
        <span className="date">
          {new Date(parseInt(state.date)).toLocaleDateString()}
        </span>
        <MyButton
          text="수정하기"
          onClick={handleEdit}
          bootstrapClass={"btn__edit btn btn-outline-warning"}
        />
      </section>
    </div>
  );
};

export default ContentView;
