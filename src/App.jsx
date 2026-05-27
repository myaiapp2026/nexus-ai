import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { lazy, Suspense } from "react"

const Dashboard = lazy(() => import("./pages/Dashboard"))
const Chat = lazy(() => import("./pages/Chat"))
const ImageGenerator = lazy(() => import("./pages/ImageGenerator"))
const CodeGenerator = lazy(() => import("./pages/CodeGenerator"))
const Notes = lazy(() => import("./pages/Notes"))
const Voice = lazy(() => import("./pages/Voice"))
const Agents = lazy(() => import("./pages/Agents"))
const Settings = lazy(() => import("./pages/Settings"))
const Profile = lazy(() => import("./pages/Profile"))
const Notifications = lazy(() => import("./pages/Notifications"))

function Loader() {
  return (
    <div style={{
      minHeight:"100vh",
      background:"#050816",
      color:"#c084fc",
      display:"grid",
      placeItems:"center",
      fontFamily:"Arial",
      fontSize:"28px",
      fontWeight:"800"
    }}>
      Loading NEXUS AI...
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/image" element={<ImageGenerator />} />
          <Route path="/code" element={<CodeGenerator />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
