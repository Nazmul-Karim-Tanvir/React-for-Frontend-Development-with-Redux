import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../Firebase/Firebase'; 

const Home = () => {
  // State to store image URLs
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Function to load images
    const loadImages = async () => {
      try {
        const image1Ref = ref(storage, 'HomePageImages/homeImage1.png');
        const image2Ref = ref(storage, 'HomePageImages/homeImage2.png'); // Update with your actual file path
        const url1 = await getDownloadURL(image1Ref);
        const url2 = await getDownloadURL(image2Ref);

        setImageUrls([url1, url2]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    loadImages();
  }, []);

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
          {imageUrls.map((url, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={url} style={imgStyle} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-primary" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-primary" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
