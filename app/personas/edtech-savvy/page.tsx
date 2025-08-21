// app/personas/edtech-savvy/page.tsx
import Link from "next/link";

export const metadata = {
  title: "EdTech-Savvy Teachers | Zaza Promptly",
  description:
    "Purpose-built AI for classrooms. Safer, faster, and better-tuned than generic tools.",
};

export default function EdTechSavvy() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          EdTech-Savvy Teachers
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          If you’ve tried generic AI, you know the tradeoffs. Zaza Promptly is 
          tuned for school tone, privacy expectations, and workflow speed.
        </p>

        <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-gray-800">
          <li className="p-4 border rounded-lg">Prompt-free patterns for common tasks</li>
          <li className="p-4 border rounded-lg">Consistent school-safe tone</li>
          <li className="p-4 border rounded-lg">No copy/paste chaos between tools</li>
          <li className="p-4 border rounded-lg">Frictionless parent-message flows</li>
        </ul>

        <div className="mt-10 flex gap-3">
          <Link href="/pricing#plans" className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700">
            Upgrade Your Workflow
          </Link>
          <Link href="/free-resources" className="px-6 py-3 rounded-lg border font-semibold">
            Download Templates
          </Link>
        </div>
      </section>
    </main>
  );
}
