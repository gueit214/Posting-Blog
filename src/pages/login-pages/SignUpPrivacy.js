import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import MyButton from "../../components/MyButton";

const SignUpPrivacy = () => {
  const navigate = useNavigate();
  const list = [
    {
      id: 0,
      index: "1",
      content:
        "네이버 이용약관, 개인정보 수집 및 이용, 위치기반서비스 이용약관(선택), 프로모션 정보 수신(선택)에 모두 동의합니다.",
    },
    { id: 1, index: "2", content: "네이버 이용약관 동의(필수)" },
    { id: 2, index: "3", content: "개인정보 수집 및 이용 동의(필수)" },
    { id: 3, index: "4", content: "위치기반서비스 이용약관 동의(선택)" },
    { id: 4, index: "5", content: "프로모션 정보 수신 동의(선택)" },
  ];

  const [checkedList, setCheckedList] = useState([]);
  const handleCheckbox = (checked, value) => {
    if (value === "1") {
      if (checked) {
        setCheckedList(["1", "2", "3", "4", "5"]);
      } else {
        setCheckedList([]);
      }
      return;
    }
    if (checked) {
      setCheckedList([...checkedList, value]);
    } else {
      setCheckedList(checkedList.filter((el) => el !== value));
    }
  };
  console.log(checkedList);
  const [alertMsg, setAlertMsg] = useState("");
  const handleccbtn = () => {
    navigate("/");
  };
  const handleokbtn = () => {
    if (checkedList.includes("2") && checkedList.includes("3")) {
      navigate("/signupform");
    } else {
      setAlertMsg(
        "이용약관과 개인정보 수집 및 이용에 대한 안내 모두 동의해주세요."
      );
    }
  };

  return (
    <div className="SignUpPrivacy">
      <Header login={true} />
      <section className="check-wrap">
        {list.map((it) => {
          return (
            <label key={it.id}>
              <input
                type="checkbox"
                value={it.index}
                onChange={(e) => {
                  handleCheckbox(e.target.checked, e.target.value);
                }}
                checked={checkedList.includes(it.index) ? true : false}
              />
              {it.content}
            </label>
          );
        })}
        <p className="warning-text">{alertMsg}</p>
      </section>
      <section className="btn-wrap">
        <button onClick={handleccbtn}>취소</button>
        <button onClick={handleokbtn}>확인</button>
      </section>
    </div>
  );
};

export default SignUpPrivacy;
