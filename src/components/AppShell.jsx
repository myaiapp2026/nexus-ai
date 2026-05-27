import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import { motion } from "framer-motion"

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <div className="bg-mesh"></div>
      <div className="bg-grid"></div>

      <Sidebar />

      <motion.main
        className="app-main"
        initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0}}
        transition={{duration:.4}}
      >
        <Topbar />

        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.15}}
        >
          {children}
        </motion.div>
      </motion.main>

      <div className="orb">✦</div>
    </div>
  )
}
