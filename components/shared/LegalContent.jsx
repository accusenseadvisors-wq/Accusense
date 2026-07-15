export function LegalSection({ heading, children }) {
  return (
    <div>
      <h2 className="mb-3 text-[1.05rem]! font-semibold! tracking-normal!">{heading}</h2>
      <div className="flex flex-col gap-3.5 text-[15px] leading-[1.75] text-muted">{children}</div>
    </div>
  );
}

export function LegalList({ items }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function LegalContent({ updated, children }) {
  return (
    <section className="px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-9">Last updated {updated}</p>
        <div className="flex flex-col gap-11">{children}</div>
      </div>
    </section>
  );
}
