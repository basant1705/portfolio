import { Reveal } from "@/components/animations/Reveal";
import { timeline } from "@/data/timeline";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-cyan">
               Journey
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Education & <span className="text-gradient">milestones.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Timeline rail */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand-purple/60 via-brand-blue/40 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div
                    className={`relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 ${
                      left ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    {/* Node */}
                    <div className="absolute left-4 top-3 grid h-3 w-3 -translate-x-1/2 place-items-center md:left-1/2">
                      <span className="absolute h-3 w-3 rounded-full bg-gradient-brand shadow-glow" />
                      <span className="absolute h-6 w-6 animate-ping rounded-full bg-brand-purple/40" />
                    </div>

                    <div className={left ? "md:pr-10 md:text-right" : "md:pl-10"}>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-cyan">
                        {item.period}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.org}
                      </p>
                    </div>

                    <div className={left ? "md:pl-10" : "md:pr-10 md:text-right"}>
                      <div className="rounded-2xl glass p-5">
                        <div
                          className={`mb-3 flex items-center gap-2 ${
                            left ? "" : "md:flex-row-reverse"
                          }`}
                        >
                          <GraduationCap className="h-4 w-4 text-brand-cyan" />
                          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                            Highlight
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                        {item.tags && (
                          <div
                            className={`mt-4 flex flex-wrap gap-1.5 ${
                              left ? "" : "md:justify-end"
                            }`}
                          >
                            {item.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-border/80 bg-secondary/60 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
