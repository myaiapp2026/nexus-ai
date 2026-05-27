import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <div className="bg-mesh"></div>
      <div className="bg-grid"></div>

      <Sidebar />

      <main className="app-main">
        <Topbar />
        {children}
      </main>

      <div className="orb">✦</div>
    </div>
  )
}
