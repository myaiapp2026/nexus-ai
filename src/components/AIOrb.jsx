import { Sparkles } from "lucide-react"

export default function AIOrb() {
  return (
    <div style={{
      position:"fixed",
      right:"28px",
      bottom:"28px",
      width:"86px",
      height:"86px",
      borderRadius:"999px",
      background:"radial-gradient(circle at 30% 30%,#ffffff,#c084fc 25%,#9333ea 55%,#2563eb)",
      boxShadow:"0 0 90px rgba(147,51,234,.75), 0 0 140px rgba(37,99,235,.35)",
      display:"grid",
      placeItems:"center",
      zIndex:100,
      animation:"float 5s ease-in-out infinite",
      border:"1px solid rgba(255,255,255,.35)"
    }}>
      <Sparkles size={30} color="white" />
    </div>
  )
}
