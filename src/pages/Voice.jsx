import AppShell from "../layouts/AppShell"

export default function Voice() {
  return (
    <AppShell>
      <div style={{
        display:"grid",
        placeItems:"center",
        minHeight:"70vh"
      }}>
        <div style={{
          textAlign:"center"
        }}>
          <div style={{
            width:"220px",
            height:"220px",
            borderRadius:"999px",
            background:"radial-gradient(circle,#9333ea,#2563eb)",
            boxShadow:"0 0 120px #9333ea",
            margin:"0 auto 30px"
          }} />

          <h1 style={{
            fontSize:"52px",
            marginBottom:"14px"
          }}>
            AI Voice Assistant
          </h1>

          <p style={{
            color:"#94a3b8",
            fontSize:"18px"
          }}>
            Listening mode initialized.
          </p>
        </div>
      </div>
    </AppShell>
  )
}
