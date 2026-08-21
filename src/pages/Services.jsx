import { BUSINESS } from '../config';
import useReveal from '../hooks/useReveal';
import trainImg from '../assets/train.webp';
import './Services.css';

const SERVICES = [
  {
    code: 'FL',
    title: 'Flight Tickets',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop',
    desc: 'Domestic and international air ticketing across all major carriers.',
    points: [
      'Fare comparison across airlines before you book',
      'Group and family bookings handled together',
      'Reschedule, cancellation and refund follow-up',
      'Fare alerts for upcoming travel dates',
    ],
  },
  {
        code: 'TR',
    title: 'Train Reservations',
    img: trainImg,
    desc: 'IRCTC bookings including Tatkal, Premium Tatkal and general quota.',
    points: [
      'Rajdhani, Shatabdi and Duronto reservations',
      'Tatkal booking assistance on opening time',
      'Waitlist and RAC status tracking',
      'Group berth bookings for family travel',
    ],
  },
  {
    code: 'BS',
    title: 'Bus Bookings',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    desc: 'Intercity and interstate bus travel, AC, sleeper and Volvo.',
    points: [
      'Comparison across operators for best fare',
      'Seat selection assistance',
      'Boarding point confirmation the day before',
      'Return trip booked together on request',
    ],
  },
  {
    code: 'VS',
    title: 'Visa Assistance',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1000&auto=format&fit=crop',
    desc: 'Tourist, business and work visa filing support for major countries.',
    points: [
      'Document checklist prepared for your destination',
      'Application form filling assistance',
      'Appointment scheduling at visa centres',
      'Status tracking until the visa is issued',
    ],
  },
  {
    code: 'PP',
    title: 'Passport Services',
    img: 'https://images.unsplash.com/photo-1554224311-beee415c201f?q=80&w=1000&auto=format&fit=crop',
    desc: 'Fresh applications, renewals, and correction requests.',
    points: [
      'Passport Seva appointment booking',
      'Document verification before submission',
      'Tatkal passport guidance for urgent travel',
      'Address and name correction filing',
    ],
  },
  {
    code: 'HP',
    title: 'Holiday Packages',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
    desc: 'Fixed-departure and custom holiday packages, India and abroad.',
    points: [
      'Family, couple and solo itineraries',
      'Hotel and sightseeing bundled in one quote',
      'Domestic hill stations to international beaches',
      'Custom itinerary building on request',
    ],
  },
];

export default function Services() {
  useReveal();

  return (
    <div className="svc-page">
      <section className="svc-hero">
        <div className="wrap">
          <span className="eyebrow reveal">Full list</span>
          <h1 className="svc-hero__title reveal">Everything we take care of.</h1>
          <p className="svc-hero__desc reveal">
            Six services, one point of contact. Reach out for any of these and
            we'll walk you through what's needed and what it costs.
          </p>
        </div>
      </section>

      <section className="svc-list">
        <div className="wrap">
          {SERVICES.map((s, i) => (
            <div className={`svc-row reveal ${i % 2 ? 'svc-row--rev' : ''}`} key={s.code}>
              <div className="svc-row__media">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div className="svc-row__content">
                <span className="ticket__code svc-row__code">{s.code}</span>
                <h2 className="svc-row__title">{s.title}</h2>
                <p className="svc-row__desc">{s.desc}</p>
                <ul className="svc-row__points">
                  {s.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <a href={BUSINESS.whatsappLink(`Hi, I'd like to know more about ${s.title}.`)}
                   target="_blank" rel="noreferrer" className="btn btn-dark svc-row__cta">
                  Ask about {s.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
