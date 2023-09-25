import { Link } from "react-router-dom";

const KhList = (props) => {
  const khList = props.khList;
  console.log(khList);
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>번호</th>

          <th>지원이름</th>
        </tr>
      </thead>

      <tbody>
        {khList.map((kh, index) => {
          console.log(kh);
          return (
            <tr key={"k" + index}>
              <td>{kh.khNo}</td>

              <td>
                <Link to="/view" state={{ kh: kh }}>
                  {kh.localName}
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default KhList;
