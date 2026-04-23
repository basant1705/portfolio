import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { skillCategories } from "@/data/skills";

export const Skills = () => {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-cyan">
               Skills
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              The technologies <span className="text-gradient">powering my work.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-muted-foreground md:text-lg">
              Technologies selected for performance, reliability, and great user experience.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((cat, idx) => (
            <Reveal key={cat.title} delay={0.05 + idx * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass p-6 transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-card-soft">
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-card ring-1 ring-border">
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {cat.title}
                  </h3>
                </div>

                <ul className="space-y-3.5">
                  {cat.skills.map((s, i) => (
                    <li key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm font-medium">{s.name}</span>
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {s.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          className="h-full rounded-full bg-gradient-brand"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{
                            duration: 1.1,
                            delay: 0.1 + i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-brand-blue/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
