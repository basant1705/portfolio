import { useEffect, useRef, useState } from "react";

type Pos = { x: number; y: number };

export const useCursorPosition = () => {
  const [pos, setPos] = useState<Pos>({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() =>
        setPos({ x: e.clientX, y: e.clientY })
      );
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        'a, button, input, textarea, [role="button"], [data-cursor="hover"]'
      );
      setHovering(interactive);
    };
    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return { pos, hovering, clicked };
};
