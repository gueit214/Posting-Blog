import React, { useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import WriteNew from "./pages/WriteNew";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      newState = [action.data, ...state];
      break;
    default:
      return state;
  }
  localStorage.setItem("contents", JSON.stringify(newState));
  return newState;
};

// Dispatch(함수들)을 전달하는 context
export const DispatchContext = React.createContext();
// data를 전달하는 context
export const DataContext = React.createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem("contents");
    const contentList = JSON.parse(localData);
    if (localData) {
      dispatch({ type: "INIT", data: contentList });
    }
  }, []);

  const dataId = useRef(3);
  const onCreate = (date, content) => {
    dispatch({
      type: "CREATE",
      data: {
        Id: dataId.current,
        date: new Date(date).getTime(),
        content,
      },
    });
    dataId.current += 1;
  };
  return (
    <DataContext.Provider value={data}>
      <DispatchContext.Provider value={{ onCreate }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="writeNew" element={<WriteNew />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DispatchContext.Provider>
    </DataContext.Provider>
  );
};

export default App;
