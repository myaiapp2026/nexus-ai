import AppShell from "../components/AppShell"

export default function Profile() {
  return (
    <AppShell>
      <h1 className="page-title gradient-text">Profile</h1>

      <div className="grid-2">

        <div className="glass card">
          <div style={{
            width:120,
            height:120,
            borderRadius:"999px",
            background:"linear-gradient(135deg,#7c3aed,#2563eb)",
            marginBottom:22
          }} />

          <h2>Souban</h2>

          <p className="muted" style={{marginTop:8}}>
            Founder of NEXUS AI
          </p>

          <button className="btn" style={{marginTop:20}}>
            Edit Profile
          </button>
        </div>

        <div className="glass card">
          <h2 style={{marginBottom:20}}>Workspace Stats</h2>

          {[
            ["AI Chats","24,580"],
            ["Images","2,340"],
            ["Projects","128"],
            ["Agents","24"]
          ].map(([k,v])=>(
            <div
              key={k}
              className="glass"
              style={{
                padding:18,
                borderRadius:18,
                marginBottom:14,
                display:"flex",
                justifyContent:"space-between"
              }}
            >
              <span>{k}</span>
              <b>{v}</b>
            </div>
          ))}
        </div>

      </div>
    </AppShell>
  )
}
