import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Room = () => {
    const [roomName, setRoomName] = useState('');
    const [chatrooms, setChatrooms] = useState([]);

    useEffect(() => {
        findAllRoom();
    }, []);

    const findAllRoom = async () => {
        const response = await axios.get('/kafkachat/rooms');
        setChatrooms(response.data);
    };

    const createRoom = async () => {
        if (roomName === "") {
            alert("방 제목을 입력해 주십시요.");
            return;
        }
        try {
            const params = new URLSearchParams();
            params.append("name", roomName);
            const response = await axios.post('/kafkachat/room', params);
            alert(`${response.data.name}방 개설에 성공하였습니다.`);
            setRoomName('');
            findAllRoom();
        } catch (error) {
            alert("채팅방 개설에 실패하였습니다.");
        }
    };

    const enterRoom = (roomId) => {
        const sender = prompt('대화명을 입력해 주세요.');
        if (sender) {
            localStorage.setItem('wschat.sender', sender);
            localStorage.setItem('wschat.roomId', roomId);
            window.location.href = `/kafkachat/room/enter/${roomId}`;
        }
    };

    return (
        <div className="container">
            <h3>채팅방 리스트</h3>
            <div className="input-group">
                <div className="input-group-prepend">
                    <label className="input-group-text">방제목</label>
                </div>
                <input
                    type="text"
                    className="form-control"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    onKeyUp={(e) => e.key === 'Enter' && createRoom()}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={createRoom}>채팅방 개설</button>
                </div>
            </div>
            <ul className="list-group">
                {chatrooms.map(item => (
                    <li
                        key={item.roomId}
                        className="list-group-item list-group-item-action"
                        onClick={() => enterRoom(item.roomId)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Room;
