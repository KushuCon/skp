import { Link } from 'react-router-dom';
import { BUSINESS } from '../config';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div className="footer__brand">
          <div className="footer__brandline">
            <span className="footer__mark">S</span>
            <span className="footer__name">{BUSINESS.name}</span>
          </div>
          <p className="footer__tag">
            One desk for every journey — flights, trains, buses, visa, passport
            and holiday packages, handled personally from start to finish.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Navigate</h4>
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/services" className="footer__link">Services</Link>
          <Link to="/contact" className="footer__link">Contact</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Legal</h4>
          <Link to="/privacy-policy" className="footer__link">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="footer__link">Terms &amp; Conditions</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Reach us</h4>
          <a href={BUSINESS.telLink} className="footer__link">{BUSINESS.phoneDisplay}</a>
          <a href={BUSINESS.mailLink()} target="_blank" rel="noreferrer" className="footer__link">
            {BUSINESS.email}
          </a>
          <a href={BUSINESS.whatsappLink()} target="_blank" rel="noreferrer" className="footer__link">
            WhatsApp us
          </a>
        </div>
      </div>

      <div className="footer__stub" aria-hidden="true">
        {Array.from({ length: 34 }).map((_, i) => <span key={i} />)}
      </div>

      <div className="wrap footer__bottom">
        <p className="footer__copy">
          © {BUSINESS.year} {BUSINESS.name}. All rights reserved. Proprietor: {BUSINESS.owner}.
        </p>
        <p className="footer__reg">Ticketing services powered by IATA-accredited platforms</p>
      </div>
    </footer>
  );
}
