export function ThemeProvider({ children }) {
  return <>{children}</>
}

export function ThemeToggle() {
  return <button className="glass" style={{borderRadius:999,padding:"8px 12px"}}>☾</button>
}
