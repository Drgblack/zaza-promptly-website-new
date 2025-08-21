// app/personas/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Teaching Personas | Zaza Promptly",
  description:
    "Explore how Zaza Promptly helps different types of teachers: UK Primary, US Secondary, EdTech-savvy, International, Special Needs, and Head Teachers.",
};

const cards = [
  {
    href: "/personas/uk-primary",
    title: "UK Primary Teachers",
    blurb:
      "OFSTED pressure, weekly reports, and parent messages — without losing your evenings.",
    tag: "UK",
  },
  {
    href: "/personas/us-secondary",
    title: "US Secondary Teachers",
    blurb:
      "150+ students, constant grading, and parent communication at scale — simplified.",
    tag: "US",
  },
  {
    href: "/personas/edtech-savvy",
    title: "EdTech-Savvy Teachers",
    blurb:
      "Purpose-built AI for classrooms. Faster than generic tools, safer for schools.",
    tag: "Pro",
  },
  {
    href: "/personas/international",
    title: "International Teachers",
    blurb:
      "Polished, culturally-sensitive, multilingual messages in seconds.",
    tag: "Global",
  },
  {
    href: "/personas/special-needs",
    title: "Special Needs Teachers",
    blurb:
      "IEP-friendly language, therapeutic tone, and compliance-minded support.",
    tag: "SEN",
  },
  {
    href: "/personas/head-teacher",
    title: "Head Teachers",
    blurb:
      "Protect staff wellbeing and raise communication quality school-wide.",
    tag: "Leadership",
  },
];

export default function PersonasHub() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Teaching Personas
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Zaza Promptly adapts to different roles, curricula, and day-to-day realities.
          Pick the page that matches you best.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md p-6 transition"
            >
              <div className="text-xs inline-block px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 mb-3">
                {c.tag}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">
                {c.title}
              </h2>
              <p className="text-gray-600">{c.blurb}</p>
              <div className="mt-4 text-indigo-600 font-medium">Explore →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
