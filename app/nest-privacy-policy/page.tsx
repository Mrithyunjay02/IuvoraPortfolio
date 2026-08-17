import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Privacy Policy — NEST | Iuvora",
  description:
    "Privacy Policy for the NEST pregnancy companion application developed by Iuvora. Learn how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy — NEST | Iuvora",
    description:
      "Privacy Policy for the NEST pregnancy companion application developed by Iuvora.",
    url: "https://iuvora.com/nest-privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NestPrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-black dark:bg-black light:bg-[#f8f9fc] text-white dark:text-white light:text-zinc-900 selection:bg-[#2f7bff] selection:text-white flex flex-col transition-colors duration-200">
      <Navbar />

      <div className="portfolio-container pt-36 pb-24 flex-1">
        <div className="max-w-3xl mx-auto">
          
          {/* Top Back Navigation */}
          <div className="mb-8">
            <BackButton href="/" label="Back to Home" />
          </div>

          {/* Header */}
          <div className="mb-12 border-b border-white/10 dark:border-white/10 light:border-black/10 pb-8">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3 block">
              Legal &amp; Privacy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900 mb-4">
              Privacy Policy — NEST
            </h1>
            <p className="text-sm font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
              Last updated: August 16, 2026
            </p>
          </div>

          {/* Document Content */}
          <div className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 space-y-10 leading-relaxed text-base">
            <section>
              <p className="text-lg text-zinc-200 dark:text-zinc-200 light:text-zinc-800 leading-relaxed font-light">
                NEST (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the app&rdquo;) is a pregnancy companion app developed by Iuvora. This policy explains what information we collect, how we use it, and how we protect it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight pt-2 border-t border-white/10 dark:border-white/10 light:border-black/10">
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2.5 text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                <li>
                  <strong className="text-white dark:text-white light:text-zinc-900">Account information:</strong> name, email address, and authentication data (via email/password, one-time email codes, or Google Sign-In)
                </li>
                <li>
                  <strong className="text-white dark:text-white light:text-zinc-900">Pregnancy information:</strong> last menstrual period or due date, which we use to calculate your pregnancy week
                </li>
                <li>
                  <strong className="text-white dark:text-white light:text-zinc-900">Emergency contact information:</strong> names and phone numbers you choose to add
                </li>
                <li>
                  <strong className="text-white dark:text-white light:text-zinc-900">Doctor and hospital information:</strong> names, phone numbers, and email addresses you choose to add
                </li>
                <li>
                  <strong className="text-white dark:text-white light:text-zinc-900">Health journal entries:</strong> mood, symptoms, notes, and weight you choose to log
                </li>
                <li>
                  <strong className="text-white dark:text-white light:text-zinc-900">Appointment information:</strong> titles, dates, and times you add
                </li>
                <li>
                  <strong className="text-white dark:text-white light:text-zinc-900">Nutrition checklist data:</strong> which items you mark as completed each day
                </li>
                <li>
                  <strong className="text-white dark:text-white light:text-zinc-900">Chat messages:</strong> questions you ask NEST Guide, our educational AI assistant
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight pt-2 border-t border-white/10 dark:border-white/10 light:border-black/10">
                How We Use Your Information
              </h2>
              <p>
                We use your information solely to provide app features to you: calculating your pregnancy timeline, displaying your saved contacts and doctor information during an emergency action, storing your journal and appointment history, and generating responses to your questions in NEST Guide.
              </p>
              <p className="font-medium text-white dark:text-white light:text-zinc-900">
                We do not sell your information to third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight pt-2 border-t border-white/10 dark:border-white/10 light:border-black/10">
                Third-Party Services
              </h2>
              <ul className="list-disc pl-6 space-y-2.5 text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                <li>
                  <strong className="text-white dark:text-white light:text-zinc-900">Supabase</strong> — securely stores your account and app data
                </li>
                <li>
                  <strong className="text-white dark:text-white light:text-zinc-900">Google</strong> — used only if you choose to sign in with your Google account
                </li>
                <li>
                  <strong className="text-white dark:text-white light:text-zinc-900">Google Gemini API</strong> — powers the NEST Guide educational assistant; messages you send to NEST Guide are processed by this service to generate a response
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight pt-2 border-t border-white/10 dark:border-white/10 light:border-black/10">
                NEST Guide (AI Assistant)
              </h2>
              <p>
                NEST Guide provides general educational information only. It is not a medical provider and does not diagnose conditions, recommend medications, or replace advice from a qualified healthcare professional. Always consult your doctor for medical concerns.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight pt-2 border-t border-white/10 dark:border-white/10 light:border-black/10">
                Your Choices
              </h2>
              <p>
                You may edit or delete your emergency contacts, doctor information, and journal entries at any time within the app. To request full account deletion, contact us at{" "}
                <a
                  href="mailto:hello@iuvora.com"
                  className="text-[#2f7bff] dark:text-[#2f7bff] light:text-[#1964eb] hover:underline underline-offset-4"
                >
                  hello@iuvora.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight pt-2 border-t border-white/10 dark:border-white/10 light:border-black/10">
                Data Security
              </h2>
              <p>
                Your data is stored using industry-standard security practices, including encrypted storage and access controls that ensure only you can access your own account data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight pt-2 border-t border-white/10 dark:border-white/10 light:border-black/10">
                Children&apos;s Privacy
              </h2>
              <p>
                NEST is not directed at children and is not intended for use by anyone under 18.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight pt-2 border-t border-white/10 dark:border-white/10 light:border-black/10">
                Changes to This Policy
              </h2>
              <p>
                We may update this policy from time to time. Continued use of the app after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight pt-2 border-t border-white/10 dark:border-white/10 light:border-black/10">
                Contact Us
              </h2>
              <p>
                Questions about this policy can be sent to{" "}
                <a
                  href="mailto:info@iuvora.com"
                  className="text-[#2f7bff] dark:text-[#2f7bff] light:text-[#1964eb] hover:underline underline-offset-4"
                >
                  info@iuvora.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
