import React from 'react';
export const Homepage = () => {
    return (
        <>
            <header className="v-header container">
                <div className="fullscreen-video-wrap">
                    <video loop autoPlay>
                        <source src='../../static/background.mov' type="video/mp4" />
                    </video>
                </div>
                <div className="header-overlay"></div>
                <div className="header-content text-md-center">
                    <h1>Welcome Everyone</h1>

                    <hr></hr>
                    <p>Any app that can be written in JavaScript, will eventually be written in JavaScript. <pre className="quote-owner"> Jeff Atwood</pre></p>
                   
                    <a className="btn">Find Out More</a>
                </div>
            </header>
        </>
    )
};

export default Homepage;