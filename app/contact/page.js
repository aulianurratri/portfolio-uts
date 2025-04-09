"use client";

import React, { useState, useEffect } from "react";
import "../styles/contact.css";
import { Star } from "lucide-react";
import { simpanFeedback, ambilFeedback } from "../lib/firebase_feedback";
import { addComment, listenComments } from "../lib/firebase_comments";
import { simpanRating, ambilRating } from "../lib/firebase_rating";

const ContactPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    ambilFeedback((data) => setFeedbacks(data.reverse()));
    listenComments((data) => setComments(data.reverse()));
    ambilRating((data) => {
      setRatings(data.reverse());
      const total = data.reduce((acc, item) => acc + parseInt(item.rating), 0);
      setAverageRating(data.length > 0 ? total / data.length : 0);
      setRatingCount(data.length);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const nama = form.nama.value.trim();
    const email = form.email.value.trim();
    const pesan = form.pesan.value.trim();
    if (!nama || !email || !pesan) return;
    await simpanFeedback({ nama, email, pesan });
    form.reset();
  };

  const handleComment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const nama = form.nama.value.trim();
    const komentar = form.komentar.value.trim();
    if (!nama || !komentar) return;
    await addComment({ nama, komentar });
    form.reset();
  };

  const handleRating = async (e) => {
    e.preventDefault();
    const form = e.target;
    const nama = form.nama.value.trim();
    if (!nama || !rating) return;
    const komentar = form.komentar.value.trim();
    await simpanRating({ nama, rating, komentar });
    setRating(0);
    setHover(null);
    form.reset();
  };

  return (
    <div className="contact-page-container">
      <h1 className="contact-title">Hubungi Saya</h1>

      {/* Section 1: Masukan & Kritik */}
      <section className="contact-section">
        <h2 className="section-title">Masukan & Kritik</h2>
        <form className="contact-form" id="feedback-form" onSubmit={handleSubmit}>
          <input type="text" name="nama" placeholder="Nama" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="pesan" placeholder="Tulis pesanmu..." rows="5" required />
          <button type="submit">Kirim</button>
        </form>
        <div id="feedback-list" className="data-display">
          {feedbacks.map((item) => (
            <div className="entry-box" key={item.id}>
              <strong>{item.nama}</strong> <span style={{ opacity: 0.6 }}>({item.email})</span>
              <p>{item.pesan}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Komentar */}
      <section className="contact-section">
        <h2 className="section-title">Komentar</h2>
        <form className="comment-form" id="comment-form" onSubmit={handleComment}>
          <input type="text" name="nama" placeholder="Nama" required />
          <textarea name="komentar" placeholder="Tulis komentar..." rows="4" required />
          <button type="submit">Kirim Komentar</button>
        </form>
        <div id="comment-list" className="data-display">
          {comments.map((item) => (
            <div className="entry-box" key={item.id}>
              <strong>{item.nama}</strong>
              <p>{item.komentar}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Rating */}
      <section className="contact-section">
        <h2 className="section-title">Beri Rating Website Ini</h2>

        <div className="rating-summary">
          <strong>⭐ {averageRating.toFixed(1)} / 5</strong> dari {ratingCount} penilaian
        </div>

        <form className="rating-form" id="rating-form" onSubmit={handleRating}>
          <input type="text" name="nama" placeholder="Nama" required />

          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((index) => (
              <button
                type="button"
                key={index}
                className={`star-button ${index <= (hover || rating) ? "active" : ""}`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
              >
                <Star size={24} />
              </button>
            ))}
            <input type="hidden" name="rating" value={rating} required />
          </div>

          <textarea name="komentar" placeholder="Komentar singkat (opsional)" rows="3" />
          <button type="submit">Kirim Rating</button>
        </form>

        <div id="rating-list" className="data-display">
          {ratings.map((item) => (
            <div className="entry-box" key={item.id}>
              <strong>{item.nama}</strong> memberi rating ⭐ {item.rating}
              {item.komentar && <p>{item.komentar}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
