import AppShell from "../layouts/AppShell"

export default function Notifications() {
  return (
    <AppShell>
      <h1 className="gradient-text" style={{fontSize:"52px",marginBottom:"25px"}}>
        Notifications
      </h1>

      <div style={{display:"grid",gap:"18px"}}>
        {["AI image generated","Code build completed","Agent workflow finished","New memory saved"].map(item=>(
          <div key={item} className="glass" style={{padding:"22px",borderRadius:"24px"}}>
            {item}
          </div>
        ))}
      </div>
    </AppShell>
  )
}
