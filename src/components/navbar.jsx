import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <header style={{position:"fixed",top:16,left:16,right:16,zIndex:50}}>
      <nav className="glass" style={{maxWidth:1100,margin:"0 auto",borderRadius:20,padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <Link to="/" style={{fontWeight:900}}>NEXUS<span className="text-gradient">AI</span></Link>
        <Link to="/dashboard"><button className="btn">Open App</button></Link>
      </nav>
    </header>
  )
}
