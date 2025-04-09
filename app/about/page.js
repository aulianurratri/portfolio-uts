'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import '../styles/about.css';

export default function AboutSection() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Framer Motion'];
  const educationList = [
    {
      sekolah: 'Ma’soem University',
      jurusan: 'Program Studi Sistem Informasi Komputer (2022 – sekarang)',
    },
    {
      sekolah: 'SMAN 1 Cicalengka',
      jurusan: 'Mengikuti Ekstrakurikuler KIR (Lulusan 2022)',
    },
    {
      sekolah: 'SMPN 1 Nagreg',
      jurusan: 'Peringkat 3 Besar (Lulusan 2019)',
    },
    {
      sekolah: 'SDN Sawah Lega 1',
      jurusan: 'Peringkat 5 Besar (Lulusan 2016)',
    },
  ];

  const experiences = [
    {
      posisi: 'Desain Grafis KIR',
      detail: 'Membuat pamflet, sertifikat, dan buku tahunan untuk kegiatan Karya Ilmiah Remaja.',
    },
    {
      posisi: 'Bendahara Karang Taruna',
      detail: 'Bertanggung jawab atas pencatatan dan pelaporan keuangan organisasi pemuda.',
    },
  ];

  return (
    <>
      {/* Tentang Saya */}
      <section id="about" className="section section-about">
        <div className="about-container">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2, once: false }}
            className="section-title"
          >
            Tentang Saya
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ amount: 0.2, once: false }}
            className="about-content"
          >
            <Image
              src="/images/aulia.jpg"
              alt="Profile"
              width={180}
              height={180}
              className="about-image"
            />

            <div>
              <h3 className="about-name">Aulia Nur Ratri</h3>
              <p className="about-role">Mahasiswi Sistem Informasi</p>
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

      {/* Keahlian */}
      <section id="skills" className="section bg-skill">
        <div className="about-container">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2, once: false }}
            className="section-title"
          >
            Keahlian
          </motion.h2>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ amount: 0.2, once: false }}
                whileHover={{ scale: 1.1 }}
                className="skill-card"
              >
                <FaLaptopCode className="skill-icon" />
                <p className="skill-text">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Riwayat Pendidikan */}
      <section id="school" className="section bg-education">
        <div className="about-container">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2, once: false }}
            className="section-title"
          >
            Riwayat Pendidikan
          </motion.h2>

          <div className="timeline-grid">
            {educationList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ amount: 0.2, once: false }}
                whileHover={{ scale: 1.03 }}
                className="timeline-card"
              >
                <h3 className="timeline-title">
                  <FaGraduationCap /> {item.sekolah}
                </h3>
                <p className="timeline-detail">{item.jurusan}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pengalaman */}
      <section id="experience" className="section bg-experience">
        <div className="about-container">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.2, once: false }}
            className="section-title"
          >
            Pengalaman
          </motion.h2>

          <div className="timeline-grid">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ amount: 0.2, once: false }}
                whileHover={{ scale: 1.03 }}
                className="timeline-card"
              >
                <h3 className="timeline-title">
                  <FaBriefcase /> {item.posisi}
                </h3>
                <p className="timeline-detail">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
