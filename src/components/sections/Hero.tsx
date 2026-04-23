"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials } from "@/data/socials";

const ROLES = ["Full Stack Developer", "Python Developer", "Java Programmer"];

const useTypewriter = (words: string[], speed = 80, pause = 1400) => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), pause);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setI((v) => v + 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
};

export const Hero = () => {
  const role = useTypewriter(ROLES);

  return (
    <section id="top" className="relative pt-28 md:pt-36">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* LEFT SIDE (TEXT) */}
          <div className="text-center md:text-left">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-4xl font-bold sm:text-5xl md:text-6xl"
            >
              Basant Kumar
              <span className="block mt-2 text-gradient">
                Building high-impact software that feels premium.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-5 text-muted-foreground"
            >
              B.Tech CSE student at Galgotias University — building full-stack platforms,
              AI tools, and modern digital experiences.
            </motion.p>

            {/* Typewriter */}
            <div className="mt-4 flex items-center gap-2 justify-center md:justify-start text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-brand-cyan" />
              {role}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3 justify-center md:justify-start">
              <Button asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-3 justify-center md:justify-start">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank">
                  <Icon className="h-5 w-5 hover:scale-110 transition" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE (3D IMAGE) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
           <div
  className="group relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden"
  style={{ perspective: "1200px" }}
>
  <motion.div
    whileHover={{
      rotateX: 10,
      rotateY: -10,
      scale: 1.05,
    }}
    className="relative h-full w-full rounded-full overflow-hidden shadow-2xl"
  >
    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

    <img
      src="/profile.png"
      alt="Basant Kumar"
      className="h-full w-full object-cover object-center"
    />
  </motion.div>
</div> 
          </motion.div>

        </div>
      </div>
    </section>
  );
};