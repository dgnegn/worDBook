import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import AppAds from './pages/ads/AppAds';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Privacy from './pages/privacy/Privacy';
import Navbar from './components/navbar/Navbar';  

const App = () => {  
 
  return ( 
      <BrowserRouter>    
        <Navbar/>
        <Routes>      
          <Route exact path='/' element={<Home/>} /> 
          <Route path='/privacy' element={<Privacy/>} /> 
          <Route path='/contact' element={<Contact/>} />
          <Route path='/app-ads' element={<AppAds/>} /> 
          <Route path='*' element={<PageNotFound/>} /> 
        </Routes>
      </BrowserRouter>
 
  );
}

export default App;
 
