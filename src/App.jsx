import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Chat from "./pages/Chat"
import ImageGenerator from "./pages/ImageGenerator"
import CodeGenerator from "./pages/CodeGenerator"
import Notes from "./pages/Notes"
import Voice from "./pages/Voice"
import Agents from "./pages/Agents"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"
import Notifications from "./pages/Notifications"

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
