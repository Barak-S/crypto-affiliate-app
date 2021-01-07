import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Header content */}
            <p>home</p>
            <div className="banner-div">
                <div class="diagonal-top"></div>
                <div class="diagonal-middle">
                    <div className="row">
                        <div className="col">
                            <p>The Crypto Hub</p>
                        </div>
                    </div>
                </div>
                <div class="diagonal-bottom"></div>
            </div>
            <div>
                {/* Cards with products */}
                {/* Blog Content */}
            </div>
            <div className="banner-div">
                <div class="diagonal-top"></div>
                <div class="diagonal-middle">
                    <div className="row">
                        <div className="col">
                            <p>World Class Solutions</p>
                        </div>
                    </div>
                </div>
                <div class="diagonal-bottom"></div>
            </div>
        </div>
    );
};

export default Home;