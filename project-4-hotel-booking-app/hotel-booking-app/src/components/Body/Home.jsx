import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../Firebase/Firebase';
import { Link } from 'react-router-dom';


const Home = () => {
  // State to store image URLs
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Function to load images
    const loadImages = async () => {
      try {
        const image1Ref = ref(storage, 'HomePageImages/homeImage1.png');
        const image2Ref = ref(storage, 'HomePageImages/homeImage2.png');
        const image3Ref = ref(storage, 'HomePageImages/homeImage3.png');
        const image4Ref = ref(storage, 'HomePageImages/homeImage4.png');
        const url1 = await getDownloadURL(image1Ref);
        const url2 = await getDownloadURL(image2Ref);
        const url3 = await getDownloadURL(image3Ref);
        const url4 = await getDownloadURL(image4Ref);

        setImageUrls([url1, url2, url3, url4]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    loadImages();
  }, []);

  const containerStyle = {
    background: "#FAFBFF",
    textAlign: 'center',
    padding: '20px',
  };

  const welcomeTextStyle = {
    marginBottom: '20px',
    background: 'linear-gradient(45deg, #ff0000, #ff9900, #ffcc00, #33cc33, #3399ff, #9900cc)', // You can customize these color stops
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontFamily: 'YourFontFamily, sans-serif',
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
    maxHeight: '650px',
    margin: '0 auto',
    borderRadius: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={welcomeTextStyle}>
        <h1 style={headingStyle}>Welcome to Sea View Hotel and Resort</h1>
        <p style={paragraphStyle}>Your perfect getaway destination</p>
        <Link to="/rooms" className="btn btn-dark ">
          Book Now
        </Link>

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
      <div>
        <div className='row'>
          <div className='col-md-3'>
            <div className="card m-auto mt-4 shadow" style={{ width: '18rem' }}>
              {imageUrls.length > 0 && <img src={imageUrls[0]} className="card-img-top" alt="Card image cap" />}
              <div className="card-body">
                <h5 className="card-title">Largest Motel</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/rooms " className="btn btn-dark"> Packages</Link>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card m-auto mt-4 shadow" style={{ width: '18rem' }}>
              {imageUrls.length > 0 && <img src={imageUrls[1]} className="card-img-top" alt="Card image cap" />}
              <div className="card-body">
                <h5 className="card-title"> Family Pool</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/rooms " className="btn btn-dark"> Packages</Link>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card m-auto mt-4 shadow" style={{ width: '18rem' }}>
              {imageUrls.length > 0 && <img src={imageUrls[2]} className="card-img-top" alt="Card image cap" />}
              <div className="card-body">
                <h5 className="card-title">Infinity Pool</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/rooms " className="btn btn-dark"> Packages</Link>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card m-auto mt-4 shadow" style={{ width: '18rem' }}>
              {imageUrls.length > 0 && <img src={imageUrls[3]} className="card-img-top" alt="Card image cap" />}
              <div className="card-body">
                <h5 className="card-title">Ocean Touch Pool</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/rooms " className="btn btn-dark"> Packages</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
