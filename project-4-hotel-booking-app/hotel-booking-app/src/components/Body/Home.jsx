import React from 'react';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const welcomeTextStyle = {
    marginBottom: '20px',
  };

  const headingStyle = {
    fontSize: '2.5em',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    color: '#777',
  };

  const imgStyle = {
    maxHeight: '600px',
    margin: '0 auto',
    borderRadius: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={welcomeTextStyle}>
        <h1 style={headingStyle}>Welcome to Sea View Hotel and Resort</h1>
        <p style={paragraphStyle}>Your perfect getaway destination</p>
      </div>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} style={imgStyle} alt="Sea View Hotel" />
          </div>
          <div className="carousel-item">
            <img src={img2} style={imgStyle} alt="Sea View Hotel" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
