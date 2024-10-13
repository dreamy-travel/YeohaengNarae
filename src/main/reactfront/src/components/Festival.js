import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';

const Festival = () => {
  const [festivals, setFestivals] = useState(null); // 초기 상태를 null로 설정
  const [error, setError] = useState(null);
  const [selectedFestival, setSelectedFestival] = useState(null); // 선택된 축제 상태

  useEffect(() => {
    // axios를 사용하여 데이터 가져오기
    axios.get('http://localhost:8080/festivals')
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

  const handleFestivalClick = (item) => {
    setSelectedFestival(item); // 클릭한 축제 정보를 상태에 저장
  };

  const closePopup = () => {
    setSelectedFestival(null); // 팝업 닫기
  };

  return (
    <main className="flex-shrink-0">
      <section className="py-5">
        <div className="container px-5">
          <div className="app-container">
            <div className="festival-list">
              <div className="festival-grid">
                {items.map((item, index) => (
                  <div key={index} className="festival-item" onClick={() => handleFestivalClick(item)}>
                    <img src={item.firstimage} alt={item.title} className="festival-image" />
                    <p><strong>Title:</strong> {item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {selectedFestival && (
              <div className="popup">
                <div className="popup-content">
                  <span className="close" onClick={closePopup}>&times;</span>
                  <h2>{selectedFestival.title}</h2>
                  <p><strong>Address:</strong> {selectedFestival.addr1}</p>
                  <p><strong>Tel:</strong> {selectedFestival.tel}</p>
                  <img src={selectedFestival.firstimage} alt={selectedFestival.title} className="popup-image" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Festival;