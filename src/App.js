import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#4CAF50' }}>Welcome to Juliwro Site</h1>
      <p>This is your custom React website!</p>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: 'white',
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => alert('Hello!')}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
