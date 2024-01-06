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

  return (
    <div>
      <div className='row'>
          <div className='col-md-3'>
            <div className="card m-auto mt-4 shadow" style={{ width: '18rem' }}>
              {imageUrls.length > 0 && <img src={imageUrls[0]} className="card-img-top" alt="Card image cap" />}
              <div className="card-body">
                <h5 className="card-title">Double Bed</h5>
                <p className="card-text">Ultimate Luxury and Convenience: Enjoy 24/7 AC Service with Television and High-Speed WiFi</p>
                <a href="#" className="btn btn-primary">Packages</a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card m-auto mt-4 shadow" style={{ width: '18rem' }}>
              {imageUrls.length > 0 && <img src={imageUrls[1]} className="card-img-top" alt="Card image cap" />}
              <div className="card-body">
                <h5 className="card-title"> Tripple Bed</h5>
                <p className="card-text">Ultimate Luxury and Convenience: Enjoy 24/7 AC Service with Television and High-Speed WiFi</p>
                <a href="#" className="btn btn-primary">Packages</a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card m-auto mt-4 shadow" style={{ width: '18rem' }}>
              {imageUrls.length > 0 && <img src={imageUrls[2]} className="card-img-top" alt="Card image cap" />}
              <div className="card-body">
                <h5 className="card-title">Single Bed Premium</h5>
                <p className="card-text">Ultimate Luxury and Convenience: Enjoy 24/7 AC Service with Television and High-Speed WiFi</p>
                <a href="#" className="btn btn-primary">Packages</a>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card m-auto mt-4 shadow" style={{ width: '18rem' }}>
              {imageUrls.length > 0 && <img src={imageUrls[3]} className="card-img-top" alt="Card image cap" />}
              <div className="card-body">
                <h5 className="card-title">Single Bed</h5>
                <p className="card-text">Ultimate Luxury and Convenience: Enjoy 24/7 AC Service with Television and High-Speed WiFi</p>
                <a href="#" className="btn btn-primary">Packages</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Rooms
