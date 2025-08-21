// app/personas/international/page.tsx
import Link from "next/link";

export const metadata = {
  title: "International Teachers | Zaza Promptly",
  description:
    "Culturally-aware, multilingual messages that fit your school’s context.",
};

export default function InternationalTeachers() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          International Teachers
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Switch tone and phrasing for local expectations. Generate polished messages
          in English first, then adapt for families in their preferred language.
        </p>

        <div className="mt-8 p-5 rounded-xl border bg-sky-50/60">
          <h2 className="font-semibold text-sky-900">Built-in Sensitivity</h2>
          <p className="mt-2 text-sky-900/90">
            Avoid idioms that don’t translate well, and keep a warm, professional
            tone across cultures.
          </p>
        </div>

        <div className="mt-10 flex gap-3">
          <Link href="/pricing#plans" className="px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700">
            Try It in Your Context
          </Link>
          <Link href="/blog" className="px-6 py-3 rounded-lg border font-semibold">
            Read Communication Tips
          </Link>
        </div>
      </section>
    </main>
  );
}
