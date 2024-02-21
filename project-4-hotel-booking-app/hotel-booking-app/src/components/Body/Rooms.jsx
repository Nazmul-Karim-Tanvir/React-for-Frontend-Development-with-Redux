import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../Firebase/Firebase';

const Rooms = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Function to load images
    const loadImages = async () => {
      try {
        const image1Ref = ref(storage, 'RoomImages/room1.png');
        const image2Ref = ref(storage, 'RoomImages/room2.png');
        const image3Ref = ref(storage, 'RoomImages/room3.png');
        const image4Ref = ref(storage, 'RoomImages/room4.png');
        const image5Ref = ref(storage, 'RoomImages/party1.png');
        const image6Ref = ref(storage, 'RoomImages/party2.png');
        const image7Ref = ref(storage, 'RoomImages/party3.png');
        const image8Ref = ref(storage, 'RoomImages/food1.png');
        const url1 = await getDownloadURL(image1Ref);
        const url2 = await getDownloadURL(image2Ref);
        const url3 = await getDownloadURL(image3Ref);
        const url4 = await getDownloadURL(image4Ref);
        const url5 = await getDownloadURL(image5Ref);
        const url6 = await getDownloadURL(image6Ref);
        const url7 = await getDownloadURL(image7Ref);
        const url8 = await getDownloadURL(image8Ref);

        setImageUrls([url1, url2, url3, url4, url5, url6, url7, url8]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    loadImages();
  }, []);

  return (
    <div>
      <div className='row'>
        <div className='col-md-3'>
          <div className="card m-auto mt-4 shadow" style={{ width: '18rem' }}>
            {imageUrls.length > 0 && <img src={imageUrls[0]} className="card-img-top" alt="Card image cap" />}
            <div className="card-body">
              <h5 className="card-title">Double Bed</h5>
              <p className="card-text">Ultimate Luxury and Convenience: Enjoy 24/7 AC Service with Television and High-Speed WiFi</p>
              <p className='rounded display-6 ' style={{color: "#FFC107", fontFamily: "serif"}}> 4000 Taka</p>
              <a href="#" className="btn btn-dark">Book Now</a>
              
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className="card m-auto mt-4 shadow" style={{ width: '18rem' }}>
            {imageUrls.length > 0 && <img src={imageUrls[1]} className="card-img-top" alt="Card image cap" />}
            <div className="card-body">
              <h5 className="card-title"> Tripple Bed</h5>
              <p className="card-text">Ultimate Luxury and Convenience: Enjoy 24/7 AC Service with Television and High-Speed WiFi</p>
              <p className='rounded display-6 ' style={{color: "#FFC107", fontFamily: "serif"}}> 6000 Taka</p>
              <a href="#" className="btn btn-dark">Book Now</a>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className="card m-auto mt-4 shadow" style={{ width: '18rem' }}>
            {imageUrls.length > 0 && <img src={imageUrls[2]} className="card-img-top" alt="Card image cap" />}
            <div className="card-body">
              <h5 className="card-title">Single Bed Premium</h5>
              <p className="card-text">Ultimate Luxury and Convenience: Enjoy 24/7 AC Service with Television and High-Speed WiFi</p>
              <p className='rounded display-6 ' style={{color: "#FFC107", fontFamily: "serif"}}> 5000 Taka</p>
              <a href="#" className="btn btn-dark">Book Now</a>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className="card m-auto mt-4 shadow" style={{ width: '18rem' }}>
            {imageUrls.length > 0 && <img src={imageUrls[3]} className="card-img-top" alt="Card image cap" />}
            <div className="card-body">
              <h5 className="card-title">Single Bed</h5>
              <p className="card-text">Ultimate Luxury and Convenience: Enjoy 24/7 AC Service with Television and High-Speed WiFi</p>
              <p className='rounded display-6 ' style={{color: "#FFC107", fontFamily: "serif"}}> 3000 Taka</p>
              <a href="#" className="btn btn-dark">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div id="roomCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {imageUrls.map((url, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={url} className="d-block w-100" alt={`Special view ${index + 1}`} style={{ maxHeight: '400px', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#roomCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#roomCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Rooms
