import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Privacy from "./SignUpPrivacy";

const LogIn = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    id: "",
    pw: "",
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const id_ = "abc";
  const pw_ = "abc";

  const [warningText, setWarningText] = useState("");

  // onLogin
  const onLogin = () => {
    setWarningText("");
    if (state.id === "") {
      idRef.current.focus();
      setWarningText("아이디를 입력해주세요.");
      return;
    }
    if (state.pw === "") {
      pwRef.current.focus();
      setWarningText("비밀번호를 입력해주세요.");
      return;
    }
    if (state.id === "abc" && state.pw === "abc") {
      navigate("/");
    } else {
      setWarningText(
        "아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.입력하신 내용을 다시 확인해주세요."
      );
    }
  };

  const onSignUp = () => {
    navigate("/signupprivacy");
  };

  const idRef = useRef();
  const pwRef = useRef();
  return (
    <div className="LogIn">
      <div className="login-wrap">
        <Header login={true} />
        <ul className="menu-wrap">
          <li className="menu--item">
            <span className="material-symbols-outlined">login</span>ID 로그인
          </li>
          <li className="menu--item">
            <span className="material-symbols-outlined">looks_one</span>일회용
            번호
          </li>
          <li className="menu--item">
            <span className="material-symbols-outlined">qr_code_scanner</span>
            QR코드
          </li>
        </ul>
        <div className="form-wrap">
          <input
            type="text"
            className="form--id"
            value={state.id}
            name="id"
            onChange={handleChangeState}
            placeholder="아이디"
            ref={idRef}
          />
          <input
            type="text"
            className="form--pw"
            value={state.pw}
            name="pw"
            onChange={handleChangeState}
            placeholder="비밀번호"
            ref={pwRef}
          />
        </div>
        <div className="btn-wrap">
          <div className="maintain-login-box">
            <input type="checkbox" name="maintain-login" id="maintain-login" />
            <label htmlFor="maintain-login">로그인 상태 유지</label>
          </div>
          <div className="warning-text">{warningText}</div>
          <button onClick={onLogin} className="btn-login">
            로그인
          </button>
        </div>
      </div>
      <ul className="find-wrap">
        <li>비밀번호 찾기</li>
        <li>아이디 찾기</li>
        <li onClick={onSignUp}>회원 가입</li>
      </ul>
    </div>
  );
};

export default LogIn;
