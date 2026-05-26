import AppShell from "../layouts/AppShell"

export default function Notes() {
  return (
    <AppShell>
      <h1 style={{fontSize:"46px",marginBottom:"25px",color:"#c084fc"}}>
        AI Notes
      </h1>

      <div style={{
        display:"grid",
        gap:"18px"
      }}>
        {[
          "Project ideas",
          "Website prompts",
          "AI memory",
          "Study notes"
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
            <h3>{item}</h3>

            <p style={{
              color:"#94a3b8"
            }}>
              AI-powered workspace notes.
            </p>
          </div>
        ))}
      </div>
    </AppShell>
  )
}
