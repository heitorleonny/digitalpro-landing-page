'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const LandingPage = () => {
  return (
    <>
    <Header />
    <Hero />
    <Services />
    <About />
    <Contact />
    <Footer />
    </>
  );
};

export default LandingPage;