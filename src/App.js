import React, { useEffect, useMemo, useReducer, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import ContentView from "./pages/ContentView";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import LogIn from "./pages/login-pages/LogIn";
import SignUpForm from "./pages/login-pages/SignUpForm";
import SignUpPrivacy from "./pages/login-pages/SignUpPrivacy";
import WriteNew from "./pages/WriteNew";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      newState = [action.data, ...state];
      break;
    case "DELETE":
      newState = state.filter((it) => it.Id !== action.targetId);
      break;
    case "EDIT":
      newState = state.map((it) =>
        it.Id === action.data.id ? { ...action.data } : it
      );
      break;
    default:
      return state;
  }
  localStorage.setItem("contents", JSON.stringify(newState));
  return newState;
};

const reducer__log = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "LOGIN":
      return;
  }
};

// Dispatch(함수들)을 전달하는 context
export const DispatchContext = React.createContext();
// data를 전달하는 context
export const DataContext = React.createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem("contents");
    if (localData) {
      const contentList = JSON.parse(localData);
      if (contentList.length >= 1) {
        // 새로고침해도 Id이어서 생성할 수 있게
        dataId.current = parseInt(contentList[0].Id) + 1;
      }
      dispatch({ type: "INIT", data: contentList });
    }
  }, []);

  const dataId = useRef(1);
  // CREATE
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
  // DELETE
  const onDelete = (targetId) => {
    dispatch({ type: "DELETE", targetId });
  };
  // EDIT
  const onEdit = (targetId, date, content) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
      },
    });
  };
  // LOGIN
  const onLogin = () => {
    dispatch({
      type: "LOGIN",
      data: {},
    });
  };

  return (
    <DataContext.Provider value={data}>
      <DispatchContext.Provider value={{ onCreate, onDelete, onEdit, onLogin }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="writeNew" element={<WriteNew />} />
              <Route path="contentview/:id" element={<ContentView />} />
              <Route path="edit/:id" element={<Edit />} />
              <Route path="login" element={<LogIn />} />
              <Route path="signupprivacy" element={<SignUpPrivacy />} />
              <Route path="signupform" element={<SignUpForm />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DispatchContext.Provider>
    </DataContext.Provider>
  );
};

export default App;
