import AppShell from "../components/AppShell"

export default function Voice() {
  return (
    <AppShell>
      <h1 className="page-title gradient-text">AI Voice</h1>

      <div className="glass card" style={{minHeight:560,display:"grid",placeItems:"center"}}>
        <div style={{textAlign:"center"}}>
          <div style={{
            width:220,
            height:220,
            borderRadius:"999px",
            background:"radial-gradient(circle,#fff,#a78bfa,#7c3aed,#2563eb)",
            boxShadow:"0 0 120px rgba(124,58,237,.8)",
            margin:"0 auto 28px"
          }} />

          <h2>Listening...</h2>
          <p className="muted" style={{marginTop:8}}>Tap to stop</p>
        </div>
      </div>
    </AppShell>
  )
}
