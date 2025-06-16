import React from 'react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title fw-semibold">{title}</h5>
        <p className="card-text text-muted small">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
