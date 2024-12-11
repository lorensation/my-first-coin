import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#b87333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} MyFirstCoin ($MFC). All rights reserved.</p>
      <p style={{ fontSize: '0.8rem' }}>
        Disclaimer: $MFC is a memecoin and not financial advice.
      </p>
    </footer>
  );
};

export default Footer;
