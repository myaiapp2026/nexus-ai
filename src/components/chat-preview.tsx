import { motion } from "framer-motion";
import { Bot, Code2, Image as ImageIcon, Mic, Paperclip, Send, Sparkles, Square, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const SAMPLE = "Sure — here's a React component using a custom hook for streaming AI tokens with cinematic typing animation. It handles cancellation, retries, and exposes a clean async iterator interface.";

function useTyper(text: string, speed = 18) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;

    setOut("");

    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));

      if (i >= text.length) clearInterval(id);
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return out;
}

export function ChatPreview() {
  const typed = useTyper(SAMPLE);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      style={{ perspective: 1200 }}
      className="relative w-full"
    >
      <div className="absolute -inset-6 bg-gradient-neon opacity-30 blur-3xl rounded-[2rem]" />

      <div className="relative glass-strong rounded-2xl overflow-hidden glow-ring">
        <div className="flex items-center justify-between border-b border-border/60 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400/80" />
              <span className="size-2.5 rounded-full bg-yellow-400/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
            </div>

            <span className="ml-2 text-xs text-muted-foreground">
              nexus / workspace
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="rounded-md border border-border/60 px-2 py-0.5 text-[10px] text-muted-foreground">
              NEXUS-4 · reasoning
            </span>

            <span className="inline-flex items-center gap-1 rounded-md border border-border/60 px-2 py-0.5 text-[10px] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-400 pulse-glow" />
              live
            </span>
          </div>
        </div>

        <div className="grid grid-cols-[160px_1fr] min-h-[420px]">
          <aside className="hidden sm:flex flex-col gap-1 border-r border-border/60 p-2 text-xs">
            <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
              Recent
            </div>

            {["Streaming hook", "Image upscaler", "Agent workflow", "Edge worker", "Vector recall"].map((t, i) => (
              <button
                key={t}
                className={`text-left rounded-md px-2 py-1.5 hover:bg-accent ${
                  i === 0
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {t}
              </button>
            ))}

            <div className="mt-3 px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
              Tools
            </div>

            {[
              { i: Code2, l: "Code" },
              { i: ImageIcon, l: "Image" },
              { i: Terminal, l: "Compile" },
              { i: Mic, l: "Voice" },
            ].map(({ i: Icon, l }) => (
              <button
                key={l}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <Icon className="size-3.5" />
                {l}
              </button>
            ))}
          </aside>

          <div className="flex flex-col">
            <div className="flex-1 space-y-4 overflow-hidden p-4">
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary/90 text-primary-foreground px-3.5 py-2 text-sm">
                  Build me a streaming AI hook in React with cancellation.
                </div>
              </div>

              <div className="flex gap-2">
                <div className="size-7 shrink-0 rounded-full bg-gradient-neon grid place-items-center">
                  <Sparkles className="size-3.5 text-white" />
                </div>

                <div className="max-w-[85%] space-y-2">
                  <p className="text-sm leading-relaxed cursor-blink">
                    {typed}
                  </p>

                  <div className="rounded-xl border border-border/60 bg-background/60 overflow-hidden text-xs">
                    <div className="flex items-center justify-between border-b border-border/60 px-3 py-1.5 text-muted-foreground">
                      <span>useStreamingAI.ts</span>

                      <span className="text-[10px]">TypeScript</span>
                    </div>

                    <pre className="px-3 py-2 overflow-x-auto">
                      <code>{`export function useStreamingAI() {
  const [text, setText] = useState("");
  const ctrl = useRef<AbortController>();

  async function run(prompt: string) {
    ctrl.current?.abort();

    ctrl.current = new AbortController();

    for await (const t of stream(prompt, ctrl.current.signal))
      setText((p) => p + t);
  }

  return {
    text,
    run,
    stop: () => ctrl.current?.abort()
  };
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border/60 p-3">
              <div className="flex items-end gap-2 rounded-2xl glass px-3 py-2">
                <button className="size-8 grid place-items-center rounded-lg hover:bg-accent text-muted-foreground">
                  <Paperclip className="size-4" />
                </button>

                <div className="flex-1 text-sm text-muted-foreground py-1.5">
                  Ask Nexus anything…
                </div>

                <button className="size-8 grid place-items-center rounded-lg hover:bg-accent text-muted-foreground">
                  <Mic className="size-4" />
                </button>

                <button className="size-8 grid place-items-center rounded-lg bg-gradient-neon text-white">
                  <Send className="size-4" />
                </button>
              </div>

              <div className="mt-1.5 flex items-center justify-between text-[10px] text-muted-foreground px-1">
                <span className="flex items-center gap-1">
                  <Bot className="size-3" />
                  Nexus reasoning enabled
                </span>

                <span>⌘K · Tools · ⇧⏎ newline</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="hidden lg:flex absolute -right-10 top-10 glass-strong rounded-xl p-3 gap-3 items-center float-y"
      >
        <div className="size-8 rounded-lg bg-gradient-neon grid place-items-center">
          <Square className="size-4 text-white" />
        </div>

        <div className="text-xs">
          <div className="font-medium">Agent finished</div>

          <div className="text-muted-foreground">
            Deployed to edge · 1.2s
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="hidden lg:flex absolute -left-12 bottom-10 glass-strong rounded-xl p-3 gap-3 items-center float-y"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="size-8 rounded-lg bg-gradient-neon grid place-items-center">
          <ImageIcon className="size-4 text-white" />
        </div>

        <div className="text-xs">
          <div className="font-medium">4 images generated</div>

          <div className="text-muted-foreground">
            cyberpunk · 2048px
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
