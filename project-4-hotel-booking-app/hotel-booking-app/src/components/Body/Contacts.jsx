import React from 'react';

const Contacts = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="text-success section-heading text-uppercase mb-4 display-4">Contact Us</h2>
            <p className="display-6 text-dark mb-5">Our dedicated 24/7 customer experience team is committed to ensuring that your tour is not just a journey, but an unforgettable and extraordinary experience. </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4" >
            <div className="card border-0 shadow">
              <div className="card-body text-center" style={{ border: '1px solid #28a745', borderImage: 'linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8a2be2) 1', borderImageSlice: 1 }}
              >
                <i className="fas fa-phone-alt fa-3x mb-3 text-primary"></i>
                <p className="mb-0">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow">
              <div className="card-body text-center" style={{ border: '1px solid #28a745', borderImage: 'linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8a2be2) 1', borderImageSlice: 1 }}
              >
                <i className="fas fa-envelope fa-3x mb-3 text-primary"></i>
                <p className="mb-0">
                  <a href="mailto:info@example.com">info@example.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            {/* Google Maps Embed API */}
            <iframe
              title="Cox's Bazar Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181052.39500051432!2d91.98655512365056!3d21.427171002838393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a626a9e9009f%3A0x22f0b3d1d6d47bc8!2sCox&#39;s%20Bazar%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1644694143185!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
