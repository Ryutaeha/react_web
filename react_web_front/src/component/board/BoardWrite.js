import { useState } from "react";
import { BoardFrm } from "./BoardFrm";
const BoardWrite = () => {
  //제목, 썸네일, 내용, 첨부파일
  const [boardTitle, setBoardTitle] = useState("");
  const [thumbnail, setThumbnail] = useState({});
  const [boardDetail, setBoardDetail] = useState("");
  const [boardFile, setBoardFile] = useState([]);
  //boardImg > 썸네일 미리보기 fileList -> 첨부파일 목록 출력용
  const [boardImg, setBoardImg] = useState("");
  const [fileList, setFileList] = useState([]);

  //글쓰기 번튼 클릭시 동작할 함수(서버애서 insert요청험수)
  const write = () => {};
  //글쓰긱ㄱ
  return (
    <div>
      <div className="board-frm-title">게시글 작성</div>
      <BoardFrm
        boardTitle={boardTitle}
        setBoardTitle={setBoardTitle}
        boardDetail={boardDetail}
        setBoardDetail={setBoardDetail}
        thumbnail={thumbnail}
        setThumbnail={setThumbnail}
        boardFile={boardFile}
        setBaordFile={setBoardFile}
        boardImg={boardImg}
        setBoardImg={setBoardImg}
        fileList={fileList}
        setFileList={setFileList}
        buttonEvent={write}
        type="write"
      />
    </div>
  );
};
export { BoardWrite };
