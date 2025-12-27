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
    return (
        <h3 className="text-lg font-semibold text-zinc-900">
            {children}
        </h3>
    );
}

export default function SoftwareEngineeringPage() {
    return (
        <div className="space-y-8">
            {/* Intro */}
            <section className="space-y-2">
                <SectionTitle>Intro</SectionTitle>
                <p className="max-w-4xl text-base leading-7 text-zinc-700">
                    I build and support software systems that real people use. My experience spans
                    backend development, production debugging, and end-to-end feature ownership, with a
                    focus on reliability, clarity, and maintainability.
                </p>
            </section>

            <Divider />

            {/* What I focus on */}
            <section className="space-y-4">
                <SectionTitle>What I focus on</SectionTitle>

                <ul className="list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
                    <li>Designing and implementing backend workflows and APIs.</li>
                    <li>Debugging production issues and improving system reliability.</li>
                    <li>Writing code that’s easy to reason about, test, and maintain.</li>
                    <li>
                        Working closely with product and non-technical teams to ship usable features.
                    </li>
                </ul>
            </section>

            <Divider />

            {/* Representative work */}
            <section className="space-y-4">
                <SectionTitle>Representative work</SectionTitle>

                <ul className="list-disc space-y-3 pl-6 text-base leading-7 text-zinc-700">
                    <li>
                        <span className="font-semibold text-zinc-900">
                            AI Learning Platform (Coursistant):
                        </span>{" "}
                        built and maintained assignment submission, grading, and analytics workflows used
                        by real users.{" "}
                        <Link href="/projects?project=coursistant" className="underline">
                            View project
                        </Link>
                        .
                    </li>

                    <li>
                        <span className="font-semibold text-zinc-900">
                            Educational Game (Rockdale County):
                        </span>{" "}
                        independently designed and developed a 2D Unity game from concept to delivery.{" "}
                        <Link href="/projects?project=rockdale-educational-game" className="underline">
                            View project
                        </Link>
                        .
                    </li>
                </ul>
            </section>

            <Divider />

            {/* How I work */}
            <section className="space-y-3">
                <SectionTitle>How I work</SectionTitle>

                <p className="max-w-4xl text-base leading-7 text-zinc-700">
                    I like understanding the full system before writing code, asking “what can break?”
                    early, and making sure the solution is understandable to the next person who touches
                    it, including future me.
                </p>
            </section>
        </div>
    );
}
