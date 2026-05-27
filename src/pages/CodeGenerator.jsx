import AppShell from "../components/AppShell"

export default function CodeGenerator() {
  return (
    <AppShell>
      <h1 className="page-title gradient-text">Code Generator</h1>

      <div className="grid-2">

        <div className="glass card">
          <textarea className="input" rows="8" placeholder="Create a modern dashboard in React..." />
          <button className="btn" style={{marginTop:14,width:"100%"}}>Generate Code</button>
        </div>

        <div className="glass card">
          <pre style={{
            color:"#a78bfa",
            lineHeight:1.7,
            overflow:"auto"
          }}>
{`export default function Dashboard(){
  return <div className="glass">NEXUS AI</div>
}`}
          </pre>
        </div>

      </div>
    </AppShell>
  )
}
