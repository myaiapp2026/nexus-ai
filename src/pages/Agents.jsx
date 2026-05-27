import AppShell from "../components/AppShell"

export default function Agents() {
  return (
    <AppShell>
      <h1 className="page-title gradient-text">AI Agents</h1>

      <div className="grid-4">
        {["Research Agent","Code Agent","Content Agent","Data Agent"].map(item=>(
          <div key={item} className="glass card">
            <div style={{
              width:54,
              height:54,
              borderRadius:18,
              background:"linear-gradient(135deg,#7c3aed,#2563eb)",
              marginBottom:18
            }} />

            <h2>{item}</h2>
            <p className="muted" style={{marginTop:10}}>Autonomous AI specialist.</p>
          </div>
        ))}
      </div>
    </AppShell>
  )
}
