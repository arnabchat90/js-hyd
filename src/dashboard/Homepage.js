import React from 'react';
export const Homepage = () => {
    return (
        <>
            <header class="v-header container">
                <div class="fullscreen-video-wrap">
                    <video loop autoPlay>
                        <source src='../../static/background.mov' type="video/mp4" />
                    </video>
                </div>
                <div class="header-overlay"></div>
                <div class="header-content text-md-center">
                    <h1>Welcome Everyone</h1>

                    <hr></hr>
                    <p>Any app that can be written in JavaScript, will eventually be written in JavaScript. <pre className="quote-owner"> Jeff Atwood</pre></p>
                   
                    <a class="btn">Find Out More</a>
                </div>
            </header>
        </>
    )
};

export default Homepage;