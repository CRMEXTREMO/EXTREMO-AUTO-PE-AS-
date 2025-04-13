import React from 'react';

const BotaoPrimario = ({ texto, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#1B263B',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
      {texto}
    </button>
  );
};

export default BotaoPrimario;
