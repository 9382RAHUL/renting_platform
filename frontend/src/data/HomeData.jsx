// ── Static Data ───────────────────────────────────────────────

export const listings = [
  {
    name: "The Victoria Residence",
    price: "₹18,500",
    badge: "PREMIUM",
    badgeClass: "premium",
    location: "Bhawanipur, Kolkata",
    tags: ["WIFI-6", "MEAL PLAN", "AC"],
    distance: "0.8km from St. Xavier's",
    color1: "#1a1f5e",
    color2: "#2d3480",
  },
  {
    name: "Presidency Heights",
    price: "₹12,000",
    badge: "BEST VALUE",
    badgeClass: "bestval",
    location: "College Street",
    tags: ["LIBRARY ACCESS", "24/7 SECURITY"],
    distance: "0.3km from Calcutta University",
    color1: "#1e2a3a",
    color2: "#2d3e50",
  },
  {
    name: "The Heritage Studio",
    price: "₹15,000",
    badge: null,
    badgeClass: null,
    location: "Jadavpur",
    tags: ["GYM", "LAUNDRY"],
    distance: "1.2km from Jadavpur University",
    color1: "#0a3d3a",
    color2: "#1a5c56",
  },
];

export const testimonials = [
  {
    text: "Finding a place near St. Xavier's was daunting until I found Curator. The room is quiet, the WiFi is stellar, and the community is amazing.",
    name: "Priya S.",
    role: "Commerce Student",
    color: "#6c63ff",
  },
  {
    text: "As an international student, the verification process gave me so much peace of mind. Highly recommend for safe housing.",
    name: "Rahul M.",
    role: "Engineering Student",
    color: "#e05c5c",
  },
  {
    text: "The meal plan options are actually good! It feels less like a hostel and more like a home away from home.",
    name: "Ananya K.",
    role: "Arts Student",
    color: "#3ecfb2",
  },
  {
    text: "Transparent pricing. No hidden deposits. The best platform in Kolkata for student rentals.",
    name: "Arjun D.",
    role: "PhD Scholar",
    color: "#f5a623",
  },
];

// ── SVG Illustrations ─────────────────────────────────────────

export function RoomIllustration({ color1, color2 }) {
  const gradId = `room-grad-${color1.replace("#", "")}`;
  return (
    <svg
      viewBox="0 0 300 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="300" height="200" fill={`url(#${gradId})`} />

      {/* Bookshelf */}
      <rect x="20"  y="120" width="100" height="65" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="30"  y="110" width="80"  height="10" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="40"  y="130" width="60"  height="5"  rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="40"  y="140" width="50"  height="5"  rx="1" fill="rgba(255,255,255,0.10)" />
      <rect x="40"  y="150" width="55"  height="5"  rx="1" fill="rgba(255,255,255,0.10)" />

      {/* Desk */}
      <rect x="150" y="80"  width="120" height="105" rx="4" fill="rgba(255,255,255,0.07)" />
      <rect x="160" y="90"  width="60"  height="40"  rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="160" y="136" width="100" height="4"   rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="160" y="146" width="80"  height="4"   rx="2" fill="rgba(255,255,255,0.09)" />
      <rect x="160" y="156" width="90"  height="4"   rx="2" fill="rgba(255,255,255,0.09)" />

      {/* Lamp glow */}
      <circle cx="230" cy="50" r="30" fill="rgba(255,255,255,0.04)" />
      <circle cx="230" cy="50" r="18" fill="rgba(255,255,255,0.06)" />

      {/* Lamp pole */}
      <rect x="60" y="30" width="4" height="85" rx="2" fill="rgba(255,255,255,0.10)" />
      <rect x="52" y="30" width="20" height="14" rx="2" fill="rgba(255,255,255,0.20)" />
    </svg>
  );
}

export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="hero-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#1a1f5e" />
          <stop offset="100%" stopColor="#2d3480" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill="url(#hero-grad)" />

      {/* Table surface */}
      <rect x="60"  y="180" width="280" height="12" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="80"  y="192" width="10"  height="50" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="310" y="192" width="10"  height="50" rx="2" fill="rgba(255,255,255,0.08)" />

      {/* Books */}
      <rect x="80"  y="145" width="18" height="35" rx="2" fill="#3ecfb2" opacity="0.8" />
      <rect x="100" y="148" width="16" height="32" rx="2" fill="#f5a623" opacity="0.7" />
      <rect x="118" y="143" width="14" height="37" rx="2" fill="#6c63ff" opacity="0.8" />

      {/* Laptop */}
      <rect x="200" y="145" width="90" height="58" rx="4" fill="rgba(255,255,255,0.12)" />
      <rect x="205" y="150" width="80" height="48" rx="2" fill="rgba(62,207,178,0.15)"  />
      <rect x="195" y="203" width="100" height="8" rx="2" fill="rgba(255,255,255,0.10)" />

      {/* Person 1 */}
      <circle cx="145" cy="110" r="28" fill="rgba(255,255,255,0.10)" />
      <circle cx="145" cy="95"  r="18" fill="#e8b88a" />
      <path d="M115 170 Q115 135 145 135 Q175 135 175 170" fill="#3ecfb2" opacity="0.9" />

      {/* Person 2 */}
      <circle cx="255" cy="100" r="28" fill="rgba(255,255,255,0.10)" />
      <circle cx="255" cy="85"  r="18" fill="#c8956c" />
      <path d="M225 158 Q225 125 255 125 Q285 125 285 158" fill="#6c63ff" opacity="0.9" />

      {/* Decorative dots */}
      <circle cx="50"  cy="50"  r="3" fill="rgba(255,255,255,0.3)"   />
      <circle cx="350" cy="80"  r="2" fill="rgba(255,255,255,0.2)"   />
      <circle cx="370" cy="40"  r="4" fill="rgba(62,207,178,0.4)"    />
      <circle cx="30"  cy="200" r="3" fill="rgba(245,166,35,0.4)"    />
    </svg>
  );
}

// ── Reusable Card Sub-Component ───────────────────────────────

export function ListingCard({ listing }) {
  const { name, price, badge, badgeClass, location, tags, distance, color1, color2 } = listing;
  return (
    <div className="ac-card">
      <div className="ac-card-img">
        <div className="ac-card-img-inner">
          <RoomIllustration color1={color1} color2={color2} />
        </div>
        {badge && <div className={`ac-badge ${badgeClass}`}>{badge}</div>}
      </div>
      <div className="ac-card-body">
        <div className="ac-card-top">
          <div className="ac-card-name">{name}</div>
          <div className="ac-card-price">{price} <span>/ month</span></div>
        </div>
        <div className="ac-card-loc">📍 {location}</div>
        <div className="ac-tags">
          {tags.map((t, j) => <span key={j} className="ac-tag">{t}</span>)}
        </div>
        <div className="ac-card-footer">
          <span>{distance}</span>
          <div className="ac-card-arrow">›</div>
        </div>
      </div>
    </div>
  );
}

// ── Testimonial Card Sub-Component ────────────────────────────

export function TestimonialCard({ testimonial }) {
  const { text, name, role, color } = testimonial;
  return (
    <div className="ac-testi-card">
      <div className="ac-testi-quote">"</div>
      <p className="ac-testi-text">"{text}"</p>
      <div className="ac-testi-user">
        <div className="ac-testi-avatar" style={{ background: color }}>
          {name[0]}
        </div>
        <div>
          <div className="ac-testi-name">{name}</div>
          <div className="ac-testi-role">{role}</div>
        </div>
      </div>
    </div>
  );
}