import React from 'react';
import { useBackToTop } from './hooks/useCustomHooks';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facts from './components/Facts';
import Menu from './components/Menu';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './styles/globals.css';
import styles from './styles/globals.css';

function App() {
  const { isVisible, scrollToTop } = useBackToTop();

  return (
    <div className="App">
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Facts Section */}
      <Facts />

      {/* Menu Section */}
      <section id="menu">
        <Menu />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Team Section */}
      <section id="team">
        <Team />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      {isVisible && (
        <button
          className={styles.backToTop}
          onClick={scrollToTop}
          title="Back to top"
          aria-label="Back to top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
