import Image from "next/image";

type ContactCard = {
    number: string;
    title: string;
    value: string;
    buttonLabel: string;
    href: string;
    external?: boolean;
};

const cards: ContactCard[] = [
    {
        number: "01",
        title: "Email",
        value: "xiaofanmu0128@gmail.com",
        buttonLabel: "SEND",
        href: "mailto:xiaofanmu0128@gmail.com",
        external: true,
    },
    {
        number: "02",
        title: "LinkedIn",
        value: "@xiaofan-mu",
        buttonLabel: "CONNECT",
        href: "https://www.linkedin.com/in/xiaofan-mu/",
        external: true,
    },
    {
        number: "03",
        title: "GitHub",
        value: "@spicyhotchickenwing",
        buttonLabel: "FOLLOW",
        href: "https://github.com/mu-xiaofan",
        external: true,
    },
];

function ContactCard({ card }: { card: ContactCard }) {
    const linkProps = card.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
                <div className="text-zinc-400">📎</div>
                <div className="text-sm font-semibold tracking-wide text-zinc-500">
                    {card.number} {card.title}
                </div>
            </div>

            <div className="my-4 border-t border-zinc-100" />

            <div className="text-sm text-zinc-800">{card.value}</div>

            <div className="mt-4">
                <a
                    href={card.href}
                    {...linkProps}
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100"
                >
                    {card.buttonLabel}
                </a>
            </div>
        </div>
    );
}

export default function ContactPage() {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-lg font-semibold text-zinc-900">
                    🤔 Feel free to reach out if you would like to connect or have a question.
                </h1>
            </div>

            {/* Cards */}
            <div className="rounded-3xl bg-[#cfcbc333] p-6">
                <div className="grid gap-6 md:grid-cols-3">
                    {cards.map((c) => (
                        <ContactCard key={c.number} card={c} />
                    ))}
                </div>
            </div>


            {/* Big photo */}
            <div className="flex justify-center pt-10">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border border-zinc-200 bg-white shadow-sm md:h-80 md:w-80">
                    <Image
                        src="/cathymu-portfolio/cathy.jpg"
                        alt="Cathy Mu"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* subtle divider like your screenshot */}
            <div className="border-t border-zinc-200 pt-2" />
        </div>
    );
}
