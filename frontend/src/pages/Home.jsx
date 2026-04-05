// ─────────────────────────────────────────────────────────────
// AcademicCuratorPart2.jsx
// Contains: main page layout — Navbar, Hero, Listings,
//           Trust Bar, Testimonials, CTA, Footer
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import "../styles/AcademicCurator.css";
import {
  listings,
  testimonials,
  HeroIllustration,
  ListingCard,
  TestimonialCard,
} from "../data/HomeData.jsx";
import Navbar from "../components/Navbar.jsx";
// import Navbar from "../components/Navbar.jsx";

// ── Navbar ────────────────────────────────────────────────────

// function Navbar({ activeNav, setActiveNav }) {
//   const navLinks = ["Home", "Search", "Owners", "My Account"];
//   return (
//     <nav className="ac-nav">
//       <div className="ac-nav-logo">The Academic Curator</div>
//       <ul className="ac-nav-links">
//         {navLinks.map((l) => (
//           <li
//             key={l}
//             className={activeNav === l ? "active" : ""}
//             onClick={() => setActiveNav(l)}
//           >
//             {l}
//           </li>
//         ))}
//       </ul>
//       <div className="ac-nav-icons">
//         <span>🔔</span>
//         <span>♥</span>
//         <div className="ac-avatar">S</div>
//       </div>
//     </nav>
//   );
// }
<Navbar/>

// ── Hero Section ──────────────────────────────────────────────

function Hero() {
  return (
    <section className="ac-hero">
      <div>
        <div className="ac-hero-h1">
          Curating your<br />
          <em>Academic</em> journey.
        </div>
        <p className="ac-hero-sub">
          Premium student living spaces in Kolkata, strategically located near
          the city's most prestigious universities. Curated for focus, comfort,
          and community.
        </p>
        <div className="ac-search-bar">
          <span style={{ fontSize: 16 }}>🎓</span>
          <input className="ac-search-input" placeholder="Which college area?" />
          <div className="ac-search-divider" />
          <span style={{ fontSize: 14 }}>📍</span>
          <select className="ac-search-select">
            <option>Within 2km</option>
            <option>Within 5km</option>
            <option>Within 10km</option>
          </select>
          <button className="ac-search-btn">Find Rooms 🔍</button>
        </div>
      </div>

      <div className="ac-hero-visual">
        <div className="ac-hero-img-box">
          <HeroIllustration />
        </div>
        <div className="ac-hero-badge">
          <span className="big">500+</span>
          VERIFIED LISTINGS<br />IN KOLKATA
        </div>
      </div>
    </section>
  );
}

// ── Listings Section ──────────────────────────────────────────

function ListingsSection() {
  return (
    <section className="ac-section">
      <div className="ac-section-header">
        <div>
          <div className="ac-section-title">Curated for Excellence</div>
          <div className="ac-section-sub">
            Top rated accommodations near major Kolkata hubs.
          </div>
        </div>
        <a className="ac-view-all">View all listings →</a>
      </div>
      <div className="ac-cards">
        {listings.map((listing, i) => (
          <ListingCard key={i} listing={listing} />
        ))}
      </div>
    </section>
  );
}

// ── Trust Bar ─────────────────────────────────────────────────

function TrustBar() {
  return (
    <div className="ac-trust">
      <div className="ac-trust-left">
        <div className="ac-trust-icon">🛡️</div>
        <div className="ac-trust-text">
          <h3>Verified by Curator Standards</h3>
          <p>Every property undergoes a 50-point safety and amenity check.</p>
        </div>
      </div>
      <div className="ac-trust-stats">
        <div className="ac-trust-stat">
          <div className="num">100%</div>
          <div className="lbl">Safety Score</div>
        </div>
        <div className="ac-trust-stat">
          <div className="num">24h</div>
          <div className="lbl">Support Response</div>
        </div>
      </div>
    </div>
  );
}

// ── Testimonials Section ──────────────────────────────────────

function TestimonialsSection() {
  return (
    <section className="ac-testimonials">
      <div className="ac-testimonials-title">
        Voices of our <em>Alumni</em>
      </div>
      <div className="ac-testimonials-sub">
        Real stories from students who found their home with us.
      </div>
      <div className="ac-testi-grid">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>
    </section>
  );
}

// ── CTA Banner ────────────────────────────────────────────────

function CTABanner() {
  return (
    <div className="ac-cta">
      <div>
        <h2>Own a property in Kolkata?</h2>
        <p>
          Join 200+ partners who list their student accommodations with us.
          We handle the vetting, the students, and the management.
        </p>
        <div className="ac-cta-btns">
          <button className="ac-btn-primary">List Your Property 🏢</button>
          <button className="ac-btn-secondary">Partner Benefits</button>
        </div>
      </div>
      <div className="ac-cta-stats">
        <div className="ac-cta-stat">
          <span className="ac-cta-stat-icon">📈</span>
          <div className="ac-cta-stat-text">
            <div className="val">98% Occupancy</div>
            <div className="desc">Average for our partners</div>
          </div>
        </div>
        <div className="ac-cta-stat">
          <span className="ac-cta-stat-icon">💳</span>
          <div className="ac-cta-stat-text">
            <div className="val">Prompt Payments</div>
            <div className="desc">Automated rental collection</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Footer ────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="ac-footer">
      <div className="ac-footer-grid">
        <div className="ac-footer-brand">
          <div className="ac-footer-logo">The Academic Curator</div>
          <p className="ac-footer-tagline">
            Redefining student housing in the cultural capital of India.
            Elevating the academic lifestyle through premium spaces and community.
          </p>
        </div>

        <div className="ac-footer-col">
          <h4>Explore</h4>
          <ul>
            <li>About Us</li>
            <li>Verified Listings</li>
            <li>Safety Guidelines</li>
          </ul>
        </div>

        <div className="ac-footer-col">
          <h4>Support</h4>
          <ul>
            <li>Contact Support</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="ac-footer-col">
          <h4>Stay Connected</h4>
          <div className="ac-footer-social">
            <div className="ac-footer-social-btn">𝕏</div>
            <div className="ac-footer-social-btn">✉</div>
          </div>
        </div>
      </div>

      <div className="ac-footer-bottom">
        <span>© 2024 The Academic Curator. Premium Student Living in Kolkata.</span>
      </div>
    </footer>
  );
}

// ── Root Page Component ───────────────────────────────────────

export default function AcademicCurator() {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div className="ac-root">
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <Hero />
      <ListingsSection />
      <TrustBar />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
