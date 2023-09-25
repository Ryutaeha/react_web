import { useState } from "react";
import "./react.css";
function App() {
  const [boardList, setBoardList] = useState([
    {
      boardNo: 1,

      boardTitle: "javascript 배열 질문!!",

      readCount: 23,

      boardWriter: "user01",

      isAnswer: 0,
    },

    {
      boardNo: 2,

      boardTitle: "react state 질문입니다.",

      readCount: 54,

      boardWriter: "user02",

      isAnswer: 1,
    },

    {
      boardNo: 3,

      boardTitle: "오늘 점심메뉴 추천좀...",

      readCount: 127,

      boardWriter: "user01",

      isAnswer: 1,
    },
  ]);

  return (
    <div>
      <h1>질문게시판</h1>

      <hr />

      <table className="board-tbl">
        <thead>
          <tr>
            <th>글번호</th>

            <th>제목</th>

            <th>조회수</th>

            <th>작성자</th>

            <th>답변여부</th>
          </tr>
        </thead>

        <tbody>
          {boardList.map((item, index) => {
            return (
              <tr key={"m" + index}>
                <td>{item.boardNo}</td>

                <td>{item.boardTitle}</td>

                <td>{item.readCount}</td>

                <td>{item.boardWriter}</td>

                <td>{item.isAnswer === 1 ? "답변완료" : "답변대기중"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
