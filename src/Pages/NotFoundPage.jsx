import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/">
        <button style={{ marginTop: '1rem', padding: '10px 20px', cursor: 'pointer' }}>Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;