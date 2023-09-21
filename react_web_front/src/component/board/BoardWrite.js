import { useState } from "react";
import { BoardFrm } from "./BoardFrm";
import Swal from "sweetalert2";
import axios from "axios";
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
  const write = () => {
    console.log(boardTitle);
    console.log(thumbnail);
    console.log(boardDetail);
    console.log(boardFile);
    if (boardTitle !== "" && boardDetail !== "") {
      //기본적인 문자열 또는 숫자데이터를 전송하는 경우 json을 전송
      //파일이 포함된 경우 > FromData활용
      const form = new FormData();
      form.append("boardTitle", boardTitle);
      form.append("boardDetail", boardDetail);
      form.append("thumbnail", thumbnail);
      //첨부파일이 여러개인 경우 (multiple인 경우 > 같은 이름으로 첨부파일이 여러개인 경우)
      for (let i = 0; i < boardFile.length; i++) {
        form.append("boardFile", boardFile[i]);
      }
      const token = window.localStorage.getItem("token");
      axios
        .post("board/insert", form, {
          headers: {
            contentType: "multipart/form-data",
            processData: false,
            Authorization: "Bearer" + token,
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((res) => {
          console.log(res.response.status);
        });
    } else {
      Swal.fire("입력 잘하세요!");
    }
  };
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
        setBoardFile={setBoardFile}
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
