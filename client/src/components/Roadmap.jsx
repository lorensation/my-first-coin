import React from 'react';

const Roadmap = () => {
  return (
    <section id="roadmap" style={{ padding: '2rem', backgroundColor: '#f7f5f0' }}>
      <h2>Roadmap</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '2rem' }}>
            <h3>Phase 1: Launch</h3>
            <ul>
              <li>Website Launch</li>
              <li>Community Building</li>
              <li>Token Deployment</li>
            </ul>
          </li>
          <li style={{ marginBottom: '2rem' }}>
            <h3>Phase 2: Growth</h3>
            <ul>
              <li>Marketing Campaigns</li>
              <li>Exchange Listings</li>
              <li>Partnerships</li>
            </ul>
          </li>
          <li style={{ marginBottom: '2rem' }}>
            <h3>Phase 3: Expansion</h3>
            <ul>
              <li>NFT Integration</li>
              <li>Community Events</li>
              <li>Future Developments</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Roadmap;
