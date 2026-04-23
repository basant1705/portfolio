import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { TiltCard } from "@/components/effects/TiltCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const accentMap: Record<string, string> = {
  purple: "from-brand-purple/40 via-brand-purple/10 to-transparent",
  blue: "from-brand-blue/40 via-brand-blue/10 to-transparent",
  cyan: "from-brand-cyan/40 via-brand-cyan/10 to-transparent",
};

export const Projects = () => {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="container">
        
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-cyan">
                Selected Work
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Projects I'm <span className="text-gradient">proud of.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <p className="max-w-md text-muted-foreground">
              Projects built to solve real-world problems — from AI tools to full-stack systems.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={0.05 + i * 0.1}>
              <TiltCard className="h-full" intensity={6}>
                <article
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl glass-strong p-7 transition-all duration-500 hover:shadow-card-soft md:p-8"
                >
                  {/* Accent Glow */}
                  <div
                    className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${accentMap[p.accent]} opacity-40 group-hover:opacity-100 transition`}
                  />

                  {/* 🔥 IMAGE PREVIEW */}
                  <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-border">
                    
                    {/* Image */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Tagline */}
                    <div className="absolute top-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs backdrop-blur text-white">
                      {p.tagline}
                    </div>

                    {/* Bottom Dots */}
                    <div className="absolute bottom-3 left-3 flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-destructive/70" />
                      <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                      <span className="h-2 w-2 rounded-full bg-green-500/70" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-1 flex-col">
                    
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {p.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {p.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-5 space-y-1.5">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-1 rounded-full bg-brand-cyan" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-wrap items-center gap-2">
                      <Button
                        asChild
                        className="rounded-full bg-gradient-brand text-primary-foreground btn-glow hover:opacity-95"
                      >
                        <a href={p.demo ?? "#"} target="_blank">
                          Live demo
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-border/80 bg-background/40 backdrop-blur hover:bg-secondary"
                      >
                        <a href={p.github} target="_blank">
                          <Github className="mr-1.5 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>

                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};