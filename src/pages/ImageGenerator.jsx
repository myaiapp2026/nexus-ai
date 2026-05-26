import AppShell from "../layouts/AppShell"

export default function ImageGenerator() {
  return (
    <AppShell>
      <h1 style={{
        fontSize:"46px",
        color:"#c084fc",
        marginBottom:"25px"
      }}>
        AI Image Studio
      </h1>

      <div style={{
        background:"rgba(255,255,255,0.05)",
        padding:"24px",
        borderRadius:"28px",
        border:"1px solid rgba(255,255,255,0.08)",
        marginBottom:"30px"
      }}>
        <input
          placeholder="Describe futuristic cinematic artwork..."
          style={{
            width:"100%",
            padding:"18px",
            background:"#0f172a",
            border:"none",
            borderRadius:"18px",
            color:"white",
            marginBottom:"18px"
          }}
        />

        <button style={{
          background:"linear-gradient(135deg,#9333ea,#2563eb)",
          color:"white",
          border:"none",
          padding:"15px 24px",
          borderRadius:"16px",
          fontWeight:"800"
        }}>
          Generate Image
        </button>
      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:"22px"
      }}>
        {[
          "Cyber AI Orb",
          "Luxury Robot",
          "Neon Workspace",
          "Future City"
        ].map(item=>(
          <div
            key={item}
            style={{
              height:"280px",
              borderRadius:"28px",
              background:"linear-gradient(135deg,#9333ea,#2563eb)",
              display:"flex",
              alignItems:"end",
              padding:"22px",
              fontWeight:"800",
              boxShadow:"0 0 50px rgba(147,51,234,0.25)"
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </AppShell>
  )
}
