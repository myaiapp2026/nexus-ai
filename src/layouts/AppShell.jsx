import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import AIOrb from "../components/AIOrb"
import CinematicBackground from "../components/CinematicBackground"

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <CinematicBackground />

      <div className="sidebar-wrap">
        <Sidebar />
      </div>

      <main className="app-main">
        <Topbar />
        {children}
      </main>

      <AIOrb />
    </div>
  )
}
