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

export default function ResearchPage() {
    return (
        <div className="space-y-10">
            {/* Intro */}
            <Section title="Intro">
                <p>
                    My research work focuses on applying machine learning and data analysis
                    to healthcare problems, with an emphasis on feasibility, validation,
                    and real-world impact.
                </p>
            </Section>

            {/* Research interests */}
            <Section title="Research interests">
                <ul className="list-disc space-y-2 pl-6">
                    <li>Applied machine learning in health and human-centered contexts.</li>
                    <li>Multimodal data analysis.</li>
                    <li>Translating technical findings into actionable insights.</li>
                </ul>
            </Section>

            {/* Publication */}
            <Section title="Publication">
                <div className="space-y-4">
                    <div className="text-lg font-semibold text-zinc-900 leading-snug">
                        Feasibility of Detecting Cognitive Impairment and Psychological
                        Well-being among Older Adults Using Facial, Acoustic, Linguistic,
                        and Cardiovascular Patterns Derived from Remote Conversations
                    </div>

                    <div className="italic text-zinc-700">
                        Machine Learning: Health, 2025
                    </div>

                    <p className="text-zinc-800">
                        This work explored whether everyday remote conversations could
                        realistically support early cognitive health screening.
                    </p>

                    <div>
                        <Link
                            href="https://iopscience.iop.org/article/10.1088/3049-477X/ae250c"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-zinc-700 underline underline-offset-4 hover:text-zinc-900"
                        >
                            🔗 DOI: 10.1088/3049-477X/ae250c
                        </Link>
                    </div>
                </div>
            </Section>

            {/* How I approach research */}
            <Section title="How I approach research">
                <p>
                    I care less about chasing perfect metrics and more about whether the
                    results are trustworthy, interpretable, and useful for the people
                    making decisions.
                </p>
            </Section>
        </div>
    );
}
