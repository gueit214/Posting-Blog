import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { DispatchContext } from "../App";
import MyButton from "../components/MyButton";

const WriteNew = () => {
  const navigate = useNavigate();

  // App.js에서 만든 onCreate함수 context로 전달받기
  const { onCreate } = useContext(DispatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  useEffect(() => {
    contentRef.current.focus();
  }, []);

  const handleSubmit = () => {
    if (content.length < 5) {
      contentRef.current.focus();
      return;
    } else {
      if (window.confirm("작성 완료 하셨습니까?")) {
        const date = String(new Date());
        onCreate(date, content);
        navigate("/");
      } else {
        contentRef.current.focus();
        return;
      }
    }
  };

  return (
    <div className="WriteNew">
      <Header isWriteNewPage={true} />
      <section>
        <div className="inner">
          <textarea
            className="board"
            placeholder="내용을 입력해주세요"
            name="text"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            ref={contentRef}
            value={content}
          />
          <MyButton
            onClick={handleSubmit}
            text="작성완료"
            bootstrapClass={"btn btn-outline-success"}
          />
        </div>
      </section>
    </div>
  );
};

export default WriteNew;
