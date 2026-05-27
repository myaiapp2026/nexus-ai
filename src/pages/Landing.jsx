import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <div style={{
      minHeight:"100vh",
      display:"grid",
      placeItems:"center",
      position:"relative",
      overflow:"hidden",
      padding:"24px"
    }}>
      <div className="bg-mesh"></div>
      <div className="bg-grid"></div>

      <div
        className="glass"
        style={{
          position:"relative",
          zIndex:2,
          maxWidth:1000,
          width:"100%",
          padding:"60px",
          borderRadius:"36px",
          textAlign:"center"
        }}
      >
        <h1
          className="gradient-text"
          style={{
            fontSize:"82px",
            fontWeight:"900",
            lineHeight:1,
            marginBottom:"22px"
          }}
        >
          NEXUS AI
        </h1>

        <p
          className="muted"
          style={{
            fontSize:"20px",
            maxWidth:700,
            margin:"0 auto",
            lineHeight:1.8
          }}
        >
          Futuristic cinematic AI operating system for chat,
          code, images, agents and automation.
        </p>

        <div style={{
          marginTop:"36px",
          display:"flex",
          justifyContent:"center",
          gap:"16px",
          flexWrap:"wrap"
        }}>
          <Link to="/dashboard">
            <button className="btn">
              Launch Workspace
            </button>
          </Link>

          <button
            className="glass"
            style={{
              borderRadius:"16px",
              padding:"14px 18px",
              border:"none",
              color:"white"
            }}
          >
            Watch Demo
          </button>
        </div>

      </div>
    </div>
  )
}
