'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../styles/theme.css';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Set theme saat pertama kali render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode ? 'dark' : 'light';
    setDarkMode(!darkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          MyPortfolio
        </Link>

        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu desktop-menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/chatbot">Chatbot</Link></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu with framer-motion */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              key="mobileMenu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="navbar-menu mobile-menu active"
            >
              <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
              <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              <li><Link href="/chatbot" onClick={() => setMenuOpen(false)}>Chatbot</Link></li>
              <li>
                <button className="theme-toggle" onClick={() => { toggleTheme(); setMenuOpen(false); }}>
                  {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                </button>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
