import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

export default function Chat() {
  return (
    <div style={{minHeight:"100vh",background:"#050816",color:"white",display:"flex",fontFamily:"Arial"}}>
      <Sidebar />

      <main style={{flex:1,padding:"30px"}}>
        <Topbar />

        <h1 style={{fontSize:"46px",marginBottom:"25px"}}>AI Chat</h1>

        <div style={{display:"grid",gap:"18px",marginBottom:"30px"}}>
          {[
            ["ai","Hi, I am NEXUS AI. Ready to build futuristic systems."],
            ["user","Create a billion-dollar AI dashboard UI."],
            ["ai","Designing cinematic cards, glowing panels, AI widgets, responsive layouts and premium motion."]
          ].map(([role,text],i)=>(
            <div key={i} style={{
              maxWidth:"720px",
              marginLeft:role==="user"?"auto":"0",
              padding:"20px",
              borderRadius:"24px",
              background:role==="user"
                ?"linear-gradient(135deg,#9333ea,#2563eb)"
                :"rgba(255,255,255,0.05)",
              border:"1px solid rgba(255,255,255,0.08)"
            }}>
              {text}
            </div>
          ))}
        </div>

        <div style={{
          display:"flex",
          gap:"12px",
          padding:"14px",
          borderRadius:"24px",
          background:"rgba(255,255,255,0.06)",
          border:"1px solid rgba(255,255,255,0.08)"
        }}>
          <input placeholder="Message NEXUS AI..." style={{
            flex:1,
            background:"transparent",
            border:"none",
            outline:"none",
            color:"white",
            fontSize:"16px"
          }} />

          <button style={{
            background:"linear-gradient(135deg,#9333ea,#2563eb)",
            color:"white",
            border:"none",
            padding:"14px 22px",
            borderRadius:"16px",
            fontWeight:"700"
          }}>
            Send
          </button>
        </div>
      </main>
    </div>
  )
}
