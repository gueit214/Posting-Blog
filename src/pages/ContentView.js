import React, { useContext } from "react";
import ContentEach from "../components/ContentEach";
import Header from "../components/Header";

const ContentView = () => {
  return (
    <div>
      <Header isWriteNewPage={true} />
      <ContentEach />
    </div>
  );
};

export default ContentView;
