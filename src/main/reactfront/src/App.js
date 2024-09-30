import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [hidata, setHello] = useState("");
  const [boardList, setBoardList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hello")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  const fetchBoardList = () => {
    axios
      .get("http://localhost:8080/api/boardList")
      .then((response) => setBoardList(response.data))
      .catch((error) => console.log(error));
  };

  const handleRegister = () => {
    const newBoard = { title, content };
    axios
      .post("http://localhost:8080/api/setBoard", newBoard)
      .then((response) => {
        setBoardList([...boardList, response.data]);
        setTitle("");
        setContent("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      백엔드 스프링 부트 데이터 : {hidata}
      <br />
      <input
        type="button"
        value="리스트펼치기"
        onClick={fetchBoardList}
      ></input>
      <ul>
        {boardList.map((post) => (
          <li key={post.id}>
            {post.title} - {post.content}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="button" value="등록" onClick={handleRegister} />
      </div>
    </div>
  );
}

export default App;
