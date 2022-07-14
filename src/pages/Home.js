import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import Test from "../components/Test";

const Home = () => {
  return (
    <div className="Home">
      <Header isWriteNewPage={false} />
      <Content />
      <Test />
    </div>
  );
};

export default Home;
