import { NavLink } from "react-router-dom"

const items = [
  ["Dashboard","/dashboard"],
  ["AI Chat","/chat"],
  ["Image AI","/image"],
  ["Code IDE","/code"],
  ["Notes","/notes"],
  ["Voice","/voice"],
  ["Agents","/agents"],
  ["Notifications","/notifications"],
  ["Profile","/profile"],
  ["Settings","/settings"]
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-mark">✦</div>

        <div>
          <h2>NEXUS AI</h2>
          <p className="muted">AI Operating System</p>
        </div>
      </div>

      <nav className="nav">
        {items.map(([name, path]) => (
          <NavLink
            key={path}
            to={path}
            className={({isActive}) => isActive ? "active" : ""}
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
