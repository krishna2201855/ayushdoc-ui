// components/DoctorCard.js
import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div>
      <h3>{doctor.name}</h3>
      <p>Specialty: {doctor.specialty}</p>
      <p>Experience: {doctor.experience} years</p>
    </div>
  );
};

export default DoctorCard;
