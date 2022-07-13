import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="Home">
      <Header isWriteNewPage={false} />
      <Content />
    </div>
  );
};

export default Home;
