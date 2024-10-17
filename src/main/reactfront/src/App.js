import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home.js';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Festival from './components/Festival';
import Chat from './components/Chat';
import Room from './components/Room';
import RoomDetail from './components/RoomDetail';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/festival" element={<Festival />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/kafka" element={<Room />} />
        <Route path="/kafkachat/room/enter/:roomId" element={<RoomDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
