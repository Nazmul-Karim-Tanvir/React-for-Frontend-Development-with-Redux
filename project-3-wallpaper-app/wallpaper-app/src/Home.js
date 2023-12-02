// Example Home component
import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

const Home = () => {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const wallpaperCollection = await firestore.collection('wallpapers').get();
      const wallpaperData = wallpaperCollection.docs.map((doc) => doc.data());
      setWallpapers(wallpaperData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {wallpapers.map((wallpaper) => (
        <div key={wallpaper.id}>
          <img src={wallpaper.imageUrl} alt={wallpaper.title} />
          <p>{wallpaper.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;