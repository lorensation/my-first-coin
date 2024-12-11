import React from 'react';

const Hero = () => {
    return (
        <section id="hero" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <h1>Welcome to MyFirstCoin ($MFC)</h1>
            <p>Your first step into the crypto memeverse.</p>
            <div>
                <button>Buy $MFC</button>
                <button>Join Community</button>
            </div>
        </section>
    );
};

export default Hero;
