import React from "react";

const HomePage = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}> 
      <h1>Bienvenido a <strong>Happy Cake</strong></h1> 
      <p style={{ fontFamily: 'Arial', fontSize: '1.5rem', textAlign: 'center' }}> 
        El lugar de los pasteles felices
      </p>
      <div style={{ fontSize: '4rem' }}>
        🎂 
      </div>
    </div>
  );
};

export default HomePage;
