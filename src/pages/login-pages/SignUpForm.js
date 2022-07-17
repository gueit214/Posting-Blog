import React, { useState } from "react";
import Header from "../../components/Header";

const SignUpForm = () => {
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

  console.log(inputs);
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
        <span className="warning-text">{}</span>
        <label>
          비밀번호
          <input
            type="text"
            value={inputs.pw}
            name="pw"
            onChange={handleInput}
          />
        </label>
        <label>
          비밀번호 재확인
          <input
            type="text"
            value={inputs.pwCheck}
            name="pwCheck"
            onChange={handleInput}
          />
        </label>
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
      </section>
    </div>
  );
};

export default SignUpForm;
