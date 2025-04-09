'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import './erupsistok.css';

export default function StokErupsibagDesktop() {
  return (
    <div className="erupsi-wrapper">
      <div className="erupsi-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="erupsi-title"
        >
          Aplikasi Stok Barang Erupsibag (Desktop)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="erupsi-desc"
        >
          Aplikasi ini dibuat untuk mengelola stok barang toko <strong>Erupsibag</strong>. 
          Dibangun menggunakan <span>Visual Basic .NET</span> dan 
          <span> SQLPlus</span> untuk menyimpan data barang, harga dasar, harga jual, serta laporan stok. 
          Aplikasi ini digunakan secara offline dalam bentuk desktop application.
        </motion.p>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="/images/erupsi-dekstop.jpeg"
          alt="Preview Aplikasi Stok Erupsibag"
          className="erupsi-img"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="erupsi-button-wrapper"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="erupsi-button"
            >
              ⬅ Kembali ke Halaman Utama
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
