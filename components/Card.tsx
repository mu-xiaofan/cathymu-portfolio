export default function Card({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="rounded-2xl border p-5 shadow-sm">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="mt-3 text-sm leading-6 text-zinc-700">{children}</div>
        </section>
    );
}
