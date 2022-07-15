import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { DataContext } from "../App";

const ContentView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useContext(DataContext);
  const [state, setState] = useState("");

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
    <div>
      <Header isWriteNewPage={true} />
      <div className="inner">
        <span className="container">{state.content}</span>
        <span className="date">
          {new Date(parseInt(state.date)).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default ContentView;
