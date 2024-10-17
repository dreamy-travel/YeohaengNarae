import React from 'react';
import '../styles.css';

const Home = () => {
    return (
        <main className="flex-shrink-0">
            <header className="masthead">
                <div className="container px-4 px-lg-5 h-100">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-white font-weight-bold">당신만의 완벽한 여행을 계획하세요. <br/>인기 관광지부터 맞춤 추천까지, 모든 것을 한 곳에서!</h1>
                        </div>
                        <div className="col-lg-8 align-self-baseline"></div>
                    </div>
                </div>
            </header>
        </main>
    );
};

export default Home;
