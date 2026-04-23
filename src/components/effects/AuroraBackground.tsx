export const AuroraBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="aurora" />
      <div
        className="absolute inset-x-0 top-0 h-[60vh]"
        style={{ background: "var(--gradient-radial)" }}
      />
    </div>
  );
};
