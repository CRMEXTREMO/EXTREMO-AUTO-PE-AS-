import React from 'react';

const CampoTexto = ({ tipo = "text", valor, onChange, placeholder }) => {
  return (
    <input
      type={tipo}
      value={valor}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: '10px',
        width: '100%',
        marginBottom: '12px',
        border: '1px solid #ccc',
        borderRadius: '6px'
      }}
    />
  );
};

export default CampoTexto;
