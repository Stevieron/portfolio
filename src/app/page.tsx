export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-muted">
            Software Engineer · Researcher
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            I build thoughtful digital products and systems.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            I’m a software engineer focused on building useful, scalable web
            experiences and exploring the intersection of technology, data, and
            research.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>

            <a
              href="/about"
              className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background"
            >
              About me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
