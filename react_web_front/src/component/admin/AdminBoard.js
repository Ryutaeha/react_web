import axios from "axios";
import { useEffect, useState } from "react";

const AdminBoard = () => {
  const [boardList, setBoardList] = useState([]);
  const [pageInfo, setPageInfo] = useState([]);
  const [reqPage, setReqPage] = useState(1);
  useEffect(() => {
    axios
      .get("/board/adminList/" + reqPage)
      .then((res) => {
        console.log(res.data);
        setBoardList(res.data.list);
        setPageInfo(res.data.pi);
      })
      .catch((res) => {
        console.log(res.data.status);
      });
  }, [reqPage]);
  return (
    <div className="my-content-wrap">
      <div className="my-content-title">게시글 관리</div>
      <div className="admin-board-tbl">
        <table>
          <thead>
            <tr>
              <td width={"30%"}>글번호</td>
              <td width={"45%"} className="title-td">
                제목
              </td>
              <td width={"15%"}>작성자</td>
              <td width={"15%"}>작성일</td>
              <td width={"15%"}>공개여부</td>
            </tr>
          </thead>
          <tbody>
            {boardList.map((board, index) => {
              return <BoardItem key={"board" + index} board={board} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const BoardItem = (props) => {
  const board = props.board;
  return (
    <tr>
      <td>{board.boardNo}</td>
      <td className="title-td">
        <div>{board.boardTitle}</div>
      </td>
      <td>{board.boardWriter}</td>
      <td>{board.boardDate}</td>
      <td>{board.board}</td>
    </tr>
  );
};
export { AdminBoard };
