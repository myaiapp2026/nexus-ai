export function Reviews() {
  return (
    <section id="reviews" style={{padding:"80px 24px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <h2 className="page-title gradient-text">Loved by builders</h2>
        <div className="grid-4" style={{marginTop:24}}>
          {["ChatGPT + Cursor feel","Insane UI quality","Fast AI workspace","Future of SaaS"].map(x=>(
            <div key={x} className="glass card">★★★★★<br/><br/>{x}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
