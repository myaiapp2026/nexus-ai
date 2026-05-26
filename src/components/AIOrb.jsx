export default function AIOrb() {
  return (
    <div style={{
      position:"fixed",
      right:"40px",
      bottom:"40px",
      width:"90px",
      height:"90px",
      borderRadius:"999px",
      background:"radial-gradient(circle,#9333ea,#2563eb)",
      boxShadow:"0 0 80px rgba(147,51,234,0.65)",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      zIndex:100,
      animation:"float 5s ease-in-out infinite"
    }}>
      <div style={{
        width:"26px",
        height:"26px",
        borderRadius:"999px",
        background:"white"
      }} />
    </div>
  )
}
