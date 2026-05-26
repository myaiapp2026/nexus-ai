import AppShell from "../layouts/AppShell"

export default function Profile() {
  return (
    <AppShell>
      <h1 className="gradient-text" style={{fontSize:"52px",marginBottom:"25px"}}>
        Profile
      </h1>

      <div className="glass" style={{padding:"30px",borderRadius:"30px",maxWidth:"800px"}}>
        <div style={{width:"110px",height:"110px",borderRadius:"999px",background:"linear-gradient(135deg,#9333ea,#2563eb)",marginBottom:"20px"}} />

        <h2>Souban</h2>
        <p style={{color:"#94a3b8",marginTop:"8px"}}>
          NEXUS AI workspace owner
        </p>

        <button style={{marginTop:"24px",padding:"14px 22px",borderRadius:"16px",border:"none",background:"linear-gradient(135deg,#9333ea,#2563eb)",color:"white",fontWeight:"800"}}>
          Edit Profile
        </button>
      </div>
    </AppShell>
  )
}
