import Image from "next/image";
import Link from "next/link";

type ExperienceItem = {
  date: string;
  title: string;
  org: string;
  location: string;
  bullets: string[];
};

type PublicationItem = {
  date: string;
  title: string;
  venue: string;
  bullets: string[];
  doi?: string;
};

type EducationItem = {
  date: string;
  school: string;
  degree: string;
  bullets: string[];
};

type Competency = {
  title: string;
  body: string;
};

type SkillGroup = {
  title: string;
  items: { name: string; level?: string }[];
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-semibold text-zinc-900 mt-10 mb-4">
      {children}
    </h2>
  );
}

function TimelineRow({
  left,
  children,
}: {
  left: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 py-8 md:grid-cols-[180px_1fr]">
      <div className="text-xs text-zinc-500">{left}</div>
      <div>{children}</div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-[#cfcbc370] px-2 py-0.5 text-xs text-zinc-700">
      {children}
    </span>
  );
}

export default function HomePage() {
  // ---- Content (edit freely) ----
  const experiences: ExperienceItem[] = [
    {
      date: "May 2025 – present",
      title: "Software Development Engineer | Early-Stage SaaS",
      org: "Coursistant Inc.",
      location: "Los Angeles, GA, USA (Remote)",
      bullets: [
        "Built and maintained frontend and backend workflows for assignment submission, grading, and analytics.",
        "Designed APIs and data schemas to improve reliability and data consistency.",
        "Created internal dashboards and tracking tools to support product and content decisions.",
        "Collaborated with product and non-technical teams to debug issues and ship improvements.",
      ],
    },
    {
      date: "May 2024 – Aug 2024",
      title: "Software Development Engineer Intern | Government",
      org: "Rockdale County Government",
      location: "Conyers, GA, USA (On-site)",
      bullets: [
        "Independently designed and built a 2D top-down educational game (Unity, C#) to introduce children to county government responsibilities and community rules.",
        "Automated data collection and reporting workflows using SQL and Python.",
        "Built dashboards to track officer performance and regional incident trends.",
        "Reduced manual reporting effort by ~70%.",
        "Worked directly with non-technical stakeholders to understand requirements and explain results.",
      ],
    },
    {
      date: "Jan 2022 – May 2022",
      title: "Machine Learning Research Assistant | Research Lab",
      org: "ViTAL Lab",
      location: "Atlanta, GA, USA (On-site)",
      bullets: [
        "Built data pipelines processing 600+ patient interview videos.",
        "Conducted data cleaning, feature extraction, and model evaluation.",
        "Collaborated with clinicians to interpret results and assess feasibility for real-world use.",
        "Contributed to peer-reviewed research on cognitive health assessment.",
      ],
    },
  ];

  const publications: PublicationItem[] = [
    {
      date: "November 27, 2025",
      title:
        "Feasibility of Detecting Cognitive Impairment and Psychological Well-being among Older Adults Using Facial, Acoustic, Linguistic, and Cardiovascular Patterns Derived from Remote Conversations",
      venue: "Machine Learning: Health (IOP Publishing)",
      bullets: [
        "Co-authored a peer-reviewed paper on multimodal signals for cognitive health assessment.",
        "Contributed to data pipelines, feature extraction, model evaluation, and result interpretation.",
        "Worked with clinicians to assess real-world feasibility and limitations of the approach.",
      ],
      doi: "10.1088/3049-477X/ae250c",
    },
  ];

  const education: EducationItem[] = [
    {
      date: "Sep 2020 – Jun 2023",
      school: "University of California, San Diego",
      degree: "B.S. in Computer Science",
      bullets: ["Activities: Research Assistant"],
    },
    {
      date: "Aug 2023 – May 2025",
      school: "Emory University",
      degree: "M.S. in Computer Science",
      bullets: [
        "Activities: Research Assistant, Mentor",
        "Academic Honors: LGS Scholarship, 3MT® Master’s Showcase Winner, BMI Award for Excellence in Research",
        "Focus on software systems, data analysis, and applied machine learning",
      ],
    },
  ];

  const competencies: Competency[] = [
    {
      title: "Software & Systems Problem-Solving",
      body:
        "I build and debug software systems across backend services, data pipelines, and user-facing tools. I’m comfortable tracing production issues end-to-end—from identifying root causes to validating fixes.",
    },
    {
      title: "Data & Analytical Thinking",
      body:
        "I analyze data to answer real questions, including querying datasets, checking data quality, and explaining results clearly to both technical and non-technical stakeholders.",
    },
    {
      title: "Client & Cross-Functional Collaboration",
      body:
        "I partner with design, engineering, and business teams, driving alignment through structured workflows that balance speed with clarity—especially when requirements are evolving.",
    },
    {
      title: "Quality & Reliability",
      body:
        "I focus on correctness and reliability, contributing to testing, validation, and iterative improvements that help teams catch issues early and ship with confidence.",
    },
  ];

  const skillGroups: SkillGroup[] = [
    {
      title: "Core Technologies",
      items: [
        { name: "Python, JavaScript, SQL, Java, C++, C#", level: "Advanced" },
        { name: "REST APIs, Postman, JSON, XML", level: "Advanced" },
        { name: "PostgreSQL, MongoDB", level: "Advanced" },
        { name: "Google Cloud Platform & AWS", level: "Advanced" },
        { name: "Git", level: "Advanced" },
        { name: "Linux", level: "Advanced" },
        { name: "Tableau & Power BI", level: "Advanced" },
        { name: "Debugging & Testing", level: "Advanced" },
      ],
    },
    {
      title: "Software & Product Practices",
      items: [
        { name: "Agile / Scrum workflows", level: "Advanced" },
        { name: "Jira & issue tracking", level: "Advanced" },
        { name: "Code reviews & collaboration", level: "Advanced" },
        { name: "Incident investigation & troubleshooting", level: "Advanced" },
      ],
    },
    {
      title: "Awards",
      items: [
        { name: "LGS Scholarship" },
        { name: "3MT® Master’s Showcase Winner" },
        { name: "BMI Award for Excellence in Research" },
      ],
    },
    {
      title: "Languages",
      items: [{ name: "English", level: "Native" }, { name: "Mandarin", level: "Native" }],
    },
  ];

  // ---- Page ----
  return (
    <div className="space-y-10">
      {/* Title + small home icon */}
      <div className="flex items-start gap-3">
        <div className="text-2xl">🏠</div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Homepage</h1>
        </div>
      </div>

      {/* Hero */}
      <section className="rounded-2xl bg-[#cfcbc370] p-6 md:p-8">
        <div className="grid items-center gap-6 md:grid-cols-[220px_1fr]">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-44 w-44 overflow-hidden rounded-full border border-zinc-200 bg-white">
              <Image
                src="/cathymu-portfolio/cathy.jpg"
                alt="Cathy Mu"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-zinc-500">👋 Hi, I am Cathy (Xiaofan) Mu</p>
            <p className="text-sm leading-6 text-zinc-700 max-w-2xl">
              I work with software and data, and I like solving practical problems end-to-end.
              I have built and debugged production systems, worked with data and analytics,
              and collaborated closely with non-technical teams and clients. I am comfortable
              switching between coding, investigating issues, and explaining what is going on in
              plain language.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-100"
              >
                ✉️ Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <SectionTitle>🎓 Professional Experience</SectionTitle>
      <div className="rounded-2xl border border-zinc-200 bg-white">
        {experiences.map((e) => (
          <TimelineRow key={e.title} left={<Badge>{e.date}</Badge>}>
            <div className="space-y-2">
              <div className="font-semibold text-zinc-900">{e.title}</div>
              <div className="text-xs text-zinc-500">
                <span className="mr-2">🏢 {e.org}</span>
                <span className="mr-2">🌐 {e.location}</span>
              </div>
              <ul className="list-disc pl-5 text-sm leading-6 text-zinc-700">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </TimelineRow>
        ))}
      </div>

      {/* Publication */}
      <SectionTitle>📖 Publication</SectionTitle>
      <div className="rounded-2xl border border-zinc-200 bg-white">
        {publications.map((p) => (
          <TimelineRow key={p.title} left={<Badge>{p.date}</Badge>}>
            <div className="space-y-2">
              <div className="font-semibold text-zinc-900">{p.title}</div>
              <div className="text-xs text-zinc-500">{p.venue}</div>
              <ul className="list-disc pl-5 text-sm leading-6 text-zinc-700">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {p.doi && (
                <a
                  className="inline-flex items-center gap-2 text-sm text-zinc-700 underline underline-offset-4 hover:text-zinc-900"
                  href="https://iopscience.iop.org/article/10.1088/3049-477X/ae250c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 DOI: 10.1088/3049-477X/ae250c
                </a>


              )}
            </div>
          </TimelineRow>
        ))}
      </div>

      {/* Education */}
      <SectionTitle>🏫 Education</SectionTitle>
      <div className="rounded-2xl border border-zinc-200 bg-white">
        {education.map((ed) => (
          <TimelineRow key={ed.school} left={<Badge>{ed.date}</Badge>}>
            <div className="space-y-2">
              <div className="font-semibold text-zinc-900">
                {ed.school} | <span className="font-normal">{ed.degree}</span>
              </div>
              <ul className="list-disc pl-5 text-sm leading-6 text-zinc-700">
                {ed.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </TimelineRow>
        ))}
      </div>

      {/* Core Competencies */}
      <SectionTitle>⚡️ My Core Competencies</SectionTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {competencies.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-zinc-200 bg-[#cfcbc370] p-5"
          >
            <div className="text-xs font-semibold tracking-wide text-zinc-700">
              {c.title.toUpperCase()}
            </div>
            <p className="mt-2 text-sm leading-6 text-zinc-700">{c.body}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <SectionTitle>🔧 Skills</SectionTitle>
      <div className="grid gap-4 md:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-zinc-200 bg-[#cfcbc32a] p-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-[#cfcbc370] px-2 py-1 text-xs font-medium text-zinc-700">
              {g.title}
              <span className="text-zinc-500">{g.items.length}</span>
            </div>

            <div className="space-y-2">
              {g.items.map((it) => (
                <div
                  key={it.name}
                  className="rounded-xl border border-zinc-200 p-3 bg-white"
                >
                  <div className="text-sm font-medium text-zinc-900">{it.name}</div>
                  {it.level && (
                    <div className="mt-2">
                      <span className="inline-flex rounded-md bg-amber-100 px-2 py-0.5 text-xs text-amber-900">
                        {it.level}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer mini-nav (optional — matches your Notion bottom nav) */}
      <div className="pt-6 text-xs text-zinc-500">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link className="hover:underline" href="/experience">Experience</Link>
          <Link className="hover:underline" href="/software-engineering">Software Engineering</Link>
          <Link className="hover:underline" href="/consulting">Consulting & Client Solutions</Link>
          <Link className="hover:underline" href="/projects">Projects</Link>
          <Link className="hover:underline" href="/data-ml">Data / Machine Learning</Link>
          <Link className="hover:underline" href="/contact">Contact Me</Link>
          <Link className="hover:underline" href="/research">Research</Link>
          <Link className="hover:underline" href="/">Home</Link>
        </div>
      </div>
    </div>
  );
}
