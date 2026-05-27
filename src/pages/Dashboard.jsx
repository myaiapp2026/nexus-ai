import AppShell from "../layouts/AppShell"
import { motion } from "framer-motion"

const stats = [
  { title:"AI Agents", value:"24" },
  { title:"GPU Usage", value:"87%" },
  { title:"Generated Images", value:"1,284" },
  { title:"Code Sessions", value:"643" }
]

export default function Dashboard() {
  return (
    <AppShell>

      <motion.div
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:.6}}
        style={{
          marginBottom:"30px"
        }}
      >
        <h1
          className="gradient-text"
          style={{
            fontSize:"62px",
            fontWeight:"900",
            marginBottom:"12px",
            letterSpacing:"-2px"
          }}
        >
          NEXUS AI
        </h1>

        <p style={{
          color:"#94a3b8",
          fontSize:"18px",
          maxWidth:"700px",
          lineHeight:"1.6"
        }}>
          Futuristic cinematic AI operating system with intelligent automation,
          immersive workflows and premium realtime experiences.
        </p>
      </motion.div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
        gap:"22px",
        marginBottom:"28px"
      }}>
        {stats.map((item,index)=>(
          <motion.div
            key={index}
            whileHover={{y:-6,scale:1.02}}
            className="glass"
            style={{
              borderRadius:"28px",
              padding:"28px",
              position:"relative",
              overflow:"hidden"
            }}
          >
            <div style={{
              position:"absolute",
              inset:0,
              background:"linear-gradient(135deg,#9333ea22,#2563eb11)",
              opacity:.9
            }} />

            <div style={{position:"relative",zIndex:2}}>
              <p style={{
                color:"#94a3b8",
                marginBottom:"12px",
                fontSize:"15px"
              }}>
                {item.title}
              </p>

              <h2 style={{
                fontSize:"52px",
                fontWeight:"800"
              }}>
                {item.value}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"2fr 1fr",
        gap:"22px"
      }}>

        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.2}}
          className="glass"
          style={{
            borderRadius:"32px",
            padding:"28px",
            minHeight:"420px",
            position:"relative",
            overflow:"hidden"
          }}
        >
          <div style={{
            display:"flex",
            justifyContent:"space-between",
            marginBottom:"24px"
          }}>
            <h2 style={{fontSize:"28px"}}>
              System Activity
            </h2>

            <div style={{
              padding:"10px 16px",
              borderRadius:"999px",
              background:"#22c55e22",
              color:"#4ade80",
              fontWeight:"700"
            }}>
              ONLINE
            </div>
          </div>

          <div style={{
            height:"300px",
            borderRadius:"28px",
            background:"linear-gradient(135deg,#9333ea,#2563eb)",
            display:"grid",
            placeItems:"center",
            fontSize:"36px",
            fontWeight:"900",
            letterSpacing:"1px",
            boxShadow:"0 0 80px rgba(147,51,234,.35)"
          }}>
            NEXUS CORE ACTIVE
          </div>
        </motion.div>

        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.3}}
          className="glass"
          style={{
            borderRadius:"32px",
            padding:"28px",
            display:"flex",
            flexDirection:"column",
            gap:"20px"
          }}
        >
          <h2 style={{
            fontSize:"28px"
          }}>
            AI Assistant
          </h2>

          <div style={{
            padding:"20px",
            borderRadius:"24px",
            background:"rgba(255,255,255,.05)",
            lineHeight:"1.7",
            color:"#cbd5e1"
          }}>
            Generate images, automate workflows,
            analyze documents and interact with
            intelligent AI systems.
          </div>

          <button style={{
            border:"none",
            background:"linear-gradient(135deg,#9333ea,#2563eb)",
            color:"white",
            padding:"18px",
            borderRadius:"20px",
            fontWeight:"800",
            fontSize:"16px",
            cursor:"pointer",
            boxShadow:"0 0 40px rgba(147,51,234,.4)"
          }}>
            Launch Workspace
          </button>

        </motion.div>

      </div>

    </AppShell>
  )
}
