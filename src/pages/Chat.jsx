import AppShell from "../components/AppShell"

export default function Chat() {
  return (
    <AppShell>
      <h1 className="page-title gradient-text">AI Chat</h1>

      <div className="grid-2">

        <div className="glass card" style={{minHeight:520}}>
          {[
            ["AI","How can I help you today?"],
            ["You","Explain quantum computing in simple terms"],
            ["AI","Quantum computing uses qubits to process many possibilities at once."]
          ].map(([role,msg])=>(
            <div key={msg} style={{
              padding:18,
              marginBottom:16,
              borderRadius:18,
              background:role==="You"
                ?"linear-gradient(135deg,#7c3aed,#2563eb)"
                :"rgba(255,255,255,.05)"
            }}>
              <b>{role}</b>
              <p style={{marginTop:8,color:"#cbd5e1"}}>{msg}</p>
            </div>
          ))}
        </div>

        <div className="glass card">
          <h2>Chat History</h2>

          {["New Chat","AI Assistant","Code Help","Project Ideas"].map(item=>(
            <div key={item} className="glass" style={{padding:16,borderRadius:16,marginTop:14}}>
              {item}
            </div>
          ))}
        </div>

      </div>
    </AppShell>
  )
}
