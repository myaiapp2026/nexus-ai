import AppShell from "../layouts/AppShell"

export default function CodeGenerator() {
  return (
    <AppShell>
      <h1 style={{
        fontSize:"46px",
        marginBottom:"25px",
        color:"#c084fc"
      }}>
        AI Code IDE
      </h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1.1fr 1fr",
        gap:"24px"
      }}>
        <div style={{
          background:"rgba(255,255,255,0.05)",
          borderRadius:"28px",
          border:"1px solid rgba(255,255,255,0.08)",
          overflow:"hidden"
        }}>
          <div style={{
            padding:"18px",
            borderBottom:"1px solid rgba(255,255,255,0.08)",
            display:"flex",
            justifyContent:"space-between"
          }}>
            <span>App.jsx</span>
            <button style={{
              background:"linear-gradient(135deg,#9333ea,#2563eb)",
              border:"none",
              color:"white",
              padding:"10px 18px",
              borderRadius:"14px",
              fontWeight:"700"
            }}>
              Generate
            </button>
          </div>

          <pre style={{
            margin:0,
            padding:"24px",
            color:"#c084fc",
            overflow:"auto",
            minHeight:"500px",
            fontSize:"15px",
            lineHeight:"1.7"
          }}>
{`function Dashboard() {
  return (
    <div className="future-ui">
      <h1>NEXUS AI</h1>
      <button>Launch Workspace</button>
    </div>
  )
}`}
          </pre>
        </div>

        <div style={{display:"grid",gap:"24px"}}>
          <div style={{
            background:"linear-gradient(135deg,#9333ea,#2563eb)",
            borderRadius:"28px",
            minHeight:"320px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            fontSize:"30px",
            fontWeight:"800"
          }}>
            Live Preview
          </div>

          <div style={{
            background:"#000",
            borderRadius:"24px",
            padding:"20px",
            fontFamily:"monospace",
            color:"#22c55e",
            minHeight:"160px"
          }}>
            {'>'} Initializing AI compiler...<br/>
            {'>'} Generating cinematic interface...<br/>
            {'>'} Rendering futuristic UI...<br/>
            {'>'} Success.
          </div>
        </div>
      </div>
    </AppShell>
  )
}
