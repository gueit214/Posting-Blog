import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    pwCheck: "",
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDate: "",
    email: "",
  });
  const handleInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [warningText, setWarningText] = useState({
    id: "",
    pw: "",
    pwCheck: "",
  });

  const handleSubmit = () => {
    if (inputs.id.match(/\w{5,20}/g) === null) {
      setWarningText({
        id: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
        pw: "",
        pwCheck: "",
      });
    } else if (inputs.pw == 3) {
      setWarningText({
        id: "",
        pw: "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.",
        pwCheck: "",
      });
    } else if (inputs.pw !== inputs.pwCheck) {
      setWarningText({
        id: "",
        pw: "",
        pwCheck: "비밀번호가 일치하지 않습니다.",
      });
    } else {
      setWarningText({
        id: "",
        pw: "",
        pwCheck: "",
      });
      if (
        window.confirm("가입 후 아이디는 수정 불가능합니다. 가입하시겠습니까?")
      ) {
        localStorage.setItem("storage", JSON.stringify(inputs));
        // console.log(JSON.parse(localStorage.getItem("storage")));
        navigate("/");
      }
    }
  };

  return (
    <div className="SignUpForm">
      <Header login={true} />
      <section>
        <label>
          <p>아이디</p>
          <input
            type="text"
            value={inputs.id}
            name="id"
            onChange={handleInput}
          />
        </label>
        <span className="warning-text">{warningText.id}</span>
        <label>
          비밀번호
          <input
            type="text"
            value={inputs.pw}
            name="pw"
            onChange={handleInput}
          />
        </label>
        <span className="warning-text">{warningText.pw}</span>
        <label>
          비밀번호 재확인
          <input
            type="text"
            value={inputs.pwCheck}
            name="pwCheck"
            onChange={handleInput}
          />
        </label>
        <span className="warning-text">{warningText.pwCheck}</span>
        <label>
          이름
          <input />
        </label>
        <label className="birth">
          생년월일
          <div>
            <input placeholder="년(4자)" maxLength="4" />
            <select>
              <option>월</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <input placeholder="일" maxLength="2" />
          </div>
        </label>
        <label>
          성별
          <div>
            <select>
              <option>성별</option>
              <option>남자</option>
              <option>여자</option>
              <option>선택안함</option>
            </select>
          </div>
        </label>
        <label>
          본인 확인 이메일<span className="blur-text">(선택)</span>
          <input
            type="text"
            value={inputs.email}
            name="email"
            onChange={handleInput}
          />
        </label>
        <label>
          <button
            className="btn-submit btn btn-outline-success"
            onClick={handleSubmit}
          >
            가입하기
          </button>
        </label>
      </section>
    </div>
  );
};

export default SignUpForm;
