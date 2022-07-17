import React, { useState } from "react";
import Header from "../../components/Header";

const SignUpPrivacy = () => {
  const list = [
    {
      id: 0,
      data: "네이버 이용약관, 개인정보 수집 및 이용, 위치기반서비스 이용약관(선택),프로모션 정보 수신(선택)에 모두 동의합니다.",
    },
    { id: 1, data: "네이버 이용약관 동의(필수)" },
    { id: 2, data: "개인정보 수집 및 이용 동의(필수)" },
    { id: 3, data: "위치기반서비스 이용약관 동의(선택)" },
    { id: 4, data: "프로모션 정보 수신 동의(선택)" },
  ];

  const [checkedList, setCheckedList] = useState([]);
  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };
  const onRemove = (item) => {
    setCheckedList(checkedList.filter((el) => el !== item));
  };
  console.log(checkedList);

  return (
    <div className="SignUpPrivacy">
      <Header />
      <section>
        {list.map((it) => {
          return (
            <label key={it.id}>
              <input
                type="checkbox"
                value={it.data}
                onChange={(e) => {
                  onCheckedElement(e.target.checked, e.target.value);
                }}
                checked={checkedList.includes(it.data) ? true : false}
              />
              {it.data}
            </label>
          );
        })}
      </section>
    </div>
  );
};

export default SignUpPrivacy;
