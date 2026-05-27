import AppShell from "../components/AppShell"

export default function Notifications() {
  return (
    <AppShell>
      <h1 className="page-title gradient-text">
        Notifications
      </h1>

      <div className="glass card">

        {[
          "AI image generation completed",
          "New workflow deployed",
          "Code compilation successful",
          "Agent finished research task",
          "Workspace synced successfully"
        ].map(item=>(
          <div
            key={item}
            className="glass"
            style={{
              padding:18,
              borderRadius:18,
              marginBottom:14
            }}
          >
            🔔 {item}
          </div>
        ))}

      </div>
    </AppShell>
  )
}
