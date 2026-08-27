import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import Link from "next/link";
export function Socials() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="https://github.com/Stevieron"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="text-muted transition-colors hover:text-foreground"
      >
        <FaGithub size={22} />
      </Link>

      <Link
        href="https://linkedin.com/in/stephenbassey"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="text-muted transition-colors hover:text-foreground"
      >
        <FaLinkedin size={22} />
      </Link>

      <Link
        href="mailto:stevenbassey07@gmail.com"
        aria-label="Email"
        className="text-muted transition-colors hover:text-foreground"
      >
        <Mail size={22} />
      </Link>
    </div>
  );
}
