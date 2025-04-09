'use client';

import { motion } from 'framer-motion';
import '../styles/portfolio.css';

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Website Penjualan Toko Erupsibag",
      desc: "Website berbasis React & Firebase untuk menjual tas lokal brand Erupsibag.",
      link: "/portfolio/erupsibag-website",
      year: "2023",
    },
    {
      title: "Website Penjualan Toko ANBeauty",
      desc: "Website e-commerce sederhana untuk brand skincare ANBeauty.",
      link: "/portfolio/anbeauty-website",
      year: "2024",
    },
    {
      title: "Aplikasi Stok Barang Erupsibag (Desktop)",
      desc: "Aplikasi stok barang berbasis VB.NET untuk manajemen inventaris toko.",
      link: "/portfolio/erupsibag-stok",
      year: "2024",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="portfolio-title"
        >
          Portfolio
        </motion.h2>

        <div className="portfolio-timeline">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="portfolio-card"
            >
              <div className="timeline-dot"></div>

              <p className="portfolio-year">{item.year}</p>
              <h3 className="portfolio-card-title">{item.title}</h3>
              <p className="portfolio-desc">{item.desc}</p>
              <a href={item.link} className="portfolio-link">
                Lihat Detail →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
