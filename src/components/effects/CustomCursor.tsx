import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useCursorPosition } from "@/hooks/useCursorPosition";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const CustomCursor = () => {
  const { pos, hovering, clicked } = useCursorPosition();
  const isFinePointer = useMediaQuery("(hover: hover) and (pointer: fine)");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const trailX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.6 });
  const trailY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.6 });

  useEffect(() => {
    x.set(pos.x);
    y.set(pos.y);
  }, [pos, x, y]);

  if (!isFinePointer) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-foreground mix-blend-difference"
        style={{
          translateX: springX,
          translateY: springY,
          x: "-50%",
          y: "-50%",
          scale: clicked ? 0.6 : hovering ? 0.4 : 1,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] rounded-full border border-brand-purple/60"
        style={{
          translateX: trailX,
          translateY: trailY,
          x: "-50%",
          y: "-50%",
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          backgroundColor: hovering
            ? "hsl(var(--brand-purple) / 0.12)"
            : "transparent",
          boxShadow: hovering
            ? "0 0 40px hsl(var(--brand-purple) / 0.6)"
            : "0 0 18px hsl(var(--brand-blue) / 0.35)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
};
