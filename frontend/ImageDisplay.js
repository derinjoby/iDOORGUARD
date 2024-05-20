import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import HomeScreen from "./home.js"
import 'firebase/compat/storage'; // Import Firebase Storage
import { useNavigate } from 'react-router-dom';

// (Optional) Replace with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_pnITlzCHPCnVeNFqznIzbliAAZyAjXk",
    authDomain: "idoorguard.firebaseapp.com",
    projectId: "idoorguard",
    storageBucket: "idoorguard.appspot.com",
    messagingSenderId: "264412921274",
    appId: "1:264412921274:web:3def5a426e33702f6e7183"
  };
  

// Initialize Firebase app only once (outside the component)
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = firebase.storage();



function ImageDisplay({ imagePath }) { // Receive image path as a prop
    const [imageUrl, setImageUrl] = useState(null);
    const [error, setError] = useState(null); // Track potential errors
    const history = useNavigate();

    useEffect(() => {
        
        const getImage = async () => {
            
            try {
                const imageRef = storage.ref(imagePath); // Create reference based on path
                const url = await imageRef.getDownloadURL();
                setImageUrl(url);
            } catch (err) {
                setError(err); // Store error for handling
                console.error('Error fetching image:', err);
            }
            
        };
      
    
        getImage();
       
    }, [imagePath]); // Dependency on imagePath

   

    return (
       
        
        <div>
            {error ? (
                <p>Error: {error.message}</p>
            ) : imageUrl ? (
                <img src={imageUrl} alt="Image from Firebase Storage" />
            ) : (
                <p>Loading image...</p>
            )}
     
        
        
            <button className="btn btn-default border w-100 h-25 bg-light" onClick={()=>history(-1)}><h1>GO BACK</h1></button>
            </div>
       
  
        
    );
}

export default ImageDisplay;