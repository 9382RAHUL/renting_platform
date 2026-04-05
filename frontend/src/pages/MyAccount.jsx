import { useState } from "react";
import Navbar from "../components/Navbar";

const sidebarLinks = [
  { icon: "🔍", label: "Discover" },
  { icon: "🔖", label: "Saved Listings" },
  { icon: "📄", label: "Applications" },
  { icon: "👤", label: "My Account", active: true },
];

const tags = ["Post-Grad", "Economics Major", "Quiet Study Seeker"];

const savedListings = [
  {
    id: 1,
    name: "The Heritage Attic",
    price: "₹14k",
    dist: "0.8 km from University",
    amenities: ["High Speed Wi-Fi", "Meal Plan"],
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
  },
  {
    id: 2,
    name: "Oxford Square Villa",
    price: "₹18k",
    dist: "1.2 km from Campus",
    amenities: ["Quiet Zone", "Private Bath"],
    img: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=400&q=80",
  },
];

const applicationSteps = [
  {
    id: 1,
    label: "Application Submitted",
    date: "Aug 12, 2024",
    done: true,
    icon: "✓",
  },
  {
    id: 2,
    label: "In Review",
    date: "Est. outcome in 2 days",
    active: true,
    icon: "●",
    note: "The curator is currently verifying your university enrollment documents.",
  },
  {
    id: 3,
    label: "Deposit Pending",
    date: "Stage 3 of 4",
    icon: "◎",
  },
];

export default function MyAccount() {
  const [activeNav, setActiveNav] = useState("My Account");

  return (
    <>
    <Navbar/>
    <div
      className="flex "
      style={{ backgroundColor: "#eeeaf8", fontFamily: "'Georgia', serif" }}
    >
      {/* Sidebar */}
      <aside
        className="flex flex-col justify-between py-8 px-5"
        style={{
          width: 200,
          minHeight: "100vh",
          backgroundColor: "#eeeaf8",
          borderRight: "1px solid #ddd8f0",
        }}
      >
        <div>
          {/* Logo */}
          <div className="mb-10">
            <div
              className="font-bold text-base"
              style={{ color: "#3b3584", letterSpacing: "-0.5px" }}
            >
              The Curator
            </div>
            <div
              className="text-xs tracking-widest mt-0.5"
              style={{ color: "#9b96b8", fontFamily: "sans-serif" }}
            >
              ACADEMIC HOUSING
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setActiveNav(link.label)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all"
                style={{
                  fontFamily: "sans-serif",
                  color: activeNav === link.label ? "#3b3584" : "#7b78a0",
                  backgroundColor:
                    activeNav === link.label ? "#ddd8f8" : "transparent",
                  borderLeft:
                    activeNav === link.label
                      ? "3px solid #5b54d4"
                      : "3px solid transparent",
                  fontWeight: activeNav === link.label ? 600 : 400,
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: 15 }}>{link.icon}</span>
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* List a Property Button */}
        <button
          className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #5b54d4, #4038b0)",
            fontFamily: "sans-serif",
          }}
        >
          List a Property
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-8">
        {/* Profile Card */}
        <div
          className="rounded-2xl p-6 mb-6 flex items-center gap-6"
          style={{ backgroundColor: "#f5f2ff" }}
        >
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Rahul Modak"
              className="rounded-2xl object-cover"
              style={{ width: 110, height: 110 }}
            />
            <span
              className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{
                background: "#4caf8e",
                fontFamily: "sans-serif",
                fontSize: 10,
                whiteSpace: "nowrap",
              }}
            >
              ✓ VERIFIED
            </span>
          </div>

          <div>
            <h1
              className="text-4xl font-bold mb-2"
              style={{ color: "#1a1740", letterSpacing: "-1px" }}
            >
              Rahul Modak
            </h1>
            <div
              className="flex items-center gap-4 text-sm mb-3"
              style={{ color: "#5b56a0", fontFamily: "sans-serif" }}
            >
              <span>🎓 University of Calcutta</span>
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ backgroundColor: "#5b56a0" }}
              />
              <span>📍 Kolkata, WB</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "#e8e4f8",
                    color: "#4038b0",
                    fontFamily: "sans-serif",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Grid: Saved Listings + Application Status */}
        <div className="grid gap-6" style={{ gridTemplateColumns: "1fr 320px" }}>
          {/* Saved Listings */}
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <h2
                className="text-2xl font-bold"
                style={{ color: "#1a1740", letterSpacing: "-0.5px" }}
              >
                Saved Listings
              </h2>
              <button
                className="text-sm font-medium"
                style={{ color: "#5b54d4", fontFamily: "sans-serif" }}
              >
                View All
              </button>
            </div>
            <p
              className="text-sm mb-4"
              style={{ color: "#8884a8", fontFamily: "sans-serif" }}
            >
              Properties you are tracking for the Fall semester.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {savedListings.map((listing) => (
                <div
                  key={listing.id}
                  className=" overflow-hidden"
                  style={{ backgroundColor: "#f5f2ff" }}
                >
                  <div className="relative">
                    <img
                      src={listing.img}
                      alt={listing.name}
                      className="w-full object-cover"
                      style={{ height: 300 }}
                    />
                    <button
                      className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#5b54d4" }}
                    >
                      <span style={{ color: "#fff", fontSize: 13 }}>🔖</span>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-around items-start mb-1">
                      <span
                        className="font-semibold text-sm"
                        style={{ color: "#1a1740" }}
                      >
                        {listing.name}
                      </span>
                      <span
                        className="font-bold text-sm"
                        style={{ color: "#e53935", fontFamily: "sans-serif" }}
                      >
                        {listing.price}
                        <span
                          className="font-normal text-xs"
                          style={{ color: "#8884a8" }}
                        >
                          /mo
                        </span>
                      </span>
                    </div>
                    <p
                      className="text-xs mb-3 ml-40"
                      style={{ color: "#8884a8", fontFamily: "sans-serif" }}
                    >
                      📍 {listing.dist}
                    </p>
                    <div className="flex flex-wrap  gap-1.5 ml-20">
                      {listing.amenities.map((a) => (
                        <span
                          key={a}
                          className="px-10 py-6 rounded-full text-xs"
                          style={{
                            backgroundColor: "#e8e4f8",
                            color: "#4038b0",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Academic Fit Score */}
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: "#3b3584" }}
            >
              <div
                className="text-xl mb-1"
                style={{ color: "#a9a4e8", letterSpacing: 2 }}
              >
                ✦✦
              </div>
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ lineHeight: 1.3 }}
              >
                Your Academic Fit Score is 94%
              </h3>
              <p
                className="text-xs mb-3"
                style={{ color: "#b0acd4", fontFamily: "sans-serif" }}
              >
                Based on your proximity to the economics department and library
                hours preference.
              </p>
              <button
                className="text-xs font-semibold underline"
                style={{ color: "#c8c4f8", fontFamily: "sans-serif" }}
              >
                View Curated Insights
              </button>
            </div>

            {/* Current Application */}
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: "#f5f2ff" }}
            >
              <h3
                className="font-bold text-base mb-4"
                style={{ color: "#1a1740" }}
              >
                Current Application
              </h3>

              {/* Property */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#e8e4f8" }}
                >
                  🏢
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "#1a1740" }}
                  >
                    The Scholar's Suite
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "#8884a8", fontFamily: "sans-serif" }}
                  >
                    App ID: #88219-BK
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex flex-col gap-0">
                {applicationSteps.map((step, idx) => (
                  <div key={step.id} className="flex gap-3">
                    {/* Icon + line */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{
                          backgroundColor: step.done
                            ? "#5b54d4"
                            : step.active
                            ? "#7b78c8"
                            : "#ddd8f0",
                          color: step.done || step.active ? "#fff" : "#9b96b8",
                        }}
                      >
                        {step.done ? "✓" : step.active ? "●" : "◎"}
                      </div>
                      {idx < applicationSteps.length - 1 && (
                        <div
                          className="w-0.5 flex-1 my-1"
                          style={{
                            backgroundColor: "#ddd8f0",
                            minHeight: 20,
                          }}
                        />
                      )}
                    </div>

                    <div className="pb-4">
                      <div
                        className="text-xs font-semibold"
                        style={{
                          color: step.active ? "#3b3584" : "#1a1740",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {step.label}
                      </div>
                      <div
                        className="text-xs mb-1"
                        style={{ color: "#8884a8", fontFamily: "sans-serif" }}
                      >
                        {step.date}
                      </div>
                      {step.note && (
                        <div
                          className="text-xs p-2 rounded-lg"
                          style={{
                            backgroundColor: "#fff",
                            color: "#5b56a0",
                            fontFamily: "sans-serif",
                            lineHeight: 1.5,
                          }}
                        >
                          {step.note}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-2.5 rounded-xl text-sm font-semibold mt-1 border transition-colors hover:bg-indigo-50"
                style={{
                  borderColor: "#c8c4e8",
                  color: "white",
                  fontFamily: "sans-serif",
                  backgroundColor: "#3b3584",
                  cursor:"pointer"
                }}
              >
                View Application Details
              </button>
            </div>

            {/* Student Guarantee */}
            <div
              className="rounded-xl p-4 flex  gap-3"
              style={{ backgroundColor: "#6ef0d8" }}
            >
              <div className="text-lg mt-0.5">🛡</div>
              <div>
                <div
                  className="text-xs font-bold tracking-widest mb-1 h-10 mt-20"
                  style={{ color: "#1a4038", fontFamily: "sans-serif" }}
                >
                  STUDENT GUARANTEE
                </div>
                <div
                  className="text-xs"
                  style={{ color: "#1a4038", fontFamily: "sans-serif" }}
                >
                  Your data is secured by University Partnerships Protocol.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="mt-12 pt-6 flex justify-between items-start"
          style={{
            borderTop: "1px solid #ddd8f0",
            fontFamily: "sans-serif",
          }}
        >
          <div>
            <div
              className="font-semibold text-sm"
              style={{ color: "#3b3584" }}
            >
              The Academic Curator
            </div>
            <div className="text-xs mt-0.5" style={{ color: "#9b96b8" }}>
              © 2024 THE ACADEMIC CURATOR. CURATING INTELLECTUAL GROWTH.
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs" style={{ color: "#7b78a0" }}>
            <span className="cursor-pointer hover:text-indigo-600">PRIVACY POLICY</span>
            <span className="cursor-pointer hover:text-indigo-600">TERMS OF SERVICE</span>
            <span className="cursor-pointer hover:text-indigo-600">UNIVERSITY PARTNERSHIPS</span>
            <span className="cursor-pointer hover:text-indigo-600">CONTACT SUPPORT</span>
          </div>
        </footer>
      </main>
    </div>
    </>
  );
}