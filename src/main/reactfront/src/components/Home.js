import React from 'react';
import '../styles.css';

const Home = () => {
    return (
        <>
        <nav id="mainNav" className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container px-5">
                <a className="navbar-brand" href="/"><span className="fw-bolder text-primary">YeohaengNarae</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/resume">Resume</a></li>
                        <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="/festival">Festival</a></li>
                        <li className="nav-item"><a className="nav-link" href="/chat">Chat</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <main className="flex-shrink-0">
            <header className="masthead">
                <div class="container px-4 px-lg-5 h-100">
                    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div class="col-lg-10 align-self-end">
                            <h1 class="text-white font-weight-bold">당신만의 완벽한 여행을 계획하세요. <br/>인기 관광지부터 맞춤 추천까지, 모든 것을 한 곳에서!</h1>
                        </div>
                        <div class="col-lg-8 align-self-baseline"></div>
                    </div>
                </div>
            </header>
        </main></>
    );
};

export default Home;
