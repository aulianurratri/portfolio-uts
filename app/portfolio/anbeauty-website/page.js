'use client';
import './anbeauty.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AnbeautyWebsite() {
  return (
    <div className="anbeauty-wrapper">
      <div className="anbeauty-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="anbeauty-title"
        >
          Website Penjualan Toko ANBeauty
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="anbeauty-desc"
        >
          Website ini dibuat untuk toko <strong>ANBeauty</strong> yang menjual produk perawatan dan kecantikan. 
          Website ini menyediakan katalog produk, deskripsi manfaat, serta fitur pemesanan langsung melalui WhatsApp.
        </motion.p>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="/images/ANBeauty.png"
          alt="Preview Website ANBeauty"
          className="anbeauty-img"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="anbeauty-button-wrapper"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="anbeauty-button"
            >
              ⬅ Kembali ke Halaman Utama
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
