// app/personas/head-teacher/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Head Teachers | Zaza Promptly",
  description:
    "Lift quality school-wide while protecting teacher wellbeing and time.",
};

export default function HeadTeacher() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Head Teachers
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Standardise tone across the school, reduce evening workload, and
          give families clearer, more consistent updates — every week.
        </p>

        <div className="mt-8 p-5 rounded-xl border bg-amber-50/60">
          <h2 className="font-semibold text-amber-900">Leadership Outcomes</h2>
          <ul className="mt-2 list-disc pl-5 text-amber-900/90">
            <li>Happier staff: faster comms, less stress.</li>
            <li>Happier families: clearer messages, consistent tone.</li>
            <li>Happier SLT: fewer escalations, better documentation.</li>
          </ul>
        </div>

        <div className="mt-10 flex gap-3">
          <Link href="/pricing#plans" className="px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700">
            Bring It to Your School
          </Link>
          <Link href="/contact" className="px-6 py-3 rounded-lg border font-semibold">
            Talk to Us
          </Link>
        </div>
      </section>
    </main>
  );
}
