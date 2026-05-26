import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import AIOrb from "../components/AIOrb"

export default function AppShell({ children }) {
  return (
    <div style={{
      minHeight:"100vh",
      background:"#050816",
      color:"white",
      display:"flex",
      fontFamily:"Arial",
      overflow:"hidden",
      position:"relative"
    }}>

      <div style={{
        position:"fixed",
        width:"500px",
        height:"500px",
        borderRadius:"999px",
        background:"radial-gradient(circle,#9333ea55,#2563eb11,transparent)",
        filter:"blur(90px)",
        top:"-150px",
        right:"-150px",
        animation:"pulse 8s infinite"
      }} />

      <div style={{
        position:"fixed",
        width:"400px",
        height:"400px",
        borderRadius:"999px",
        background:"radial-gradient(circle,#2563eb55,#9333ea11,transparent)",
        filter:"blur(100px)",
        bottom:"-120px",
        left:"200px"
      }} />

      <Sidebar />

      <main style={{
        flex:1,
        padding:"30px",
        overflowY:"auto",
        position:"relative",
        zIndex:2
      }}>
        <Topbar />
        {children}
      </main>

      <AIOrb />

    </div>
  )
}
