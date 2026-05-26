import AppShell from "../layouts/AppShell"
import { motion } from "framer-motion"

export default function Dashboard() {

  const stats = [
    {title:"AI Agents",value:"24"},
    {title:"GPU Usage",value:"87%"},
    {title:"Generated Images",value:"1,284"},
    {title:"Code Sessions",value:"643"}
  ]

  return (
    <AppShell>

      <motion.div
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
      >
        <h1 style={{
          fontSize:"58px",
          marginBottom:"10px",
          fontWeight:"800"
        }}>
          AI Dashboard
        </h1>

        <p style={{
          color:"#94a3b8",
          fontSize:"18px",
          marginBottom:"35px"
        }}>
          Welcome back to your futuristic AI operating system.
        </p>
      </motion.div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
        gap:"22px",
        marginBottom:"35px"
      }}>
        {stats.map((item,index)=>(
          <motion.div
            key={index}
            whileHover={{
              y:-8,
              scale:1.02
            }}
            style={{
              padding:"30px",
              borderRadius:"30px",
              background:"rgba(255,255,255,0.05)",
              border:"1px solid rgba(255,255,255,0.08)",
              backdropFilter:"blur(24px)",
              boxShadow:"0 0 50px rgba(0,0,0,0.25)"
            }}
          >
            <p style={{
              color:"#94a3b8",
              marginBottom:"14px"
            }}>
              {item.title}
            </p>

            <h2 style={{
              fontSize:"48px",
              color:"#c084fc"
            }}>
              {item.value}
            </h2>
          </motion.div>
        ))}
      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1.4fr 1fr",
        gap:"24px"
      }}>

        <div style={{
          background:"rgba(255,255,255,0.05)",
          borderRadius:"30px",
          padding:"28px",
          border:"1px solid rgba(255,255,255,0.08)"
        }}>
          <h2 style={{
            marginBottom:"24px",
            fontSize:"28px"
          }}>
            System Activity
          </h2>

          <div style={{
            height:"360px",
            borderRadius:"28px",
            background:"linear-gradient(135deg,#9333ea,#2563eb)",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            fontSize:"34px",
            fontWeight:"800",
            boxShadow:"0 0 80px rgba(147,51,234,0.35)"
          }}>
            NEXUS AI ONLINE
          </div>
        </div>

        <div style={{
          display:"grid",
          gap:"22px"
        }}>

          <div style={{
            background:"rgba(255,255,255,0.05)",
            borderRadius:"28px",
            padding:"24px",
            border:"1px solid rgba(255,255,255,0.08)"
          }}>
            <h3 style={{
              marginBottom:"14px"
            }}>
              AI Assistant
            </h3>

            <p style={{
              color:"#94a3b8",
              marginBottom:"20px"
            }}>
              Generate futuristic interfaces and AI systems.
            </p>

            <button style={{
              width:"100%",
              padding:"15px",
              borderRadius:"18px",
              border:"none",
              background:"linear-gradient(135deg,#9333ea,#2563eb)",
              color:"white",
              fontWeight:"700"
            }}>
              Launch Workspace
            </button>
          </div>

          <div style={{
            background:"rgba(255,255,255,0.05)",
            borderRadius:"28px",
            padding:"24px",
            border:"1px solid rgba(255,255,255,0.08)"
          }}>
            <h3 style={{
              marginBottom:"12px"
            }}>
              Workspace Status
            </h3>

            <p style={{
              color:"#22c55e",
              fontWeight:"700"
            }}>
              ● All Systems Operational
            </p>
          </div>

        </div>

      </div>

    </AppShell>
  )
}
