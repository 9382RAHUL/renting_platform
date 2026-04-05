import { tagIcons } from "../data/ListingData";

export default function ListingCard({ listing, liked, onToggleLike }) {
  return (
    <div className="listing-card group">
      {/* ── Image ── */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className={`card-image ${listing.imgStyle}`}
        />

        {/* Badge */}
        <span className={`badge-pill ${listing.badgeColor}`}>
          {listing.badge}
        </span>

        {/* Like button */}
        <button onClick={() => onToggleLike(listing.id)} className="like-btn">
          <svg
            className={`w-4 h-4 transition-colors ${
              liked ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
            fill={liked ? "currentColor" : "none"}
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
        </button>
      </div>

      {/* ── Info ── */}
      <div className="p-4">
        {/* Title + Price */}
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-base font-bold text-gray-900 leading-tight">
            {listing.title}
          </h3>
          <div className="text-right ml-3 flex-shrink-0">
            <span className="text-base font-extrabold text-indigo-700">
              {listing.price}
            </span>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">
              per month
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
          <svg className="w-3 h-3 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
          {listing.location} • {listing.distance}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {listing.tags.map((tag) => (
            <span key={tag} className="tag-chip">
              <span>{tagIcons[tag] || "•"}</span>
              {tag}
            </span>
          ))}
        </div>

        <button className="details-btn">View Curated Details</button>
      </div>
    </div>
  );
}
