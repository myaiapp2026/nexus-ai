import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0 grid-bg opacity-60" />

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute -top-40 -left-32 size-[640px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--neon) 55%, transparent), transparent 60%)",
        }}
      />

      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-40 size-[720px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--neon-2) 50%, transparent), transparent 65%)",
        }}
      />

      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-200px] left-1/4 size-[680px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--neon-3) 45%, transparent), transparent 65%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, currentColor 0, currentColor 1px, transparent 1px, transparent 4px)",
        }}
      />
    </div>
  );
}
