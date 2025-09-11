import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Tutorials from './components/Tutorials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const LandingPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Tutorials />
      <FAQ />
      <Footer />
    </main>
  );
};

export default LandingPage;
