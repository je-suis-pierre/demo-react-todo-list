import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linksytle} to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linksytle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

const linksytle = {
  color: '#fff',
  textDecoration: 'none',
};

export default Header;
