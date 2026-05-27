export default function CinematicBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: -1,
        background:
          "radial-gradient(circle at top left,#0f172a,#020617 40%,#000000)"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "999px",
          background: "#9333ea",
          filter: "blur(140px)",
          opacity: 0.25,
          top: "-120px",
          left: "-120px",
          animation: "pulse 8s ease-in-out infinite"
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          borderRadius: "999px",
          background: "#2563eb",
          filter: "blur(140px)",
          opacity: 0.22,
          bottom: "-120px",
          right: "-120px",
          animation: "pulse 10s ease-in-out infinite"
        }}
      />
    </div>
  )
}
