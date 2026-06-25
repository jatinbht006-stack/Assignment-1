import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#007bff', color: 'white', textAlign: 'center' }}>
      <h2>Ready to Start Learning?</h2>
      <Link to="/contact">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Get in Touch</button>
      </Link>
    </div>
  );
};

export default CTABanner;