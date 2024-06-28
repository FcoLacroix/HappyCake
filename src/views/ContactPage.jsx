import React from "react";

const ContactPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center" style={{ fontSize: '1.5rem', marginTop: '3rem' , marginBottom: '2rem' }}>Cuéntanos, ¿En qué podemos ayudarte?</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            placeholder="Nombre Apellido" 
            style={{ opacity: '0.6' }} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo:</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="nombre@ejemplo.com" 
            style={{ opacity: '0.6' }} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Descripción:</label>
          <textarea 
            className="form-control" 
            id="message" 
            rows="5" 
            placeholder="Escribe tu mensaje aquí..."
            style={{ opacity: '0.6' }}
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn" 
          style={{ backgroundColor: '#8b2e58', color: ' aliceblue' }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
