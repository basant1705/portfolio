import { Reveal } from "@/components/animations/Reveal";
import { Brain, Rocket, Code2 } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Full Stack Craft",
    body: "From thoughtful UI to resilient APIs, I build end-to-end products with React, Node and modern tooling.",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    body: "Strong CS fundamentals — DSA, algorithms, system thinking — applied to real, shippable software.",
  },
  {
    icon: Rocket,
    title: "Software Engineering",
    body: "I care about clean architecture, performance, and DX. The kind of code teams enjoy maintaining.",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-cyan">
                 About
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                Building scalable software with a {" "}
                <span className="text-gradient">product mindset.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground md:text-lg">
                I’m Basant, a Computer Science student at Galgotias University, focused on engineering high-impact software. I build AI-driven tools and full-stack systems with an emphasis on scalability, precision, and refined user experience. My work sits at the intersection of functionality and design — where systems don’t just work, they feel seamless.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-muted-foreground md:text-lg">
                I gravitate toward problems where thoughtful engineering and
                careful design intersect — and I'm always looking for the next
                opportunity to build something people genuinely love.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-3xl glass p-6 transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-card-soft">
                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-card text-foreground ring-1 ring-border">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-purple/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.34}>
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-card p-6 ring-1 ring-border">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Currently
                    </p>
                    <p className="mt-3 font-display text-xl font-semibold">
                      Shipping side projects, sharpening fundamentals,
                      preparing for SDE roles.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-brand-cyan" />
                    <span className="font-mono text-xs text-muted-foreground">
                      Open to internships & freelance
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
