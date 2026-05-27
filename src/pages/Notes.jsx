import AppShell from "../components/AppShell"

export default function Notes() {
  return (
    <AppShell>
      <h1 className="page-title gradient-text">Notes</h1>

      <div className="grid-2">
        <div className="glass card">
          <h2>Folders</h2>

          {["AI Notes","Personal","Work","Ideas","Projects"].map(item=>(
            <div key={item} className="glass" style={{padding:16,borderRadius:16,marginTop:14}}>
              {item}
            </div>
          ))}
        </div>

        <div className="glass card">
          <h2>AI Note</h2>
          <textarea className="input" rows="12" placeholder="Write your AI-powered notes..." />
          <button className="btn" style={{marginTop:14}}>AI Rewrite</button>
        </div>
      </div>
    </AppShell>
  )
}
