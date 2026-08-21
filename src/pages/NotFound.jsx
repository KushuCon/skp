import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section style={{
      minHeight: '70vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: '160px 24px 80px', gap: 16,
    }}>
      <span className="eyebrow">404</span>
      <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>This route hasn't taken off.</h1>
      <p style={{ maxWidth: 380 }}>The page you're looking for doesn't exist. Let's get you back on track.</p>
      <Link to="/" className="btn btn-dark" style={{ marginTop: 12 }}>Back to home</Link>
    </section>
  );
}
