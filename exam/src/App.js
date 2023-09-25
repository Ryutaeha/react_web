import "./App.css";

import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import KhList from "./component/KhList";

import KhDetail from "./component/KhDetail";

function App() {
  const [khList, setKhList] = useState([
    {
      khNo: 1,

      localName: "강남지원",

      address: "서울특별시 강남구 테헤란로 14길 6",

      fax: "02-562-2378",
    },

    {
      khNo: 2,

      localName: "종로지원",

      address: "서울특별시 중구 남대문로 120",

      fax: "02-722-0858",
    },

    {
      khNo: 3,

      localName: "당산지원",

      address: "서울특별시 영등포구 선유동2로 57",

      fax: "02-2163-8560",
    },
  ]);

  return (
    <div className="wrap">
      <h1>KH정보교육원</h1>

      <hr></hr>

      <Link to="/list">학원목록보기</Link>

      <Routes>
        <Route path="/list" element={<KhList khList={khList} />} />

        <Route path="/view" element={<KhDetail />} />
      </Routes>
    </div>
  );
}

export default App;
