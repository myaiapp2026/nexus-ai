import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { ChatPreview } from "./chat-preview";

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs"
            >
              <span className="size-1.5 rounded-full bg-emerald-400 pulse-glow" />
              <span className="text-muted-foreground">
                NEXUS OS v4.0 — now in early access
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]"
            >
              Your AI
              <br />
              <span className="text-gradient">Operating System</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Chat, code, design, automate, and ship — from one cinematic
              workspace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#start"
                className="group relative inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background overflow-hidden"
              >
                <Sparkles className="size-4" />
                Start Free
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#github"
                className="inline-flex h-12 items-center gap-2 rounded-full glass px-5 text-sm"
              >
                <span className="size-4">⌘</span>
                Continue with GitHub
              </a>

              <a
                href="#demo"
                className="inline-flex h-12 items-center gap-2 rounded-full px-4 text-sm text-muted-foreground hover:text-foreground"
              >
                <span className="grid size-7 place-items-center rounded-full bg-gradient-neon">
                  <Play className="size-3 text-white fill-white" />
                </span>
                Watch demo
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <ChatPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
