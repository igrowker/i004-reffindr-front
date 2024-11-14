import React from 'react';

// Aqqui estamos definiendo los estilos
const buttonStyles: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const LoginButtons: React.FC = () => {
  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      {/* Mi boton de iisiar sesion */}
      <button
        style={{
          ...buttonStyles,
          backgroundColor: '#003366', 
          color: 'white',
          border: 'none',
        }}
        onClick={() => console.log('Iniciar sesión')}
      >
        Iniciar sesión
      </button>

      {/* Mi boton de iniciar sesion con Google */}
      <button
        style={{
          ...buttonStyles,
          backgroundColor: 'white',
          color: '#333',
          border: '1px solid #ddd',
        }}
        onClick={() => console.log('Iniciar sesión con Google')}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Google icon"
          style={{ width: '20px', marginRight: '10px' }}
        />
        Iniciar sesión con Google
      </button>

      {/*mi boton de iniciar con Facebook */}
      <button
        style={{
          ...buttonStyles,
          backgroundColor: 'white',
          color: '#333',
          border: '1px solid #ddd',
        }}
        onClick={() => console.log('Iniciar sesión con Facebook')}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook icon"
          style={{ width: '20px', marginRight: '10px' }}
        />
        Iniciar sesión con Facebook
      </button>
    </div>
  );
};

export default LoginButtons;
