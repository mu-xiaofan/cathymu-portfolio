import Link from "next/link";

function Divider() {
    return <div className="my-10 border-t border-zinc-200" />;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            {children}
        </h2>
    );
}

function SubTitle({ children }: { children: React.ReactNode }) {
    return <h3 className="text-lg font-semibold text-zinc-900">{children}</h3>;
}

export default function DataMLPage() {
    return (
        <div className="space-y-8">
            {/* Intro */}
            <section className="space-y-2">
                <SectionTitle>Intro</SectionTitle>
                <p className="max-w-4xl text-base leading-7 text-zinc-700">
                    I work with data to answer real questions and support decisions, not just to build
                    models. My background combines data analysis, machine learning, and practical
                    evaluation in real-world settings.
                </p>
            </section>

            <Divider />

            {/* What I focus on */}
            <section className="space-y-4">
                <SectionTitle>What I focus on</SectionTitle>

                <ul className="list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
                    <li>Writing and optimizing SQL queries for real datasets.</li>
                    <li>Cleaning, validating, and exploring data to find patterns and issues.</li>
                    <li>Building and evaluating machine learning pipelines.</li>
                    <li>Communicating results and limitations clearly to non-technical audiences.</li>
                </ul>
            </section>

            <Divider />

            {/* Representative work */}
            <section className="space-y-4">
                <SectionTitle>Representative work</SectionTitle>

                <ul className="list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
                    <li>
                        <span className="font-semibold text-zinc-900">
                            Multimodal Cognitive Health Assessment:
                        </span>{" "}
                        built data pipelines and ML models using facial, acoustic, linguistic, and
                        cardiovascular signals from 600+ videos.{" "}
                        <Link href="/projects?project=multimodal-cognitive-health" className="underline">
                            View project
                        </Link>
                        .
                    </li>

                    <li>
                        <span className="font-semibold text-zinc-900">
                            Government Analytics Dashboards:
                        </span>{" "}
                        automated reporting and visualized performance metrics to replace manual workflows.{" "}
                        <Link href="/projects?project=gov-dashboard" className="underline">
                            View project
                        </Link>
                        .
                    </li>
                </ul>
            </section>

            <Divider />

            {/* How I think about data */}
            <section className="space-y-3">
                <SectionTitle>How I think about data</SectionTitle>

                <p className="max-w-4xl text-base leading-7 text-zinc-700">
                    I care less about chasing perfect metrics and more about whether the results are
                    trustworthy, interpretable, and useful for the people making decisions.
                </p>
            </section>
        </div>
    );
}
