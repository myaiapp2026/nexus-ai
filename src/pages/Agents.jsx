import AppShell from "../layouts/AppShell"

export default function Agents() {
  return (
    <AppShell>
      <h1 style={{
        fontSize:"46px",
        marginBottom:"25px",
        color:"#c084fc"
      }}>
        AI Agents
      </h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
        gap:"22px"
      }}>
        {[
          "Research Agent",
          "Code Agent",
          "Design Agent",
          "Automation Agent"
        ].map(item=>(
          <div
            key={item}
            style={{
              padding:"28px",
              borderRadius:"28px",
              background:"rgba(255,255,255,0.05)",
              border:"1px solid rgba(255,255,255,0.08)"
            }}
          >
            <h3 style={{
              marginBottom:"12px"
            }}>
              {item}
            </h3>

            <p style={{
              color:"#94a3b8"
            }}>
              Autonomous AI workflow system.
            </p>
          </div>
        ))}
      </div>
    </AppShell>
  )
}
