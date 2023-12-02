// Example Upload component
import React, { useState } from 'react';
import { storage } from './firebase';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);

    fileRef.put(file).then(() => {
      console.log('File uploaded successfully!');
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;