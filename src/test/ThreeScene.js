import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "katia-391415.firebaseapp.com",
    projectId: "katia-391415",
    storageBucket: "katia-391415.appspot.com",
    messagingSenderId: "360091417577",
    appId: "1:360091417577:web:040c730bd90b755cf8e978",
    measurementId: "G-TX6EE8PTC6"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const ThreeScene = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  function handleUpload() {
    console.log("st")
    if (selectedFile) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(`audio/${selectedFile.name}`);
      const uploadTask = fileRef.put(selectedFile);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Track upload progress
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error) => {
          // Handle upload error
          console.log("eror")
          console.log(error);
        },
        () => {
          console.log("nu")
          // Handle successful upload
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            // Do something with the downloadURL (e.g., save it to a database)
          });
        }
      );
    }

}

function handleChange(event) {
  setSelectedFile(event.target.files[0]);
}

  return (
    <div style={{marginTop: "400px"}}>
    <input type="file" accept="audio/*" onChange={handleFileChange} />
    <button onClick={handleUpload}>Upload</button>
    {uploadProgress > 0 && <div>Progress: {uploadProgress}%</div>}
    </div>
  );
}

export default ThreeScene;
