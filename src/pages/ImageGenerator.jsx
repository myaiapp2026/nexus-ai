import AppShell from "../components/AppShell"

export default function ImageGenerator() {
  return (
    <AppShell>
      <h1 className="page-title gradient-text">Image Generator</h1>

      <div className="grid-2">

        <div className="glass card">
          <textarea className="input" rows="7" placeholder="A futuristic city in the clouds..." />

          <select className="input" style={{marginTop:14}}>
            <option>Cyberpunk</option>
            <option>Cinematic</option>
            <option>Luxury UI</option>
          </select>

          <button className="btn" style={{marginTop:14,width:"100%"}}>
            Generate
          </button>
        </div>

        <div className="glass card">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
            {[1,2,3,4].map(i=>(
              <div key={i} style={{
                height:170,
                borderRadius:20,
                background:"linear-gradient(135deg,#7c3aed,#2563eb,#06b6d4)"
              }} />
            ))}
          </div>
        </div>

      </div>
    </AppShell>
  )
}
