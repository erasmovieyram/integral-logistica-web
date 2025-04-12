import React from 'react';

const Services = () => {
  const services = [
    "Consultoría",
    "Agencia aduanal",
    "Inversión extranjera",
    "Defensa tributaria",
    "Programas de fomento",
    "Registro de patentes y marcas"
  ];

  return (
    <div className="container mt-5">
      <h1>Nuestros Servicios</h1>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;