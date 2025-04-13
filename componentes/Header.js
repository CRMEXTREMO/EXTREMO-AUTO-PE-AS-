import React from 'react';

const Header = ({ titulo }) => {
  return (
    <header style={{ padding: '16px', backgroundColor: '#0D1B2A', color: 'white' }}>
      <h1>{titulo}</h1>
    </header>
  );
};

export default Header;
