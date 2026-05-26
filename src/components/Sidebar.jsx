import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  MessageSquare,
  Image,
  Code2,
  NotebookText,
  Mic,
  Bot,
  Settings,
  Bell,
  User
} from "lucide-react"

export default function Sidebar() {
  const location = useLocation()

  const items = [
    { name:"Dashboard", path:"/dashboard", icon:LayoutDashboard },
    { name:"AI Chat", path:"/chat", icon:MessageSquare },
    { name:"Image AI", path:"/image", icon:Image },
    { name:"Code IDE", path:"/code", icon:Code2 },
    { name:"Notes", path:"/notes", icon:NotebookText },
    { name:"Voice", path:"/voice", icon:Mic },
    { name:"Agents", path:"/agents", icon:Bot },
    { name:"Notifications", path:"/notifications", icon:Bell },
    { name:"Profile", path:"/profile", icon:User },
    { name:"Settings", path:"/settings", icon:Settings }
  ]

  return (
    <aside style={{
      width:"270px",
      minHeight:"100vh",
      background:"rgba(255,255,255,0.03)",
      borderRight:"1px solid rgba(255,255,255,0.08)",
      padding:"22px",
      backdropFilter:"blur(20px)"
    }}>
      <h1 style={{color:"#c084fc",marginBottom:"8px",fontSize:"30px"}}>
        NEXUS AI
      </h1>

      <p style={{color:"#94a3b8",fontSize:"14px",marginBottom:"28px"}}>
        AI Operating System
      </p>

      <div style={{display:"grid",gap:"14px"}}>
        {items.map((item,index)=>{
          const active = location.pathname === item.path
          const Icon = item.icon

          return (
            <Link key={index} to={item.path} style={{textDecoration:"none"}}>
              <motion.div
                whileHover={{scale:1.03,x:4}}
                style={{
                  padding:"16px",
                  borderRadius:"20px",
                  background:active
                    ?"linear-gradient(135deg,#9333ea,#2563eb)"
                    :"rgba(255,255,255,0.05)",
                  color:"white",
                  fontWeight:"600",
                  display:"flex",
                  alignItems:"center",
                  gap:"12px",
                  boxShadow:active
                    ?"0 0 40px rgba(147,51,234,0.35)"
                    :"none"
                }}
              >
                <Icon size={20} />
                {item.name}
              </motion.div>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
