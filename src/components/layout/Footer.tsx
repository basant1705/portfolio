import { socials } from "@/data/socials";

export const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Basant Kumar. Crafted with care.
        </p>
        <div className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full glass transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
