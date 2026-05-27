import { Link } from "react-router-dom"

export function Hero() {
  return (
    <section style={{padding:"150px 24px 90px"}}>
      <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"}}>
        <div>
          <div className="glass" style={{display:"inline-flex",padding:"8px 14px",borderRadius:999,marginBottom:22}}>
            ● NEXUS OS v4.0 — early access
          </div>

          <h1 className="gradient-text" style={{fontSize:72,lineHeight:1,fontWeight:900,marginBottom:22}}>
            Your AI<br/>Operating System
          </h1>

          <p className="text-muted-foreground" style={{fontSize:18,lineHeight:1.7,maxWidth:560}}>
            Chat, code, design, automate, and ship from one cinematic workspace.
          </p>

          <Link to="/dashboard">
            <button className="btn" style={{marginTop:30}}>
              Start Free
            </button>
          </Link>
        </div>

        <div className="glass-strong" style={{borderRadius:28,padding:24,minHeight:420}}>
          <div className="bg-gradient-neon" style={{height:250,borderRadius:24}} />
          <div className="glass" style={{padding:18,borderRadius:18,marginTop:18}}>
            NEXUS AI Workspace Preview
          </div>
        </div>
      </div>
    </section>
  )
}
