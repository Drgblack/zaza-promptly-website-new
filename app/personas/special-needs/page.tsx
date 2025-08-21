// app/personas/special-needs/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Special Needs Teachers | Zaza Promptly",
  description:
    "IEP-aligned language, therapeutic tone, and consistent documentation support.",
};

export default function SpecialNeeds() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Special Needs Teachers
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Communicate progress with sensitivity, structure behaviour notes clearly,
          and keep families informed without overwhelming them.
        </p>

        <div className="mt-8 p-5 rounded-xl border bg-rose-50/60">
          <h2 className="font-semibold text-rose-900">Structured Support</h2>
          <ul className="mt-2 list-disc pl-5 text-rose-900/90">
            <li>Strength-first framing with specific next steps.</li>
            <li>Therapeutic language suggestions for tough topics.</li>
            <li>Calm tone for escalation or safety updates.</li>
          </ul>
        </div>

        <div className="mt-10 flex gap-3">
          <Link href="/pricing#plans" className="px-6 py-3 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-700">
            Perfect Your Parent Comms
          </Link>
          <Link href="/free-resources" className="px-6 py-3 rounded-lg border font-semibold">
            Download IEP-friendly Prompts
          </Link>
        </div>
      </section>
    </main>
  );
}
