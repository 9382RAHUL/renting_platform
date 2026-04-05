export default function Sidebar({
  priceMin,
  priceMax,
  sliderValue,
  onSliderChange,
  locations,
  onToggleLocation,
  accommodationStyle,
  onAccommodationChange,
  onApply,
}) {
  const styles = ["Private Studio", "Twin Sharing", "Premium Dormitory"];

  return (
    <aside className="w-64 flex-shrink-0 space-y-6">
      {/* ── Filter Panel ── */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 className="text-base font-bold text-gray-900 mb-4">Curate Search</h2>

        {/* Price Range */}
        <div className="mb-5">
          <p className="sidebar-label">Price Range (Monthly)</p>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 bg-indigo-50 border border-indigo-200 rounded-lg px-3 py-2 text-sm font-semibold text-indigo-700 text-center">
              {priceMin}
            </div>
            <span className="text-gray-400">—</span>
            <div className="flex-1 bg-indigo-50 border border-indigo-200 rounded-lg px-3 py-2 text-sm font-semibold text-indigo-700 text-center">
              {priceMax}
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            onChange={(e) => onSliderChange(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Strategic Locations */}
        <div className="mb-5">
          <p className="sidebar-label">Strategic Locations</p>
          {Object.entries(locations).map(([loc, checked]) => (
            <label
              key={loc}
              className="flex items-center gap-2 text-sm text-gray-700 mb-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggleLocation(loc)}
                className="accent-indigo-600 w-4 h-4 rounded"
              />
              {loc}
            </label>
          ))}
        </div>

        {/* Accommodation Style */}
        <div className="mb-5">
          <p className="sidebar-label">Accommodation Style</p>
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => onAccommodationChange(style)}
              className={`w-full text-left text-sm px-3 py-2 rounded-lg mb-1 transition-colors ${
                accommodationStyle === style
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        {/* College Proximity */}
        <div className="mb-5">
          <p className="sidebar-label">College Proximity</p>
          <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 cursor-pointer">
            Within 2km of Presidency University ▾
          </div>
        </div>

        <button onClick={onApply} className="apply-btn">
          Apply Selection
        </button>
      </div>

      {/* ── Map Widget ── */}
      <div className="rounded-2xl overflow-hidden relative h-36 shadow-sm border border-gray-100">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
          alt="Interactive Map"
          className="w-full h-full object-cover opacity-70"
          style={{ background: "#1b4d4d" }}
        />
        <div className="absolute inset-0 bg-teal-900/60 flex items-end p-3">
          <span className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-1">
            Interactive Map
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </div>
      </div>
    </aside>
  );
}
