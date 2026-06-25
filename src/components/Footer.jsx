import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <p>&copy; 2026 SkillPath Website. All rights reserved.</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link to="/" style={{ color: '#fff' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff' }}>About</Link>
        <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;