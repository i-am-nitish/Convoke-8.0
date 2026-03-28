import { useEffect, useRef, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/theme.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Hackathon from './components/Hackathon';
import Sponsors from './components/Sponsors';
import Gallery from './components/Gallery';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import EscapeRoomChat from './components/EscapeRoomChat';

function LandingPage() {
  const observerRef = useRef(null);

  const setupObserver = useCallback(() => {
    if (observerRef.current) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(setupObserver, 100);
    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [setupObserver]);

  return (
    <div className="app">
      {/* Global CRT effects */}
      <div className="crt-scanlines"></div>
      <div className="crt-vignette"></div>

      <Navbar />
      <Hero />
      <About />
      <Events />
      <Schedule />
      <Hackathon />
      <Sponsors />
      {/* <Gallery /> */}
      <Team />
      <FAQ />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/chat" element={<EscapeRoomChat />} />
    </Routes>
  );
}

export default App;
