

import { tagIcons } from "../data/ListingData";
import { useNavigate } from "react-router-dom";

export default function ListingCard({ listing, liked, onToggleLike }) {
  const navigate=useNavigate();
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(80,70,160,0.10)",
        border: "1.5px solid #ede8ff",
        maxWidth: 420,
        fontFamily: "inherit",
      }}
    >
      {/* ── Image ── */}
      <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
        <img
          src={listing.images?.[0]}
          alt={listing.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Like button — circle in top-right */}
        {/* <button
          onClick={() => onToggleLike(listing.id)}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "#fff",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.13)",
          }}
        >
          <svg
            style={{
              width: 18,
              height: 18,
              color: liked ? "#e53e3e" : "#bbb",
              fill: liked ? "#e53e3e" : "none",
              transition: "color 0.2s, fill 0.2s",
            }}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button> */}
      </div>

      {/* ── Info ── */}
      <div style={{ padding: "18px 20px 20px" }}>

        {/* Title + Price */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 4 }}>
          <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: "#111", lineHeight: 1.3, flex: 1 }}>
            {listing.title}
          </h3>
          <div style={{ textAlign: "right", marginLeft: 12, flexShrink: 0 }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: "#4f46e5" }}>
              ₹{listing.price}
            </span>
            <p style={{ margin: 0, fontSize: 10, color: "#999", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              per month
            </p>
          </div>
        </div>

        {/* Subtitle / description */}
        {listing.subtitle && (
          <p style={{ margin: "0 0 8px", fontSize: 13, color: "#888" }}>
            {listing.subtitle}
          </p>
        )}

        {/* Location */}
        <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#555", marginBottom: 14 }}>
          <span style={{ fontSize: 15 }}>📍</span>
          {listing.location}
        </div>

        {/* Amenity tag chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
          {listing.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "#ede8ff",
                color: "#5b47d6",
                borderRadius: 20,
                padding: "5px 13px",
                fontSize: 12,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span>{tagIcons[tag] || "•"}</span>
              {tag}
            </span>
          ))}
        </div>

        {/* Full-width outlined CTA */}
        <button
        onClick={()=>navigate(`/propertydetails/${listing._id}`)}
          style={{
            width: "100%",
            padding: "13px 0",
            border: "1.5px solid #a78bfa",
            borderRadius: 14,
            background: "transparent",
            color: "#5b47d6",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background 0.18s, color 0.18s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#ede8ff";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          View Curated Details
        </button>
      </div>
    </div>
  );
}
