import React from 'react';

const Tokenomics = () => {
  return (
    <section id="tokenomics" style={{ padding: '2rem' }}>
      <h2>Tokenomics</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ margin: '1rem', minWidth: '200px', textAlign: 'center' }}>
          <h3>Total Supply</h3>
          <p>1,000,000,000 $MFC</p>
        </div>
        <div style={{ margin: '1rem', minWidth: '200px', textAlign: 'center' }}>
          <h3>Liquidity</h3>
          <p>Locked for 1 year</p>
        </div>
        <div style={{ margin: '1rem', minWidth: '200px', textAlign: 'center' }}>
          <h3>Transaction Fee</h3>
          <p>0% per transaction</p>
        </div>
        <div style={{ margin: '1rem', minWidth: '200px', textAlign: 'center' }}>
          <h3>Distribution</h3>
          <p>50% Burned, 50% Circulating</p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
