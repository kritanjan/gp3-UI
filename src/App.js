import React from 'react'


import { Footer, Blog, Possibility, WhatGPT3, Header, Features } from './containers'
import { Cta, Brand, Navbar } from './components'

import './app.css'
export default function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}
