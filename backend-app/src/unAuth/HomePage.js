// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import './HomePage.css';

// Import Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import additional Font Awesome icons
import { faRobot, faDatabase, faMagic, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add icons to the library
library.add(fab, faRobot, faDatabase, faMagic, faCode, faMobileAlt);

const HomePage = () => {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid') || '';
    console.log('GCLID:', gclid); // Log the GCLID value
    localStorage.setItem('gclid', gclid);
  }, []);

  const slides = [
    {
      icon: ['fab', 'react'],
      title: 'React',
      description: 'Build interactive UIs with ease using React’s component-based architecture.',
    },
    {
      icon: ['fab', 'google'],
      title: 'Google Cloud',
      description: 'Leverage scalable cloud infrastructure and services to deploy your applications.',
    },
    {
      icon: 'database',
      title: 'Firebase',
      description: 'Utilize real-time databases and authentication services to manage your backend effortlessly.',
    },
    {
      icon: ['fab', 'github'],
      title: 'GitHub',
      description: 'Collaborate and manage your codebase efficiently with GitHub’s version control system.',
    },
    {
      icon: ['fab', 'python'],
      title: 'Python',
      description: 'Implement robust backend logic and data processing with Python’s versatile capabilities.',
    },
  ];

  const messages = [
    "Explore more ways to build—whether it's in the mountains, by the beach, or right in your apartment.",
    'Discover new horizons with AI-powered backend development.',
    'Unleash your creativity wherever you are.',
  ];

  const episodes = [
    {
      title: 'Introduction to Backend Development',
      description: 'Kickstart your journey by understanding the fundamentals of backend development.',
      videoId: 'dQw4w9WgXcQ',
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [slides.length]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(id);
    }
  };

  const handleNavClick = (id) => {
    scrollToSection(id);
  };

  return (
    <div className="unauth-homepage">
      {/* Navigation Bar */}
      <nav className="unauth-navbar">
        <div className="unauth-logo" onClick={() => handleNavClick('home')}>
          <FontAwesomeIcon icon="robot" className="unauth-header-icon" /> Backend App
        </div>
        <ul className="unauth-nav-links">
          <li className={activeNav === 'features' ? 'active' : ''} onClick={() => handleNavClick('features')}>
            Features
          </li>
          <li className={activeNav === 'tech-stack' ? 'active' : ''} onClick={() => handleNavClick('tech-stack')}>
            Tech Stack
          </li>
          <li className={activeNav === 'episodes' ? 'active' : ''} onClick={() => handleNavClick('episodes')}>
            Episodes
          </li>
          <li className={activeNav === 'testimonials' ? 'active' : ''} onClick={() => handleNavClick('testimonials')}>
            Testimonials
          </li>
          <li className={activeNav === 'cta' ? 'active' : ''} onClick={() => handleNavClick('cta')}>
            Get Started
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="unauth-hero-section" id="home">
        <div className="unauth-hero-content">
          <h1>
            <FontAwesomeIcon icon="robot" className="unauth-header-icon" /> Just Another Backend App Using AI
          </h1>
          <p>Leverage the power of AI to streamline your backend development process.</p>
          <button className="unauth-cta-button">Let's get started !</button>
        </div>
      </header>

      {/* Call to Action Section */}
      <section className="unauth-cta" id="cta">
        <h2>Dummy Section</h2>
        <button className="unauth-cta-button">Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer className="unauth-footer">
        <div className="unauth-footer-content">
          <p>&copy; {new Date().getFullYear()} AiBackend. All rights reserved.</p>
          <ul className="unauth-footer-links">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
