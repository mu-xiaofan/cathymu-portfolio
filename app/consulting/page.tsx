import Link from "next/link";

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="border-b border-zinc-200 pb-10">
            <h2 className="text-2xl font-semibold text-zinc-900">{title}</h2>
            <div className="mt-3 text-base leading-7 text-zinc-800">{children}</div>
        </section>
    );
}

export default function ClientFacingPage() {
    return (
        <div className="space-y-10">
            {/* Intro */}
            <Section title="Intro">
                <p>
                    I enjoy working in client-facing and stakeholder-driven environments,
                    especially where technical work needs to be translated into clear,
                    practical outcomes.
                </p>
            </Section>

            {/* What I do well */}
            <Section title="What I do well">
                <ul className="list-disc space-y-2 pl-6">
                    <li>Working with non-technical stakeholders to clarify goals and constraints.</li>
                    <li>Turning ambiguous problems into structured technical solutions.</li>
                    <li>Explaining technical findings in plain language.</li>
                    <li>Balancing technical rigor with real-world limitations.</li>
                </ul>
            </Section>

            {/* Representative work */}
            <Section title="Representative work">
                <ul className="list-disc space-y-2 pl-6">
                    <li>
                        <span className="font-semibold text-zinc-900">Rockdale County Government</span>
                        : partnered with county staff to deliver analytics tools and an educational
                        game tailored to community needs.
                        <Link href="/projects?project=gov-dashboard" className="underline">
                            View project
                        </Link>
                        .
                    </li>
                    <li>
                        <span className="font-semibold text-zinc-900">
                            Healthcare Research Collaboration
                        </span>
                        : worked with clinicians to assess feasibility and interpret ML results
                        beyond raw metrics.
                        <Link href="/projects?project=multimodal-cognitive-health" className="underline">
                            View project
                        </Link>
                        .
                    </li>
                </ul>
            </Section>

            {/* How I work with clients */}
            <Section title="How I work with clients">
                <p>
                    I focus on listening first, asking the right questions early, and making sure
                    the solution actually helps someone make a better decision or do their job
                    more easily.
                </p>
            </Section>
        </div>
    );
}
