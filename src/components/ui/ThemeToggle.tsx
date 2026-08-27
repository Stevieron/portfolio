"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Monitor, Moon, Sun } from "lucide-react";

type Theme = "light" | "dark" | "system";

const themes: {
  value: Theme;
  label: string;
  icon: typeof Sun;
}[] = [
  {
    value: "light",
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    icon: Monitor,
  },
];

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Load saved theme and monitor system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (
      storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "system"
    ) {
      setTheme(storedTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
    };

    updateSystemTheme();

    mediaQuery.addEventListener("change", updateSystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateSystemTheme);
    };
  }, []);

  // Apply the selected theme
  useEffect(() => {
    if (theme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function changeTheme(newTheme: Theme) {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setOpen(false);
  }

  // Determines the icon displayed in the Navbar.
  // If "system" is selected, use the operating system's current theme.
  const activeTheme = theme === "system" ? systemTheme : theme;

  const ActiveIcon = activeTheme === "dark" ? Moon : Sun;

  return (
    <div ref={containerRef} className="relative">
      {/* Navbar theme button */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Change theme"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-200 hover:border-foreground/30 hover:text-foreground"
      >
        <ActiveIcon size={16} strokeWidth={1.8} />
      </button>

      {/* Theme dropdown */}
      {open && (
        <div className="absolute right-0 top-11 w-36 overflow-hidden rounded-xl border border-border bg-surface p-1.5 shadow-2xl shadow-black/10">
          {themes.map((item) => {
            const Icon = item.icon;
            const isActive = item.value === theme;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => changeTheme(item.value)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs transition-colors ${
                  isActive
                    ? "bg-surface-hover text-foreground"
                    : "text-muted hover:bg-surface-hover hover:text-foreground"
                }`}
              >
                <Icon size={14} strokeWidth={1.8} />

                <span className="flex-1">{item.label}</span>

                {isActive && <Check size={13} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
