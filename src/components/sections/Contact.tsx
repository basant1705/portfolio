import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2 } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { socials } from "@/data/socials";
import { toast } from "@/hooks/use-toast";

type State = "idle" | "loading" | "success";

export const Contact = () => {
  const [state, setState] = useState<State>("idle");

  // ✅ UPDATED FUNCTION (REAL BACKEND CONNECTION)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setState("success");

        toast({
          title: "Message sent 🚀",
          description: "Thanks — I'll get back to you shortly.",
        });

        form.reset();
        setTimeout(() => setState("idle"), 2400);
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      console.log(error);

      setState("idle");

      toast({
        title: "Error ❌",
        description: "Failed to send message. Try again.",
      });
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-cyan">
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Let's build <span className="text-gradient">something great.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:text-lg">
              Have an opportunity or idea? I’d love to hear from you.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-2" delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-card p-7 ring-1 ring-border">
              <div>
                <h3 className="font-display text-xl font-semibold">
                  Reach out directly
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer a different channel? Pick whatever works for you.
                </p>
              </div>

              <ul className="mt-8 space-y-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-border/70 bg-background/40 px-4 py-3 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-purple/60 hover:shadow-glow"
                    >
                      <span className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-medium">{label}</span>
                      </span>
                      <span className="font-mono text-xs text-muted-foreground transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="md:col-span-3" delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl glass-strong p-7 md:p-8"
            >
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="h-11 rounded-xl border-border/70 bg-background/50 backdrop-blur"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="h-11 rounded-xl border-border/70 bg-background/50 backdrop-blur"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me a bit about what you're working on…"
                    className="resize-none rounded-xl border-border/70 bg-background/50 backdrop-blur"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={state !== "idle"}
                  className="group relative h-12 w-full overflow-hidden rounded-xl bg-gradient-brand text-primary-foreground btn-glow hover:opacity-95"
                >
                  <motion.span
                    key={state}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2"
                  >
                    {state === "loading" && (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    )}

                    {state === "success" && (
                      <>
                        <Check className="h-4 w-4" />
                        Sent
                      </>
                    )}

                    {state === "idle" && (
                      <>
                        Send message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </motion.span>
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};