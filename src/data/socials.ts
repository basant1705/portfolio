import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/basant1705", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/basant-kumar-99a085299?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: Linkedin },
  { label: "Email", href: "mailto:rajmishra8578@gmail.com", icon: Mail },
];
