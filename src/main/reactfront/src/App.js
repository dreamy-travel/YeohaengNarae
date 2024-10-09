import React, { useEffect, useState } from "react";
import axios from 'axios'; // axios import

function App() {
  const [festivals, setFestivals] = useState(null); // 초기 상태를 null로 설정
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios를 사용하여 데이터 가져오기
    axios.get('http://localhost:8080/api/festivals')
      .then(response => {
        setFestivals(response.data); // axios에서 응답 데이터는 response.data에 있음
      })
      .catch(error => {
        console.error('Error fetching festival data: ', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // festivals가 null이거나 구조가 예상과 다를 경우를 처리
  if (!festivals || !festivals.response || !festivals.response.body || !festivals.response.body.items) {
    return <p>Loading festival data...</p>; // 데이터가 로드되지 않았을 경우 로딩 메시지 표시
  }

  const items = festivals.response.body.items.item; // items 배열을 가져옴

  return (
    <div>
      <h1>Festival List</h1>
      {items.map((item, index) => (
        <div key={index}>
          <p><strong>Title:</strong> {item.title}</p>
          <p><strong>Address:</strong> {item.addr1}</p>
          <p><strong>ContentTId:</strong> {item.contenttypeid}</p>
          {item.firstimage && (
            <p>
              <strong>Image: </strong>
              <img src={item.firstimage} alt={item.title} style={{ width: '200px', height: 'auto', marginTop: '10px' }} />
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
