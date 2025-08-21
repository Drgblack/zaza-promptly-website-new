// app/personas/uk-primary/page.tsx
import Link from "next/link";

export const metadata = {
  title: "UK Primary Teachers | Zaza Promptly",
  description:
    "Reduce OFSTED stress, weekly reports, and parent comms. Clear, kind messages in minutes — not hours.",
};

export default function UKPrimary() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          UK Primary Teachers
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          You’re juggling phonics, behaviour notes, and parent updates — while
          OFSTED looms in the background. Zaza Promptly helps you produce
          clear, kind, and consistent communication without losing family time.
        </p>

        <div className="mt-8 space-y-6">
          <div className="p-5 rounded-xl border bg-indigo-50/50">
            <h2 className="font-semibold text-indigo-900">Common Wins</h2>
            <ul className="mt-2 list-disc pl-5 text-indigo-900/90">
              <li>Weekly class newsletter drafted in minutes.</li>
              <li>Behaviour updates that are firm but supportive.</li>
              <li>Reading-book feedback that’s specific yet quick.</li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-indigo-500 pl-4 text-gray-800 italic">
            “I used to spend Sunday evenings writing parent emails. Now it takes
            ten minutes on Friday and I actually rest.”
            <div className="not-italic font-medium mt-1">— Year 3 Teacher, Leeds</div>
          </blockquote>
        </div>

        <div className="mt-10 flex gap-3">
          <Link href="/pricing#plans" className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
            Get Your Evenings Back
          </Link>
          <Link href="/free-resources" className="px-6 py-3 rounded-lg border font-semibold">
            Try Free Templates
          </Link>
        </div>
      </section>
    </main>
  );
}
