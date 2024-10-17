import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const RoomDetail = () => {
    const [roomId, setRoomId] = useState('');
    const [room, setRoom] = useState({});
    const [sender, setSender] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ws = useRef(null); // useRef로 ws를 관리

    const findRoom = useCallback(async () => {
        const response = await axios.get(`/kafkachat/room/${roomId}`);
        setRoom(response.data);
    }, [roomId]);

    const connect = useCallback(() => {
        const sock = new SockJS("http://localhost:8080/ws");
        ws.current = Stomp.over(sock);
        ws.current.connect({}, (frame) => {
            ws.current.subscribe(`/sub/kafkachat/room/${roomId}`, (message) => {
                const recv = JSON.parse(message.body);
                recvMessage(recv);
            });
            ws.current.send("/pub/kafkachat/message", {}, JSON.stringify({ type: 'ENTER', roomId, sender }));
        }, (error) => {
            console.error("Connection error: ", error);
        });
    }, [roomId, sender]);

    useEffect(() => {
        setRoomId(localStorage.getItem('wschat.roomId'));
        setSender(localStorage.getItem('wschat.sender'));
        findRoom();
        connect();
    }, [findRoom, connect]);

    const sendMessage = () => {
        if (ws.current) {
            ws.current.send("/pub/kafkachat/message", {}, JSON.stringify({ type: 'TALK', roomId, sender, message }));
            setMessage('');
        } else {
            console.error("WebSocket is not connected.");
        }
    };

    const recvMessage = (recv) => {
        setMessages(prevMessages => [
            { type: recv.type, sender: recv.type === 'ENTER' ? '[알림]' : recv.sender, message: recv.message },
            ...prevMessages
        ]);
    };

    return (
        <div className="container">
            <h2>{room.name}</h2>
            <div className="input-group">
                <div className="input-group-prepend">
                    <label className="input-group-text">내용</label> 
                </div>
                <input
                    type="text"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={sendMessage}>보내기</button>
                </div>
            </div>
            <ul className="list-group">
                {messages.map((msg, index) => (
                    <li key={index} className="list-group-item">
                        {msg.sender} - {msg.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomDetail;
