'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import './erupsiweb.css';

export default function ErupsibagWebsite() {
  return (
    <div className="erupsiweb-container">
      <div className="erupsiweb-box">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="erupsiweb-title"
        >
          Website Penjualan Toko Erupsibag
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="erupsiweb-desc"
        >
          Website ini dirancang menggunakan <span>React</span> dan{' '}
          <span>Firebase</span> untuk mempermudah penjualan produk tas
          dari toko <strong>Erupsibag</strong> secara online. Fitur yang tersedia meliputi katalog produk, galeri gambar, form pemesanan, dan info kontak langsung ke WhatsApp.
        </motion.p>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="/images/erupsi.jpg"
          alt="Preview Website Erupsibag"
          className="erupsiweb-image"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="erupsiweb-button-wrapper"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="erupsiweb-button"
            >
              ⬅ Kembali ke Halaman Utama
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
