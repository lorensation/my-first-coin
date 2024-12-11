import React from 'react';

const Community = () => {
  return (
    <section id="community" style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Join the Community</h2>
      <p>Connect with us on social media:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="https://x.com/My1stCo1n" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
            alt="Twitter"
          />
        </a>
        {/* Add more social links as needed */}
      </div>
    </section>
  );
};

export default Community;
