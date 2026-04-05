// export default function Navbar() {
//   const navItems = ["Home", "Search", "Owners", "My Account"];

//   return (
//     <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
//       {/* Left — brand + links */}
//       <div className="flex items-center gap-8">
//         <span className="text-xl font-bold text-gray-900 tracking-tight">
//           The Academic Curator
//         </span>

//         <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
//           {navItems.map((item) => (
//             <a
//               key={item}
//               href="#"
//               className={`nav-link ${item === "Search" ? "nav-link--active" : ""}`}
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Right — search + icons + avatar */}
//       <div className="flex items-center gap-4">
//         {/* Search bar */}
//         <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//           Search by University...
//         </div>

//         {/* Heart */}
//         <button className="text-gray-400 hover:text-red-500 transition-colors">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//               d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//           </svg>
//         </button>

//         {/* Bell */}
//         <button className="text-gray-400 hover:text-indigo-600 transition-colors">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//           </svg>
//         </button>

//         {/* Avatar */}
//         <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-semibold">
//           A
//         </div>
//       </div>
//     </nav>
//   );
// }


import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "Owners", path: "/owners" },
    { name: "My Account", path: "/account" },
  ];

  return (
    <nav className="ac-nav">
      {/* Logo */}
      <div className="ac-nav-logo">The Academic Curator</div>

      {/* Links */}
      <ul className="ac-nav-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="ac-nav-icons">
        <span>🔔</span>
        <span>♥</span>
        <div className="ac-avatar">S</div>
      </div>
    </nav>
  );
}