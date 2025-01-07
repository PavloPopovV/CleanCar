import React, { useState } from "react";
import ServiceCard from "../../Services/ServiceCard";
import { services } from "../../../data/services"; 

export default function ServiceList() {
  const [activeCardId, setActiveCardId] = useState(services[2].id); 

  const handleCardClick = (id) => {
    setActiveCardId(id === activeCardId ? null : id);
  };

  return (
    <>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          data={service}
          active={activeCardId === service.id}
          onClick={() => handleCardClick(service.id)}
        />
      ))}
    </>
  );
}