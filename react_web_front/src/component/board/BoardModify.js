import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BoardFrm } from "./BoardFrm";
const BoardModify = () => {
  const location = useLocation();
  const board = location.state.board;
  console.log(board);
  //제목, 썸네일, 내용, 첨부파일
  //제목, 썸네일, 내용, 첨부파일 > 전송용 데이터를 담을 state
  const [boardTitle, setBoardTitle] = useState(board.boardTitle);
  const [thumbnail, setThumbnail] = useState({});
  const [boardDetail, setBoardDetail] = useState(board.boardDetail);
  const [boardFile, setBoardFile] = useState([]);
  //boardImg > 썸네일 미리보기용, fileList > 첨부파일 목록 출력용
  const [boardImg, setBoardImg] = useState(board.boardImg);
  const [fileList, setFileList] = useState(board.fileList);
  const [delFileNo, setDelFileNo] = useState([]); //삭제파일용
  const navigate = useNavigate();
  const modify = () => {
    console.log("");
  };
  return (
    <div>
      <div className="board-frm-title">게시글 수정</div>
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
        buttonEvent={modify}
        delFileNo={delFileNo}
        setDelFileNo={setDelFileNo}
        type="modify"
      />
    </div>
  );
};
export { BoardModify };
