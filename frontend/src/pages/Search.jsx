import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AcademicCurator.css"
import { listings } from "../data/ListingData";

// const listings = [
//   {
//     id: 1,
//     badge: "VERIFIED",
//     badgeColor: "bg-teal-500",
//     title: "The Scholar's Suite",
//     price: "₹18,500",
//     location: "Salt Lake, Sector V",
//     distance: "0.8km from Techno India",
//     tags: ["High Speed WiFi", "Bi-weekly Cleaning", "Meal Plans"],
//     liked: true,
//     image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
//     imgStyle: "object-cover",
//   },
//   {
//     id: 2,
//     badge: "ONLY 2 LEFT",
//     badgeColor: "bg-orange-500",
//     title: "Heritage Residency",
//     price: "₹22,000",
//     location: "Park Street",
//     distance: "0.3km from St. Xavier's",
//     tags: ["Laundry Suite", "24/7 Concierge"],
//     liked: false,
//     image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
//     imgStyle: "object-cover",
//   },
//   {
//     id: 3,
//     badge: "BUDGET FRIENDLY",
//     badgeColor: "bg-teal-600",
//     title: "The Hive Community",
//     price: "₹9,500",
//     location: "Jadavpur",
//     distance: "1.2km from Jadavpur University",
//     tags: ["Social Lounge", "Shared Pantry"],
//     liked: false,
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
//     imgStyle: "object-cover brightness-50",
//   },
//   {
//     id: 4,
//     badge: "PREMIUM PICK",
//     badgeColor: "bg-teal-500",
//     title: "The Zenith Studio",
//     price: "₹24,000",
//     location: "Ballygunge",
//     distance: "1.5km from Calcutta University",
//     tags: ["In-house Gym", "Airport Shuttle"],
//     liked: false,
//     image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
//     imgStyle: "object-cover brightness-75",
//   },
// ];

const tagIcons = {
  "High Speed WiFi": "📶",
  "Bi-weekly Cleaning": "🧹",
  "Meal Plans": "🍽️",
  "Laundry Suite": "👕",
  "24/7 Concierge": "🔔",
  "Social Lounge": "🛋️",
  "Shared Pantry": "🥘",
  "In-house Gym": "💪",
  "Airport Shuttle": "🚌",
};

export default function Search() {
  const [priceMin] = useState("₹8k");
  const [priceMax] = useState("₹25k+");
  const [sliderValue, setSliderValue] = useState(45);
  const [locations, setLocations] = useState({
    "Salt Lake Sector V": true,
    "Park Street Area": false,
    "Jadavpur Precincts": false,
  });
  const [accommodationStyle, setAccommodationStyle] = useState("Private Studio");
  const [likedCards, setLikedCards] = useState({ 1: true });

  const toggleLocation = (loc) =>
    setLocations((prev) => ({ ...prev, [loc]: !prev[loc] }));

  const toggleLike = (id) =>
    setLikedCards((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
     

     <Navbar/>
      <div className="flex pt-20 py-10 gap-8 bg-[#f6f5fb]  ">
        {/* ── SIDEBAR ── */}
       <div className="ml-10 w-[25vw] ">


        <aside className=" p-40">
  {/* Filter Panel */}
  <div className="bg-[#f3f2fb] border border-[#e5e3f5] shadow-none rounded-3xl p-20 shadow-lg border border-gray-100 ">

    <h2 className="text-lg font-bold text-gray-900 mb-5 ml-16">
      Curate Search
    </h2>

    {/* Price Range */}
    <div className="mb-6">
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
        Price Range (Monthly)
      </p>

      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 bg-indigo-50 border border-indigo-200 rounded-xl px-3 py-2 text-sm font-semibold text-indigo-700 text-center shadow-sm">
          ₹{priceMin}
        </div>

        <span className="text-gray-300 text-lg">—</span>

        <div className="flex-1 bg-indigo-50 border border-indigo-200 rounded-xl px-3 py-2 text-sm font-semibold text-indigo-700 text-center shadow-sm">
          ₹{priceMax}
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
        className="w-full accent-indigo-600 cursor-pointer"
      />
    </div>

    {/* Strategic Locations */}
    <div className="mb-6 ml-20">
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
        Strategic Locations
      </p>

      {Object.entries(locations).map(([loc, checked]) => (
        <label
          key={loc}
          className="flex items-center gap-3 text-sm text-gray-700 mb-2 cursor-pointer group"
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={() => toggleLocation(loc)}
            className="accent-indigo-600 w-4 h-4"
          />
          <span className="group-hover:text-indigo-600 transition">
            {loc}
          </span>
        </label>
      ))}
    </div>

    {/* Accommodation Style */}
    <div className="mb-6">
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
        Accommodation Style
      </p>

      {["Private Studio", "Twin Sharing", "Premium Dormitory"].map((style) => (
        <button
          key={style}
          onClick={() => setAccommodationStyle(style)}
          className={`w-full text-left text-sm px-4 py-2.5 rounded-xl mb-2 transition-all duration-200 ${
            accommodationStyle === style
              ? "bg-indigo-100 text-indigo-700 font-semibold shadow-inner"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {style}
        </button>
      ))}
    </div>

    {/* College Proximity */}
    <div className="mb-6">
      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
        College Proximity
      </p>

      <div className="w-full bg-gray-50 border border-[#c9c6f5] text-[#5b5bd6] hover:bg-[#5b5bd6] hover:text-white rounded-xl px-4 py-2.5 text-sm text-gray-700 flex justify-between items-center cursor-pointer hover:border-indigo-300 transition">
        Within 2km of Presidency University
        <span className="text-gray-400">▾</span>
      </div>
    </div>

    {/* Button */}
    <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-sm py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
      Apply Selection
    </button>
  </div>

  {/* Map Widget */}
  <div className="rounded-1xl overflow-hidden relative h-40 shadow-lg border border-gray-100 group">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
      alt="Map"
      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-300"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
      <span className="text-white text-xs font-semibold tracking-widest uppercase flex items-center gap-1">
        Interactive Map
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </span>
    </div>
  </div>
</aside>
       </div>


        {/* ── MAIN CONTENT ── */}
        <main className="flex-1 ">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Curated Findings
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                24 Academic residences matching your intellectual profile.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <button className="p-2 rounded-lg bg-indigo-600 text-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 14h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" />
                </svg>
              </button>
              <button className="p-2 rounded-lg border border-[#c9c6f5] text-[#5b5bd6] hover:bg-[#5b5bd6] hover:text-white text-gray-400 hover:border-indigo-300 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-44 ">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-2xl overflow-hidden bg-white rounded-2xl border border-[#e9e7f5] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-44  overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className={`w-full h-full ${listing.imgStyle} group-hover:scale-105 transition-transform duration-500`}
                  />
                  {/* Badge */}
                  <span
                    className={`absolute top-3 left-3 ${listing.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-widest uppercase`}
                  >
                    {listing.badge}
                  </span>
                  {/* Heart */}
                  <button
                    onClick={() => toggleLike(listing.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  >
                    <svg
                      className={`w-4 h-4 transition-colors ${
                        likedCards[listing.id] ? "text-red-500 fill-red-500" : "text-gray-400"
                      }`}
                      fill={likedCards[listing.id] ? "currentColor" : "none"}
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

                {/* Info */}
                <div className="p-4">
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

                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                    <svg className="w-3 h-3 text-indigo-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                    {listing.location} • {listing.distance}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {listing.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-[11px] font-medium px-2 py-1 rounded-full"
                      >
                        <span>{tagIcons[tag] || "•"}</span>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full border h-10  border-[#c9c6f5] text-[#5b5bd6] hover:bg-[#5b5bd6] hover:text-white hover:border-indigo-400 hover:text-indigo-600 text-gray-600 text-xs font-bold uppercase tracking-widest py-2.5 rounded-xl transition-colors">
                    View Curated Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ── Banner ── */}
          <div className=" h-44 bg-teal-100 rounded-2xl px-8 py-8 flex items-center justify-around mx-20 gap-6">
            <div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-2">
                Guaranteed Curated Living
              </h3>
              <p className="text-sm text-gray-600 max-w-md leading-relaxed">
                Every listing on our platform undergoes a 50-point quality check by academic
                consultants. We prioritize your study environment.
              </p>
            </div>
            <button className=" bg-teal-700 hover:bg-teal-800 text-white font-semibold text-2xl px-10 py-10 w-60 h-14 rounded-2xl transition-colors">
              Learn About Safety
            </button>
          </div>
        </main>
      </div>

      {/* ── FOOTER ── */}
      {/*  */}
      <Footer/>
    </div>
  );
}
