import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import RegisterandLogin from "./RegisterandLogin.js";
import HomeScreen from "./home.js";

import 'bootstrap/dist/css/bootstrap.min.css'
import ImageDisplay from './ImageDisplay';
function Passwordloginfirebase(){
  return(
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RegisterandLogin/>} />

          <Route path="home/" element={<HomeScreen/>} />

          <Route path="ImageDisplay/" element={<ImageDisplay/>}/>

          
          
          
          
          
         
      
        </Routes>
        <ImageDisplay imagePath="data/photo.jpg" />
        
        
        
         
      </div>
      

    </BrowserRouter>
    
  )
}



export default Passwordloginfirebase;
