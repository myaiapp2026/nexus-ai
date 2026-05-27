import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme";

const nav = [
  { label: "Features", href: "#features" },
  { label: "AI Tools", href: "#tools" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-3 z-50 flex justify-center px-3"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-3 py-2 transition-all ${
            scrolled ? "glass-strong shadow-2xl" : "glass"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 pl-2">
            <span className="relative grid size-8 place-items-center rounded-lg bg-gradient-neon">
              <Sparkles className="size-4 text-white" />

              <span className="absolute inset-0 rounded-lg blur-md opacity-60 bg-gradient-neon -z-10" />
            </span>

            <span className="font-semibold tracking-tight">
              NEXUS<span className="text-gradient">AI</span>
            </span>

            <span className="ml-2 hidden sm:inline-flex items-center gap-1 rounded-full border border-border/60 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-400 pulse-glow" />
              Online
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="relative px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {n.label}

                <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform bg-gradient-neon" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
              href="#login"
              className="hidden sm:inline-flex h-9 items-center rounded-full px-4 text-sm text-muted-foreground hover:text-foreground"
            >
              Login
            </a>

            <a
              href="#start"
              className="hidden sm:inline-flex h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background hover:opacity-90 transition"
            >
              Get Started
            </a>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden size-9 rounded-full glass grid place-items-center"
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="absolute inset-x-3 top-3 glass-strong rounded-2xl p-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">Menu</span>

                <button
                  onClick={() => setOpen(false)}
                  className="size-9 rounded-full glass grid place-items-center"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="mt-4 flex flex-col">
                {nav.map((n) => (
                  <a
                    key={n.label}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base hover:bg-accent"
                  >
                    {n.label}
                  </a>
                ))}

                <div className="mt-3 flex gap-2">
                  <a
                    href="#login"
                    className="flex-1 h-10 grid place-items-center rounded-full glass text-sm"
                  >
                    Login
                  </a>

                  <a
                    href="#start"
                    className="flex-1 h-10 grid place-items-center rounded-full bg-foreground text-background text-sm font-medium"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

