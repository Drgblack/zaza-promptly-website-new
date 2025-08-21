// app/personas/us-secondary/page.tsx
import Link from "next/link";

export const metadata = {
  title: "US Secondary Teachers | Zaza Promptly",
  description:
    "Teach 150+ students and still send polished parent messages. Fast, consistent, and stress-free.",
};

export default function USSecondary() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          US Secondary Teachers
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          With 6+ periods and hundreds of parents, communication can feel endless.
          Zaza Promptly helps you keep tone consistent and messages concise —
          while protecting your time.
        </p>

        <div className="mt-8 space-y-6">
          <div className="p-5 rounded-xl border bg-emerald-50/60">
            <h2 className="font-semibold text-emerald-900">Great Fits</h2>
            <ul className="mt-2 list-disc pl-5 text-emerald-900/90">
              <li>Missing-work nudges that sound supportive, not punitive.</li>
              <li>Quick progress notes after assessments.</li>
              <li>Clear rubric-based feedback blurbs.</li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-emerald-500 pl-4 text-gray-800 italic">
            “Parent contact used to feel unmanageable. Now I batch it in one
            prep period — and it actually lands well.”
            <div className="not-italic font-medium mt-1">— High School English, Illinois</div>
          </blockquote>
        </div>

        <div className="mt-10 flex gap-3">
          <Link href="/pricing#plans" className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700">
            Start Free Trial
          </Link>
          <Link href="/blog" className="px-6 py-3 rounded-lg border font-semibold">
            See Best-Practice Guides
          </Link>
        </div>
      </section>
    </main>
  );
}
