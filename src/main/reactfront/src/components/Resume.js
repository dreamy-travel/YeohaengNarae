import React from 'react';
import '../styles.css';

const Resume = () => {
    return (
        <main className="flex-shrink-0">
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-11 col-xl-9 col-xxl-8">
                        <section>
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                                <a className="btn btn-primary px-4 py-3" href="#!">
                                    <div className="d-inline-block bi bi-download me-2"></div>
                                    Download Resume
                                </a>
                            </div>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="row align-items-center gx-5">
                                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                            <div className="bg-light p-4 rounded-4">
                                                <div className="text-primary fw-bolder mb-2">2019 - Present</div>
                                                <div className="small fw-bolder">Web Developer</div>
                                                <div className="small text-muted">Stark Industries</div>
                                                <div className="small text-muted">Los Angeles, CA</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit...</div></div>
                                    </div>
                                </div>
                            </div>
                            {/* 추가적인 경험 카드들 */}
                        </section>
                        <section>
                            <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                            {/* 교육 카드들 */}
                        </section>
                        <section>
                            <div className="card shadow border-0 rounded-4 mb-5">
                                <div className="card-body p-5">
                                    <div className="mb-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span></h3>
                                        </div>
                                        {/* 기술 목록 */}
                                    </div>
                                    <div className="mb-0">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                                            <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                                        </div>
                                        {/* 언어 목록 */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Resume;