export default function Topbar() {
  return (
    <div className="topbar">

      <div className="search glass">
        <span>⌕</span>

        <input
          placeholder="Search AI workspace..."
        />
      </div>

      <div className="icon-btn glass">
        🔔
      </div>

      <button className="btn">
        PRO
      </button>

    </div>
  )
}
