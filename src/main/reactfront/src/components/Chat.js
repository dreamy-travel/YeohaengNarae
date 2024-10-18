import '../App.css';
import axios from "axios";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Stomp } from "@stomp/stompjs";

function Chat() {
  const stompClient = useRef(null);
  // 채팅 내용들을 저장할 변수
  const [messages, setMessages] = useState([]);
  // 사용자 입력을 저장할 변수
  const [inputValue, setInputValue] = useState('');
  // 입력 필드에 변화가 있을 때마다 inputValue를 업데이트
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 웹소켓 연결 설정
  const connect = useCallback(() => {
    const socket = new WebSocket("ws://localhost:8080/ws");
    stompClient.current = Stomp.over(socket);
    stompClient.current.connect({}, () => {
      stompClient.current.subscribe(`/sub/chatroom/1`, (message) => {
        const newMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });
    });
  }, []); // 빈 배열을 의존성으로 사용하여 한 번만 실행

  // 웹소켓 연결 해제
  const disconnect = useCallback(() => {
    if (stompClient.current) {
      stompClient.current.disconnect();
    }
  }, []);

  // 기존 채팅 메시지를 서버로부터 가져오는 함수
  const fetchMessages = useCallback(() => {
    return axios.get("http://localhost:8080/chat/1")
      .then(response => { setMessages(response.data) });
  }, []);

  useEffect(() => { 
    connect();
    fetchMessages();
    return () => disconnect(); // disconnect를 의존성 배열에 추가
  }, [connect, fetchMessages, disconnect]); // disconnect를 의존성 배열에 추가

  //메세지 전송
  const sendMessage = () => {
    if (stompClient.current && inputValue) {
      const body = {
        id: 1,
        name: "테스트1",
        message: inputValue
      };
      stompClient.current.send(`/pub/message`, {}, JSON.stringify(body));
      setInputValue('');
    }
  };

  return (
    <main className="flex-shrink-0">
      <section className="py-5">
        <div className="container px-5">
          <ul>
            <div>
              {/* 입력 필드 */}
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
              {/* 메시지 전송, 메시지 리스트에 추가 */}
              <button onClick={sendMessage}>입력</button>
            </div>
            {/* 메시지 리스트 출력 */}
            {messages.map((item, index) => (
              <div key={index} className="list-item">{item.message}</div>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Chat;
