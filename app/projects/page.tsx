"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Project = {
    id: string;
    title: string;
    icon?: string;
    date: string;
    tags: string[];
    summary: string;
    url?: string;
    cover?: string;
    media?: string[];
    sections: {
        context?: string[];
        problem?: string[];
        strategy?: string[];
        solution?: string[];
        results?: string[];
    };
};

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700">
            {children}
        </span>
    );
}

function DrawerSection({
    title,
    bullets,
}: {
    title: string;
    bullets?: string[];
}) {
    if (!bullets?.length) return null;

    return (
        <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
            <div className="mt-3 border-l-4 border-zinc-900/80 pl-5">
                <ul className="list-disc space-y-2 pl-5 text-zinc-700">
                    {bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    const projects: Project[] = useMemo(
        () => [
            {
                id: "rockdale-educational-game",
                icon: "🎮",
                title: "Educational 2D Game for Rockdale County",
                date: "August 23, 2024",
                tags: ["Unity", "C#"],
                summary:
                    "An independently built 2D educational game designed to help children understand county government responsibilities and community rules through interactive gameplay.",
                cover: "/cathymu-portfolio/rockdale-game.png",
                media: ["/cathymu-portfolio/rockdale-game.png"],
                sections: {
                    context: [
                        "Rockdale County wanted an engaging way to introduce local government roles and responsibilities to children in the community.",
                    ],
                    problem: [
                        "Traditional educational materials were not engaging for younger audiences and were difficult for non-technical staff to adapt into interactive experiences.",
                    ],
                    strategy: [
                        "I designed a simple, intuitive game experience that translated real-world government concepts into approachable gameplay mechanics suitable for kids.",
                    ],
                    solution: [
                        "Built a 2D top-down game using Unity and C#, owning the project end-to-end from concept and design to implementation and iteration.",
                    ],
                    results: [
                        "Delivered a usable educational game for the county, demonstrating full-cycle development, user-focused design, and the ability to translate non-technical goals into functional software.",
                    ],
                },
            },
            {
                id: "multimodal-cognitive-health",
                icon: "🧠",
                title: "Multimodal Cognitive Health Assessment",
                date: "November 27, 2025",
                tags: ["Python", "MATLAB"],
                summary:
                    "A machine learning system that analyzes facial, acoustic, linguistic, and cardiovascular signals from video conversations to support early cognitive health screening.",
                url: "https://iopscience.iop.org/article/10.1088/3049-477X/ae250c",
                cover: "/cathymu-portfolio/multimodal-paper.png",
                media: ["/cathymu-portfolio/multimodal-paper.png"],
                sections: {
                    context: [
                        "This project was part of a healthcare research collaboration exploring whether everyday remote conversations could be used for scalable cognitive health assessment.",
                    ],
                    problem: [
                        "Clinical cognitive screening is time-consuming and resource-intensive, making early detection difficult to scale in real-world settings.",
                    ],
                    strategy: [
                        "I focused on building robust data pipelines and evaluating multiple modalities to determine feasibility rather than optimizing for a single metric.",
                    ],
                    solution: [
                        "Developed multimodal ML pipelines, performed feature extraction and model evaluation on 600+ patient videos, and collaborated with clinicians to interpret results.",
                    ],
                    results: [
                        "Achieved meaningful classification performance (AUC ~0.79) and contributed to a peer-reviewed publication assessing real-world feasibility.",
                    ],
                },
            },
            {
                id: "coursistant",
                icon: "📚",
                title: "AI Learning Platform – Assignment & Analytics System",
                date: "2025",
                tags: ["JavaScript", "Java", "HTML", "CSS", "REST APIs", "MongoDB", "Jira"],
                summary:
                    "Production backend and analytics features for an AI-powered learning platform, focused on assignment workflows, data reliability, and product insights.",
                url: "https://coursistant.com/",
                cover: "/cathymu-portfolio/coursistant.png",
                media: ["/cathymu-portfolio/coursistant.png"],
                sections: {
                    context: [
                        "Coursistant is an AI-powered education platform that relies on accurate data and reliable workflows to support learners and instructors.",
                    ],
                    problem: [
                        "Assignment submissions, grading analytics, and engagement tracking needed to be reliable, scalable, and understandable to non-technical stakeholders.",
                    ],
                    strategy: [
                        "I prioritized system reliability, clear data models, and internal tooling that made platform behavior visible and debuggable.",
                    ],
                    solution: [
                        "Built and maintained REST APIs, MongoDB schemas, and internal dashboards to support assignment submission, grading analytics, and engagement tracking.",
                    ],
                    results: [
                        "Improved reliability and visibility of core workflows while enabling leadership teams to make data-informed product and content decisions.",
                    ],
                },
            },
            {
                id: "gov-dashboard",
                icon: "📈",
                title: "Government Analytics Dashboard",
                date: "June 21, 2024",
                tags: ["Python", "SQL", "Excel", "Tableau"],
                summary:
                    "An automated analytics and dashboard system that replaced manual reporting for county code enforcement operations.",
                cover: "/cathymu-portfolio/rockdale-seal.png",
                media: ["/cathymu-portfolio/rockdale-seal.png"],
                sections: {
                    context: [
                        "County staff relied on manual data collection and reporting to track officer performance and regional incident trends.",
                    ],
                    problem: [
                        "Manual workflows were slow, error-prone, and made it difficult for leadership to assess performance or allocate resources effectively.",
                    ],
                    strategy: [
                        "I worked closely with non-technical stakeholders to understand what decisions needed to be supported before designing the analytics solution.",
                    ],
                    solution: [
                        "Automated data aggregation using SQL and Python and built dashboards to visualize performance metrics and incident patterns.",
                    ],
                    results: [
                        "Reduced manual reporting effort by approximately 70% and provided leadership with clearer, data-driven insights.",
                    ],
                },
            },
        ],
        []
    );

    const [openId, setOpenId] = useState<string | null>(null);
    const active = projects.find((p) => p.id === openId) ?? null;

    // ✅ On first load: if URL has ?project=..., open that drawer (client-only)
    useEffect(() => {
        const sp = new URLSearchParams(window.location.search);
        const projectFromUrl = sp.get("project");
        if (!projectFromUrl) return;

        const exists = projects.some((p) => p.id === projectFromUrl);
        if (exists) setOpenId(projectFromUrl);
    }, [projects]);

    // ✅ Keep the URL in sync (client-only)
    useEffect(() => {
        const url = new URL(window.location.href);

        if (openId) url.searchParams.set("project", openId);
        else url.searchParams.delete("project");

        window.history.replaceState({}, "", url.toString());
    }, [openId]);

    // ✅ Lock background scroll when drawer is open
    useEffect(() => {
        if (!active) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [active]);

    // ✅ ESC to close
    useEffect(() => {
        if (!active) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenId(null);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    const openProject = (id: string) => setOpenId(id);
    const closeProject = () => setOpenId(null);

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>

            {/* Grid */}
            <div className="grid gap-4 md:grid-cols-2">
                {projects.map((p) => (
                    <button
                        key={p.id}
                        onClick={() => openProject(p.id)}
                        className="group text-left rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
                    >
                        <div className="relative h-44 w-full bg-zinc-50">
                            {p.cover ? (
                                <Image
                                    src={p.cover}
                                    alt={p.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            ) : (
                                <div className="h-full w-full" />
                            )}
                        </div>

                        <div className="p-5">
                            <div className="flex items-start gap-3">
                                <div className="text-xl">{p.icon ?? "📌"}</div>
                                <div className="min-w-0">
                                    <div className="text-lg font-semibold text-zinc-900 leading-snug">
                                        {p.title}
                                    </div>

                                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-zinc-600">
                                        <span>{p.date}</span>
                                        <span className="text-zinc-300">•</span>
                                        <div className="flex flex-wrap gap-2">
                                            {p.tags.map((t) => (
                                                <Tag key={t}>{t}</Tag>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-4 text-sm leading-6 text-zinc-700">{p.summary}</p>

                            <div className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-600">
                                <span className="rounded-lg border border-zinc-200 px-3 py-1.5 bg-white">
                                    Expand
                                </span>
                                <span className="opacity-0 group-hover:opacity-100 transition">
                                    →
                                </span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Right-side drawer */}
            <div
                className={`fixed inset-0 z-9999 ${active ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                aria-hidden={!active}
            >
                {/* overlay */}
                <div
                    onClick={closeProject}
                    className={`absolute inset-0 bg-black/30 transition-opacity ${active ? "opacity-100" : "opacity-0"
                        }`}
                />

                {/* panel */}
                <aside
                    className={`absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl transition-transform duration-300 ${active ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {active && (
                        <div className="h-full overflow-y-auto">
                            <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-zinc-200">
                                <div className="flex items-start justify-between gap-4 px-6 py-4">
                                    <div>
                                        <div className="text-sm text-zinc-500">Project</div>
                                        <h2 className="mt-1 text-3xl font-semibold text-zinc-900">
                                            {active.title}
                                        </h2>

                                        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-zinc-600">
                                            <span className="inline-flex items-center gap-2">
                                                <span>📅</span> {active.date}
                                            </span>

                                            <span className="text-zinc-300">•</span>

                                            <span className="inline-flex items-center gap-2">
                                                <span>🏷️</span>
                                                <span className="flex flex-wrap gap-2">
                                                    {active.tags.map((t) => (
                                                        <Tag key={t}>{t}</Tag>
                                                    ))}
                                                </span>
                                            </span>

                                            {active.url && (
                                                <>
                                                    <span className="text-zinc-300">•</span>
                                                    <a
                                                        href={active.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 underline underline-offset-4"
                                                    >
                                                        🔗 URL
                                                    </a>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        onClick={closeProject}
                                        className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
                                        aria-label="Close"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            <div className="px-6 py-6">
                                <div className="text-sm text-zinc-500">Summary</div>
                                <p className="mt-2 text-base leading-7 text-zinc-800">
                                    {active.summary}
                                </p>

                                {/* Media */}
                                {active.media?.length ? (
                                    <div className="mt-8">
                                        <div className="text-sm text-zinc-500">Files & media</div>
                                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                            {active.media.map((src) => (
                                                <div
                                                    key={src}
                                                    className="relative aspect-16/10 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50"
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={`${active.title} media`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : null}

                                <DrawerSection title="Context" bullets={active.sections.context} />
                                <DrawerSection
                                    title="The Problem"
                                    bullets={active.sections.problem}
                                />
                                <DrawerSection
                                    title="My Strategy"
                                    bullets={active.sections.strategy}
                                />
                                <DrawerSection
                                    title="My Solution"
                                    bullets={active.sections.solution}
                                />
                                <DrawerSection title="Results" bullets={active.sections.results} />

                                <div className="mt-10">
                                    <button
                                        onClick={closeProject}
                                        className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm hover:bg-zinc-50"
                                    >
                                        ← Back to All Projects
                                    </button>
                                </div>

                                <div className="h-10" />
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
}
