import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import WhyChooseMe from './components/Sections/WhyChooseMe';
import Gallery from './components/Sections/Gallery';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-grey">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseMe />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
