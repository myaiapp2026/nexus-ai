import {
  LayoutDashboard,
  MessageSquare,
  Image,
  Code2,
  Mic,
  Bell,
  Settings,
  User,
  Sparkles
} from "lucide-react"

import { NavLink } from "react-router-dom"

const links = [
  { name:"Dashboard", icon:LayoutDashboard, path:"/dashboard" },
  { name:"AI Chat", icon:MessageSquare, path:"/chat" },
  { name:"Image AI", icon:Image, path:"/image" },
  { name:"Code IDE", icon:Code2, path:"/code" },
  { name:"Voice", icon:Mic, path:"/voice" },
  { name:"Notifications", icon:Bell, path:"/notifications" },
  { name:"Profile", icon:User, path:"/profile" },
  { name:"Settings", icon:Settings, path:"/settings" }
]

export default function Sidebar() {
  return (
    <aside
      className="hide-mobile"
      style={{
        width:"280px",
        padding:"24px",
        display:"flex",
        flexDirection:"column",
        gap:"18px",
        borderRight:"1px solid rgba(255,255,255,.06)",
        background:"rgba(255,255,255,.03)",
        backdropFilter:"blur(24px)"
      }}
    >
      <div style={{
        display:"flex",
        alignItems:"center",
        gap:"14px",
        marginBottom:"28px"
      }}>
        <div style={{
          width:"54px",
          height:"54px",
          borderRadius:"18px",
          background:"linear-gradient(135deg,#9333ea,#2563eb)",
          display:"grid",
          placeItems:"center",
          boxShadow:"0 0 40px rgba(147,51,234,.55)"
        }}>
          <Sparkles color="white" />
        </div>

        <div>
          <h1 style={{
            margin:0,
            fontSize:"22px",
            fontWeight:"900"
          }}>
            NEXUS AI
          </h1>

          <p style={{
            margin:0,
            color:"#94a3b8",
            fontSize:"13px"
          }}>
            Cinematic OS
          </p>
        </div>
      </div>

      {links.map(link=>{
        const Icon = link.icon

        return (
          <NavLink
            key={link.name}
            to={link.path}
            style={({isActive})=>({
              display:"flex",
              alignItems:"center",
              gap:"14px",
              padding:"16px 18px",
              borderRadius:"20px",
              textDecoration:"none",
              color:"white",
              background:isActive
                ? "linear-gradient(135deg,#9333ea,#2563eb)"
                : "rgba(255,255,255,.04)",
              transition:"0.3s",
              boxShadow:isActive
                ? "0 0 35px rgba(147,51,234,.45)"
                : "none"
            })}
          >
            <Icon size={20} />
            {link.name}
          </NavLink>
        )
      })}
    </aside>
  )
}
