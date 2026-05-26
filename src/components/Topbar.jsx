import { Bell, Search, Sparkles } from "lucide-react"

export default function Topbar() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      marginBottom:"30px",
      gap:"20px"
    }}>

      <div style={{
        flex:1,
        display:"flex",
        alignItems:"center",
        gap:"12px",
        background:"rgba(255,255,255,0.05)",
        border:"1px solid rgba(255,255,255,0.08)",
        padding:"16px",
        borderRadius:"20px"
      }}>
        <Search size={20} color="#94a3b8" />
        <input
          placeholder="Search AI workspace..."
          style={{
            flex:1,
            background:"transparent",
            border:"none",
            outline:"none",
            color:"white",
            fontSize:"15px"
          }}
        />
      </div>

      <div style={{
        display:"flex",
        gap:"14px",
        alignItems:"center"
      }}>
        <div style={{
          padding:"14px",
          borderRadius:"18px",
          background:"rgba(255,255,255,0.05)",
          border:"1px solid rgba(255,255,255,0.08)"
        }}>
          <Bell size={20} />
        </div>

        <div style={{
          padding:"14px 18px",
          borderRadius:"18px",
          background:"linear-gradient(135deg,#9333ea,#2563eb)",
          fontWeight:"800",
          display:"flex",
          gap:"8px",
          alignItems:"center"
        }}>
          <Sparkles size={18} />
          PRO
        </div>
      </div>

    </div>
  )
}
