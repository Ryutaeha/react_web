import axios from "axios";
import { useEffect, useState } from "react";

const AdminMember = () => {
  const [memberList, setMemberList] = useState([]);
  const [pageInfo, setPageInfo] = useState([]);
  const [reqPage, setReqPage] = useState([]);
  useEffect(() => {
    axios
      .get("/member/list" + reqPage)
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res.data.states);
      });
  });
  return (
    <div className="my-content-wrap">
      <div className="my-content-title">회원 관리</div>
    </div>
  );
};
export { AdminMember };
