import React, { useState, useEffect } from 'react';





import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, Gif } from './components';

import './App.css';
const App = () => {
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 5000);
  });

  return (
    !showLoader ?  (
      <Gif />
    ) : (
      <div className="App">
 <div className="gradient__bg">
           <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    )
  
);
  };
export default App;
