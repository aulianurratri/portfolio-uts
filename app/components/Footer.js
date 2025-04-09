// app/components/Footer.js
import '../styles/theme.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Aulia.
        </p>
      </div>
    </footer>
  );
}
