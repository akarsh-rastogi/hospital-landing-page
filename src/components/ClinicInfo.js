import React from "react";
import doctorImg from "../images/qualified-doctor.avif";   
import emergencyImg from "../images/emergency-care.png";   
import ambulanceImg from "../images/ambulance6.jpg";       

const ClinicInfo = () => (
  <section className="clinic-section">
    <div className="clinic-container">
      
      <div className="clinic-text">
        <h2>Clinic With Innovation</h2>
        <p>
          We provide the most full medical services, so every person could have
          the opportunity to receive qualitative medical help.
        </p>
        <button className="learn-btn">Learn More</button>
      </div>

      
      <div className="clinic-box-layout">
        <div className="left-column">
          <div className="clinic-card">
            <img src={doctorImg} alt="Qualified Doctors" /> 
            <h3>Qualified Doctors</h3>
          </div>
          <div className="clinic-card">
            <img src={emergencyImg} alt="Emergency Care" />   
            <h3>Emergency Care</h3>
          </div>
        </div>
        <div className="right-column">
          <div className="clinic-card">
            <img src={ambulanceImg} alt="24 Hours Service" /> 
            <h3>24 Hours Service</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ClinicInfo;
