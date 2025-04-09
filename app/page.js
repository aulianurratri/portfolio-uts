'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import './styles/homepage.css';

export default function Home() {
  return (
    <>
    <section id="hero" className="hero-section">
  <div className="hero-content">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero-title"
    >
      Hi, I’m Aulia.
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 1 }}
      className="hero-subtitle"
    >
      Scroll down to know me better.
    </motion.p>

    <motion.a
      href="#about"
      className="scroll-indicator"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      ⬇️ Tentang Saya
    </motion.a>
  </div>
  <div className="floating-decor decor-1"></div>
  <div className="floating-decor decor-2"></div>
  <div className="hero-wave">
  <svg viewBox="0 0 1440 320">
    <path fill="var(--accent-color)" fillOpacity="1"
      d="M0,192L60,170.7C120,149,240,107,360,117.3C480,128,600,192,720,197.3C840,203,960,149,1080,117.3C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
    </path>
  </svg>
</div>
<div className="sparkle sparkle-1">✦</div>
<div className="sparkle sparkle-2">✧</div>
</section>

      <section id="about" className="section-about">
        <div className="about-container">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-title"
          >
            Tentang Saya
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <Image
              src="/images/aulia.jpg"
              width={220}
              height={220}
              alt="Foto Aulia"
              className="about-image"
            />

            <div className="about-text">
              <h3 className="about-name">Aulia Nur Ratri</h3>
              <p className="about-role">
                Mahasiswi Sistem Informasi, Ma&#39;soem University
              </p>
              <p className="about-description">
                Saya adalah lulusan SMAN 1 Cicalengka tahun 2022. Saat ini saya menempuh pendidikan di
                <strong> Ma&#39;soem University</strong> jurusan <strong>Sistem Informasi</strong>. Saya memiliki
                pengalaman dalam desain grafis untuk acara Karya Ilmiah Remaja (KIR) seperti pamflet, sertifikat olimpiade,
                dan desain buku tahunan. Saya juga menjabat sebagai <strong>bendahara Karang Taruna</strong> yang
                bertanggung jawab terhadap pencatatan keuangan.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
