import React from "react";

const Services = () => (
  <section className="services">
    <h2>Our Services</h2>
    <p>
      We provide the most full medical services, so every person could have the
      opportunity to receive qualitative medical help.
    </p>
    <div className="service-grid">
      <div className="service-card">
        <div className="icon">🦷</div>
        <h3>Dental Care</h3>
        <a href="#" className="link-dark">LEARN MORE →</a>
      </div>
      <div className="service-card highlight tall">
        <div className="icon">🫁</div>
        <h3>Pulmonary</h3>
        <a href="#" className="link-light">LEARN MORE →</a>
      </div>
      <div className="service-card">
        <div className="icon">🧠</div>
        <h3>Neurological</h3>
        <a href="#" className="link-dark">LEARN MORE →</a>
      </div>
      <div className="service-card">
        <div className="icon">📋</div>
        <h3>Pediatrics</h3>
        <a href="#" className="link-dark">LEARN MORE →</a>
      </div>
    </div>
  </section>
);

export default Services;
