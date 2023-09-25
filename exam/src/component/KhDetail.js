import { useLocation } from "react-router-dom";

const KhDetail = () => {
  const location = useLocation();

  const kh = location.state.kh;
  console.log(kh);
  return (
    <ul>
      <li>번호 : {kh.khNo}</li>

      <li>지원이름 : {kh.localName}</li>

      <li>주소 : {kh.address}</li>

      <li>fax : {kh.fax}</li>
    </ul>
  );
};

export default KhDetail;
