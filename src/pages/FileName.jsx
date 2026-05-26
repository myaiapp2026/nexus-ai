import Sidebar from "../components/Sidebar"
import { motion } from "framer-motion"

export default function Dashboard() {
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
      <Sidebar />

      <main style={{
        flex:1,
        padding:"30px",
        position:"relative",
        zIndex:2
      }}>

        <div style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:"30px",
          gap:"20px"
        }}>

          <input
            placeholder="Search AI workspace..."
            style={{
              flex:1,
              background:"rgba(255,255,255,0.05)",
              border:"1px solid rgba(255,255,255,0.08)",
              padding:"16px",
              borderRadius:"18px",
              color:"white",
              outline:"none",
              backdropFilter:"blur(20px)"
            }}
          />

          <div style={{
            width:"50px",
            height:"50px",
            borderRadius:"999px",
            background:"linear-gradient(135deg,#9333ea,#2563eb)",
            boxShadow:"0 0 30px rgba(147,51,234,0.4)"
          }} />

        </div>

        <div style={{
          position:"fixed",
          width:"320px",
          height:"320px",
          borderRadius:"999px",
          background:"radial-gradient(circle,#9333ea55,#2563eb22,transparent)",
          filter:"blur(40px)",
          top:"120px",
          right:"80px",
          zIndex:0
        }} />

        <motion.div
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            marginBottom:"30px"
          }}
        >
          <div>
            <h1 style={{
              fontSize:"48px",
              marginBottom:"10px"
            }}>
              AI Dashboard
            </h1>

            <p style={{
              color:"#94a3b8"
            }}>
              Welcome back to NEXUS AI OS
            </p>
          </div>

          <button style={{
            background:"linear-gradient(135deg,#9333ea,#2563eb)",
            border:"none",
            color:"white",
            padding:"14px 20px",
            borderRadius:"16px",
            fontWeight:"700",
            cursor:"pointer"
          }}>
            Launch Agent
          </button>
        </motion.div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"20px",
          marginBottom:"30px"
        }}>
          {[
            "AI Agents",
            "GPU Usage",
            "Generated Images",
            "Code Sessions"
          ].map((item,index)=>(
            <motion.div
              key={index}
              whileHover={{ y:-8, scale:1.02 }}
              transition={{ type:"spring", stiffness:200 }}
              style={{
                background:"rgba(255,255,255,0.05)",
                padding:"24px",
                borderRadius:"24px",
                border:"1px solid rgba(255,255,255,0.08)",
                backdropFilter:"blur(20px)"
              }}
            >
              <p style={{
                color:"#94a3b8",
                marginBottom:"12px"
              }}>
                {item}
              </p>

              <h2 style={{
                fontSize:"40px",
                color:"#c084fc"
              }}>
                {Math.floor(Math.random()*90)+10}
              </h2>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.3 }}
          style={{
            background:"rgba(255,255,255,0.05)",
            borderRadius:"28px",
            padding:"30px",
            border:"1px solid rgba(255,255,255,0.08)"
          }}
        >
          <h2 style={{
            marginBottom:"20px"
          }}>
            System Activity
          </h2>

          <div style={{
            height:"320px",
            borderRadius:"24px",
            background:"linear-gradient(135deg,#9333ea,#2563eb)",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            fontSize:"30px",
            fontWeight:"700"
          }}>
            NEXUS AI SYSTEM ONLINE
          </div>
        </motion.div>

      </main>
    </div>
  )
}
