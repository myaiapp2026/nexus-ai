import AppShell from "../layouts/AppShell"
import { motion } from "framer-motion"
import { Bot, Image, Code2, Zap } from "lucide-react"

export default function Dashboard() {
  const stats = [
    { title:"AI Agents", value:"24", icon:Bot },
    { title:"Images Generated", value:"1,284", icon:Image },
    { title:"Code Sessions", value:"643", icon:Code2 },
    { title:"Automation Runs", value:"87%", icon:Zap }
  ]

  return (
    <AppShell>
      <section style={{marginBottom:"34px"}}>
        <motion.h1
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          className="gradient-text hero-glow"
          style={{
            fontSize:"64px",
            fontWeight:"900",
            letterSpacing:"-2px",
            marginBottom:"14px"
          }}
        >
          NEXUS AI OS
        </motion.h1>

        <p style={{
          color:"#94a3b8",
          fontSize:"18px",
          maxWidth:"720px",
          lineHeight:"1.7"
        }}>
          Premium cinematic AI workspace for chat, image generation, code, agents,
          notes, voice and automation.
        </p>
      </section>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:"22px",
        marginBottom:"28px"
      }}>
        {stats.map((item,index)=>{
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              whileHover={{y:-8,scale:1.02}}
              className="cinematic-card neon-border"
              style={{
                borderRadius:"30px",
                padding:"26px",
                position:"relative"
              }}
            >
              <Icon size={26} color="#c084fc" />
              <p style={{color:"#94a3b8",marginTop:"18px",marginBottom:"10px"}}>
                {item.title}
              </p>
              <h2 style={{fontSize:"46px",fontWeight:"900"}}>
                {item.value}
              </h2>
            </motion.div>
          )
        })}
      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1.5fr 1fr",
        gap:"24px"
      }}>
        <div className="cinematic-card" style={{borderRadius:"34px",padding:"28px"}}>
          <h2 style={{fontSize:"28px",marginBottom:"22px"}}>Command Center</h2>

          <div style={{
            height:"330px",
            borderRadius:"30px",
            background:"linear-gradient(135deg,#9333ea,#2563eb,#06b6d4)",
            display:"grid",
            placeItems:"center",
            fontSize:"34px",
            fontWeight:"900",
            boxShadow:"0 0 90px rgba(147,51,234,.35)"
          }}>
            AI CORE ONLINE
          </div>
        </div>

        <div className="cinematic-card" style={{borderRadius:"34px",padding:"28px"}}>
          <h2 style={{fontSize:"28px",marginBottom:"18px"}}>Live Activity</h2>

          {[
            "Generated futuristic dashboard",
            "AI agent completed workflow",
            "Image studio rendered concept",
            "Code IDE optimized component"
          ].map(item=>(
            <div key={item} style={{
              padding:"16px",
              borderRadius:"18px",
              background:"rgba(255,255,255,.05)",
              marginBottom:"14px",
              color:"#cbd5e1"
            }}>
              ● {item}
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
