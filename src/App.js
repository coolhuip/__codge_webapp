import React from 'react'
import { Header, Footer, Blog, Features, Possibility, WhatCodge } from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatCodge />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App