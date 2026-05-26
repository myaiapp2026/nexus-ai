import AppShell from "../layouts/AppShell"

export default function Settings() {
  return (
    <AppShell>
      <h1 style={{
        fontSize:"46px",
        marginBottom:"30px",
        color:"#c084fc"
      }}>
        Settings
      </h1>

      <div style={{
        display:"grid",
        gap:"20px",
        maxWidth:"800px"
      }}>

        {[
          "Profile Settings",
          "AI Preferences",
          "Theme Configuration",
          "Notification Settings",
          "Workspace Controls"
        ].map(item=>(
          <div
            key={item}
            style={{
              padding:"24px",
              borderRadius:"24px",
              background:"rgba(255,255,255,0.05)",
              border:"1px solid rgba(255,255,255,0.08)"
            }}
          >
            <h3 style={{
              marginBottom:"10px"
            }}>
              {item}
            </h3>

            <p style={{
              color:"#94a3b8"
            }}>
              Configure futuristic AI operating system controls.
            </p>
          </div>
        ))}

      </div>
    </AppShell>
  )
}
