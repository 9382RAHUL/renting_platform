

import { useState } from "react";
import Navbar from "../components/Navbar";

const properties = [
  {
    id: 1,
    name: "Salt Lake Regency Studio",
    location: "Block CA, Salt Lake City, Kolkata",
    rent: "₹18,500",
    status: "Active",
    inquiries: 42,
    inquiryBadge: "+5 new",
    inquiryBadgeClass: "text-teal-600 font-bold",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhlCo1f0WGsyp1zSu7N5mChLWdAr0zlQN4fURgoFG3sjPAZsIk1W0g17Q0BSqtkp08Ecmg513VxjYGczo6kRWjxRzJMcYGbojTeir6BYDO3ca4frkYZyMPmPi7SV707CLqnNO9SYEaKbV1jI9KELyeMhK3bIyioQ6pxDZkrY2z2Q4Od1PcfaM_S0pE6lHeLf05B0erFqWnVC_PSbUnXXJcDXyxXpBrWFk7h4maLVQTsxWwmttmd0-E_Z6OrbccIDM9z7SS_gD9Z5o0",
  },
  {
    id: 2,
    name: "The Scholar's Suite - Heritage",
    location: "College Street, North Kolkata",
    rent: "₹12,000",
    status: "Inactive",
    inquiries: 89,
    inquiryBadge: "Paused",
    inquiryBadgeClass: "text-gray-400 font-medium",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJWTN6gsgLfrF7Q3ZHEFeWeGjKvK9wo1yhw_EtmMDxYHWBh275mudQnylj9Ir5lBRIjHT2xvlUHiF1m4lvvaOAAmLweWJTFyz6L7n2URx5sgXjPShNZQKrBbGCsI-5w9DxJcmdfKLV_JA_fs-CTUkDX5lfwQ6JM21Cx8W0stRqw5K8PnIoYLxenc09RlPGrlM9J0c6Fw6RXsLhtbwdatkmtyxfBoV613vi9LkaY2NcKdkKspDidTb0E8QATJYYToCsizxnL9rzTM7O",
  },
  {
    id: 3,
    name: "Park Street Creative Loft",
    location: "Park Street, Central Kolkata",
    rent: "₹24,000",
    status: "Active",
    inquiries: 17,
    inquiryBadge: "Stable",
    inquiryBadgeClass: "text-gray-400 font-medium",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2n_0OB4nBcdpTAeWpMunbO3C014OREsdhfgMIhB3LfUE9EF1PychBtMqZUYnUIizDmTdcb1t-EMtw5cEW79n0cCGqEWxcFfKgE7HULVkQRPx7_s9ymRR_Kc5R3xXtuGD4XbphM0p_EAYWvio7cTEJs8RGDDNZYEGFopiNanDi29upCCukyBfyRVZT1t7qQcfSwTPUAU6y798YNyD8nMDza4sEcJ1B33xs8-Cwl9QvTQ2ev-Blt0yfAaVnhsluzkdmuqCeaRkCREHy",
  },
];

function StatusBadge({ status }) {
  const isActive = status === "Active";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-xl ${
        isActive
          ? "bg-teal-100 text-teal-700"
          : "bg-gray-100 text-gray-500"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isActive ? "bg-teal-600" : "bg-gray-400"
        }`}
      />
      {status}
    </span>
  );
}

function PropertyRow({ property }) {
  const [hovered, setHovered] = useState(false);

  return (
    <tr
      className="group transition-colors hover:bg-[#f3eeff]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <td className="px-8 py-6">
        <div className="flex items-center gap-4">
          <img
            src={property.img}
            alt={property.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <p className="font-bold text-[#2e2a50]">{property.name}</p>
            <p className="text-xs text-[#5c5680]">{property.location}</p>
          </div>
        </div>
      </td>
      <td className="px-8 py-6">
        <span className="font-medium text-[#2e2a50]">{property.rent}</span>
        <span className="text-xs text-[#5c5680]">/month</span>
      </td>
      <td className="px-8 py-6">
        <StatusBadge status={property.status} />
      </td>
      <td className="px-8 py-6">
        <div className="flex items-center gap-2">
          <span className="text-[#2e2a50] font-bold">{property.inquiries}</span>
          <span className={`text-xs ${property.inquiryBadgeClass}`}>
            {property.inquiryBadge}
          </span>
        </div>
      </td>
      <td className="px-8 py-6 text-right">
        <div
          className={`flex items-center justify-end gap-2 transition-opacity ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="p-2 text-[#4953ac] hover:bg-[#4953ac]/10 rounded-lg">
            <span className="material-symbols-outlined">edit</span>
          </button>
          <button className="p-2 text-[#5c5680] hover:bg-[#dfd8ff] rounded-lg">
            <span className="material-symbols-outlined">analytics</span>
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function OwnerDashboard() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-family: 'Material Symbols Outlined';
        }
        body { font-family: 'Inter', sans-serif; }
        .font-headline { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

     <Navbar/>
      <div className="bg-[#f9f4ff] text-[#2e2a50] antialiased ">
        {/* TopNavBar */}

        {/* Main Content */}
        <main className="">
          {/* Header */}
         
<header className="flex flex-col md:flex-row justify-between items-end gap-6 ml-20">
  <div className="max-w-2xl mt-30">
    <h1 className="font-headline text-3xl font-extrabold tracking-tighter text-[#2e2a50] mb-2">
      Owner Dashboard
    </h1>
    <p className="text-[#5c5680] text-sm">
      Manage your curated student residences and track your portfolio's performance across Kolkata.
    </p>
  </div>
  <button className="bg-gradient-to-br from-[#4953ac] to-[#929bfa] text-white w-60 h-10 rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-[#4953ac]/20 active:scale-95 transition-transform hover:scale-105">
    <span className="material-symbols-outlined">add_circle</span>
    Add New Listing
  </button>
</header>

          {/* Analytics Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 ">
            {/* Total Views */}
            <div className="md:col-span-2 bg-white rounded-xl shadow-sm flex flex-col justify-between h-48 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-[#5c5680] uppercase tracking-widest text-xs font-bold mb-40">
                  Total Property Views
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline text-5xl font-extrabold text-[#4953ac]">
                    12,482
                  </span>
                  <span className="text-teal-600 font-bold text-sm flex items-center gap-0.5">
                    +14%
                    <span className="material-symbols-outlined text-xs">trending_up</span>
                  </span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-5">
                <span className="material-symbols-outlined text-[120px]">visibility</span>
              </div>
            </div>

            {/* Inquiries */}
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between h-48 border-l-4 border-[#a83206]">
              <div>
                <p className="text-[#5c5680] uppercase tracking-widest text-xs font-bold mb-4">
                  Inquiries (Oct)
                </p>
                <span className="font-headline text-4xl font-extrabold text-[#2e2a50]">
                  148
                </span>
              </div>
              <p className="text-[#5c5680] text-sm">24 pending response</p>
            </div>

            {/* Avg Response Time */}
            <div className="bg-[#81f3e5] p-8 rounded-xl shadow-sm flex flex-col justify-between h-48">
              <div>
                <p className="text-[#005a53] uppercase tracking-widest text-xs font-bold mb-4">
                  Avg. Response Time
                </p>
                <span className="font-headline text-4xl font-extrabold text-[#005a53]">
                  2.4h
                </span>
              </div>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-[#005a53]" />
                <span className="w-2 h-2 rounded-full bg-[#005a53] opacity-40" />
                <span className="w-2 h-2 rounded-full bg-[#005a53] opacity-40" />
              </div>
            </div>
          </section>

          {/* Listings Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline text-2xl font-bold text-[#2e2a50]">
                Your Properties
              </h2>
              <div className="bg-[#f3eeff] px-4 py-2 rounded-lg flex items-center gap-2 text-[#5c5680] cursor-pointer hover:bg-[#ebe5ff] transition-colors">
                <span className="material-symbols-outlined text-sm">filter_list</span>
                <span className="text-sm font-medium">Filter by Status</span>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f3eeff] text-[#5c5680] text-sm font-bold">
                    {["Property Details", "Monthly Rent", "Status", "Inquiries", ""].map(
                      (h, i) => (
                        <th
                          key={i}
                          className={`px-8 py-5 font-headline ${i === 4 ? "text-right" : ""}`}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ebe5ff]">
                  {properties.map((p) => (
                    <PropertyRow key={p.id} property={p} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Trust Banner */}
          <section className="mt-16 bg-[#81f3e5] rounded-3xl p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
            <div className="relative z-10 max-w-xl">
              <h3 className="font-headline text-3xl font-extrabold text-[#005a53] mb-4">
                Enhance Your Visibility
              </h3>
              <p className="text-[#005a53] opacity-80 mb-8 leading-relaxed">
                Verified listings receive 4x more engagement from high-intent students.
                Schedule your verification visit today.
              </p>
              <button className="bg-[#005a53] text-[#81f3e5] px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95">
                Get Verified Now
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-[#005a53]/10 rounded-full flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[#005a53] text-9xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#f3eeff] w-full mt-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-16 w-full max-w-7xl mx-auto">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-extrabold text-[#4953ac] font-headline">
                The Academic Curator
              </span>
              <p className="text-[#5c5680] text-sm leading-relaxed max-w-xs">
                Elevating the student living experience through curated architecture and
                community-focused management.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-headline font-bold text-[#4953ac]">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {["About Us", "Verified Listings", "Safety Guidelines", "Contact Support"].map(
                  (l) => (
                    <a
                      key={l}
                      href="#"
                      className="text-[#5c5680] hover:text-[#4953ac] text-sm hover:underline transition-all"
                    >
                      {l}
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-headline font-bold text-[#4953ac]">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  className="bg-[#f3eeff] border border-[#aea8d7] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4953ac]/40 w-full"
                />
                <button className="bg-[#4953ac] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#3d469f] transition-colors">
                  Join
                </button>
              </div>
              <p className="text-xs text-[#5c5680]">
                © 2024 The Academic Curator. Premium Student Living in Kolkata.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
