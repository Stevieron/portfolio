"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface CountUpProps {
  /** Final value, e.g. "3+", "5+", "2". The leading number is animated. */
  value: string;
  durationMs?: number;
}

/**
 * Counts the numeric prefix of `value` up from zero the first time it
 * scrolls into view, then snaps in any trailing glyphs ("+", "k", …).
 * Reduced-motion and non-numeric values render as-is.
 */
export function CountUp({ value, durationMs = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const reduceMotion = useReducedMotion();

  const parsed = /^(\d+(?:\.\d+)?)(.*)$/.exec(value.trim());
  const target = parsed ? Number.parseFloat(parsed[1]) : null;
  const suffix = parsed ? parsed[2] : "";
  const decimals =
    parsed && parsed[1].includes(".") ? parsed[1].split(".")[1].length : 0;

  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (target === null || reduceMotion || !inView) return;

    let raf = 0;
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(`${(target * eased).toFixed(decimals)}${t === 1 ? suffix : ""}`);
      if (t < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, reduceMotion, inView, suffix, decimals, durationMs]);

  if (target === null || reduceMotion) {
    return (
      <span ref={ref} aria-label={value}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} aria-label={value}>
      {display}
    </span>
  );
}
