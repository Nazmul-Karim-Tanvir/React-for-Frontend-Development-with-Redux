import React from 'react';

const Contacts = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading text-uppercase mb-4">Contact Us</h2>
            <p className="text-muted mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor diam eu
              placerat euismod. In quis hendrerit leo, eu interdum elit. Sed fermentum
              felis at mi hendrerit, vel efficitur tortor hendrerit.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <i className="fas fa-phone-alt fa-3x mb-3 text-muted"></i>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
            <p>
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
