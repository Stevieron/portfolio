import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export interface Project {
  title: string;

  tags?: string[];
  description: string;
  stack: string[];

  deployment: string;
  image: { src: string; alt: string };
  href?: string;
}

export function ProjectCard({
  title,
  tags,
  description,
  stack,
  deployment,
  image,
  href,
}: Project) {
  return (
    <Card className="group grid overflow-hidden hover:-translate-y-0.5 hover:border-accent hover:shadow-2xl hover:shadow-accent/15 lg:grid-cols-[1fr_1.15fr]">
      {/* Left — content */}
      <div className="order-2 flex min-w-0 flex-col gap-8 p-7 sm:p-9 lg:order-1">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-[1.625rem]">
            {title}
          </h3>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <Tag key={tag} variant="status">
                  {tag}
                </Tag>
              ))}
            </div>
          )}
        </div>

        <p className="max-w-prose text-[0.9375rem] leading-[1.75] text-muted">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <Tag key={item} variant="tech">
              {item}
            </Tag>
          ))}
        </div>

        {/* Deployment note + CTA, sharing a baseline */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-2">
          <p className="flex max-w-[34ch] items-start gap-2.5 text-[0.8125rem] leading-relaxed text-muted">
            <span
              aria-hidden
              className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: "var(--accent-gradient)" }}
            />
            {deployment}
          </p>

          <Link
            href={href ?? "#"}
            className="group/cta inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
          >
            View Project
            <MoveRight
              size={18}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover/cta:translate-x-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Right — full screenshot on a darker panel */}
      <div className="order-1 flex items-center justify-center border-b border-border/60 bg-surface-hover p-5 sm:p-6 lg:order-2 lg:border-b-0 lg:border-l">
        <div className="relative aspect-[11/5] w-full overflow-hidden rounded-lg shadow-sm">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </Card>
  );
}
