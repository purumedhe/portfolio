import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Skills from './components/Skills';
import Recognition from './components/Recognition';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-slate-900">
      <Navigation scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <FeaturedProjects />
      <Skills />
      <Recognition />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
