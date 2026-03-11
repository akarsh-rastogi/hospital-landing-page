import React from "react";

const Doctors = () => (
  <section className="doctors-section">
    <div className="doctors-header">
      <h2>We Have The Best Specialist</h2>
      <p>
        We have a wide experience in experience design and strategy,
        with locally-rooted knowledge.
      </p>
    </div>

    <div className="doctors-row">
      <div className="doctor-card">
        <div className="image-placeholder"></div>
        <h3>Dr. Awaatif Al</h3>
        <span>Dental Care</span>
      </div>
      <div className="doctor-card">
        <div className="image-placeholder"></div>
        <h3>Dr. Filipa Gaspar</h3>
        <span>Cardiology</span>
      </div>
      <div className="doctor-card">
        <div className="image-placeholder"></div>
        <h3>Dr. Sukhmeet Gorae</h3>
        <span>Neurological</span>
      </div>
      <div className="doctor-card">
        <div className="image-placeholder"></div>
        <h3>Dr. Siri Jakobsson</h3>
        <span>Pediatrics</span>
      </div>
    </div>
  </section>
);

export default Doctors;
