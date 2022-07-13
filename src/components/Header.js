import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const Header = ({ isWriteNewPage }) => {
  const navigate = useNavigate();
  return (
    <header className="Header">
      <div className="inner">
        <h1
          className="title"
          onClick={() => {
            navigate("/");
          }}
        >
          PeterPan's Blog
        </h1>
        <MyButton
          text="새 글쓰기"
          onClick={() => {
            if (isWriteNewPage) {
              if (window.confirm("새로운 글을 쓰시겠습니까?")) {
                navigate("/writeNew");
              } else {
                return;
              }
            } else {
              navigate("/writeNew");
            }
          }}
          bootstrapClass={"btn btn-outline-secondary"}
        />
      </div>
    </header>
  );
};

export default Header;
