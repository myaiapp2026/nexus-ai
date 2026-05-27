import AppShell from "../components/AppShell"

export default function Dashboard() {

  const stats = [
    ["AI Agents","24"],
    ["Messages","24,580"],
    ["Images Generated","2,340"],
    ["Code Runs","1,423"]
  ]

  return (
    <AppShell>

      <h1 className="page-title gradient-text">
        NEXUS AI OS
      </h1>

      <p className="muted" style={{marginBottom:24}}>
        Premium cinematic AI workspace.
      </p>

      <div className="grid-4">

        {stats.map(([title,value]) => (
          <div
            key={title}
            className="glass card"
          >
            <p className="muted">{title}</p>

            <h2 style={{
              fontSize:52,
              marginTop:16,
              fontWeight:900
            }}>
              {value}
            </h2>
          </div>
        ))}

      </div>

      <div
        className="grid-2"
        style={{marginTop:22}}
      >

        <div
          className="glass card"
          style={{minHeight:320}}
        >
          <h2 style={{marginBottom:20}}>
            System Activity
          </h2>

          <div style={{
            height:220,
            borderRadius:24,
            background:"linear-gradient(135deg,#7c3aed,#2563eb)",
            opacity:.9
          }} />
        </div>

        <div
          className="glass card"
          style={{minHeight:320}}
        >
          <h2 style={{marginBottom:20}}>
            AI Assistant
          </h2>

          <div style={{
            display:"grid",
            gap:14
          }}>

            {[
              "Summarize today",
              "Generate image",
              "Analyze data",
              "Create workflow"
            ].map(item => (
              <div
                key={item}
                className="glass"
                style={{
                  padding:18,
                  borderRadius:18
                }}
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>

    </AppShell>
  )
}
