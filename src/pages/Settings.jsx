import AppShell from "../components/AppShell"

export default function Settings() {
  return (
    <AppShell>
      <h1 className="page-title gradient-text">
        Settings
      </h1>

      <div className="grid-2">

        <div className="glass card">
          <h2 style={{marginBottom:20}}>
            Appearance
          </h2>

          {["Dark Mode","Cinematic UI","Animations","Glass Effects"].map(item=>(
            <div
              key={item}
              className="glass"
              style={{
                padding:18,
                borderRadius:18,
                marginBottom:14,
                display:"flex",
                justifyContent:"space-between"
              }}
            >
              <span>{item}</span>
              <span>ON</span>
            </div>
          ))}
        </div>

        <div className="glass card">
          <h2 style={{marginBottom:20}}>
            AI Preferences
          </h2>

          <input className="input" placeholder="Default AI model" />

          <select className="input" style={{marginTop:14}}>
            <option>GPT-5</option>
            <option>Claude</option>
            <option>Gemini</option>
          </select>

          <button className="btn" style={{marginTop:18}}>
            Save Settings
          </button>
        </div>

      </div>
    </AppShell>
  )
}
