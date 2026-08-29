interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-3 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-muted">
        <span
          aria-hidden
          className="h-px w-10 rounded-full"
          style={{ background: "var(--accent-gradient)" }}
        />
        {eyebrow}
      </span>

      <h2 className="mt-5 text-[2rem] font-semibold leading-[1.14] tracking-tight[-0.025em] text-foreground sm:text-[2rem] lg:text-[2.25rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
