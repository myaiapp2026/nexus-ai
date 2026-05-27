export function Pricing() {
  return (
    <section id="pricing" style={{padding:"80px 24px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <h2 className="page-title gradient-text">Pricing</h2>
        <div className="grid-4" style={{marginTop:24}}>
          {["Starter Free","Pro $20","Team $49"].map(x=>(
            <div key={x} className="glass card"><h2>{x}</h2><button className="btn" style={{marginTop:20}}>Choose</button></div>
          ))}
        </div>
      </div>
    </section>
  )
}
