import Link from "next/link";

const NAV = [
  { label: "Investments", href: "#investments" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div>
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between gap-4">
            <Link href="/" className="group flex items-center gap-2">
              <div className="grid size-9 place-items-center rounded-xl border border-zinc-200 bg-white shadow-sm">
                <span className="text-sm font-semibold tracking-tight">VB</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">VBanks Inc.</div>
                <div className="text-xs text-zinc-500">Investments & Management</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-700 hover:text-zinc-950"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
              >
                Request a call
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-zinc-100 blur-3xl" />
          <div className="absolute -bottom-24 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-zinc-50 blur-3xl" />
        </div>

        <Container>
          <div className="py-16 md:py-24">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Disciplined execution</Pill>
              <Pill>Long-term value</Pill>
              <Pill>Operator mindset</Pill>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
              Strategic investments. Hands-on management.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
              VBanks Inc. partners on investment and management opportunities with a focus on
              operational rigor, measured risk, and durable outcomes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
              >
                Discuss an opportunity
              </a>
              <a
                href="#investments"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
              >
                View focus areas
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                { k: "Focus", v: "Real estate, operating businesses, and special situations" },
                { k: "Approach", v: "Thesis-led underwriting + execution playbooks" },
                { k: "Partnership", v: "Owner-operator alignment and clear governance" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-xs font-medium text-zinc-500">{item.k}</div>
                  <div className="mt-2 text-sm font-semibold text-zinc-950">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Investments */}
      <section id="investments" className="border-t border-zinc-200 bg-zinc-50/40">
        <Container>
          <div className="py-16 md:py-20">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Investment focus
                </h2>
                <p className="mt-3 max-w-2xl text-zinc-600">
                  We evaluate opportunities where strong fundamentals and operational improvements
                  can drive long-term value.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Hospitality & Experiential",
                  desc: "Operational performance, revenue strategy, and guest experience improvements.",
                },
                {
                  title: "Commercial & Mixed-Use",
                  desc: "Disciplined leasing strategy, tenant quality, and durable cash flow.",
                },
                {
                  title: "Residential & Workforce",
                  desc: "Property-level optimization, capex discipline, and thoughtful management.",
                },
                {
                  title: "Operating Businesses",
                  desc: "Select acquisitions where process, systems, and leadership unlock growth.",
                },
                {
                  title: "Special Situations",
                  desc: "Complexity where clarity and execution can create differentiated outcomes.",
                },
                {
                  title: "Asset & Property Management",
                  desc: "Hands-on oversight, reporting, budgeting, and stakeholder alignment.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-sm font-semibold text-zinc-950">{c.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-zinc-600">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section id="approach" className="border-t border-zinc-200 bg-white">
        <Container>
          <div className="py-16 md:py-20">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              How we work
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              We combine thesis-driven diligence with pragmatic execution—designed to be clear,
              measurable, and repeatable.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Underwrite with rigor",
                  desc: "Fundamentals, downside protection, and a clear value-creation plan.",
                },
                {
                  step: "02",
                  title: "Execute the playbook",
                  desc: "Operational improvements, capex discipline, and KPI cadence.",
                },
                {
                  step: "03",
                  title: "Manage for durability",
                  desc: "Transparent reporting, governance, and long-term alignment.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-xs font-medium text-zinc-500">{s.step}</div>
                  <div className="mt-2 text-base font-semibold text-zinc-950">{s.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-zinc-600">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold text-zinc-950">
                    Prefer a quick intro call?
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">
                    We’ll route you to the right person and respond promptly.
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
                >
                  Request a call
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-200 bg-white">
        <Container>
          <div className="py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  About VBanks Inc.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                  VBanks Inc. is an investment and management firm. We focus on opportunities where
                  operational excellence, disciplined capital allocation, and clear accountability
                  can create long-term value.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                  We believe in being direct, responsive, and execution-oriented—building durable
                  results through strong fundamentals and thoughtful stewardship.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Pill>Integrity</Pill>
                  <Pill>Accountability</Pill>
                  <Pill>Operational rigor</Pill>
                  <Pill>Long-term mindset</Pill>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
                <div className="text-sm font-semibold text-zinc-950">What you can expect</div>
                <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                  <li className="flex gap-3">
                    <span className="mt-1 size-2 rounded-full bg-zinc-900" />
                    Clear communication and fast follow-up
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 size-2 rounded-full bg-zinc-900" />
                    Practical diligence and measurable plans
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 size-2 rounded-full bg-zinc-900" />
                    Hands-on oversight and transparent reporting
                  </li>
                </ul>

                <div className="mt-6 border-t border-zinc-200 pt-6">
                  <div className="text-xs font-medium text-zinc-500">Note</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Replace the copy on this page with your exact focus areas, markets, and team
                    details for maximum credibility.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Insights */}
      <section id="insights" className="border-t border-zinc-200 bg-zinc-50/40">
        <Container>
          <div className="py-16 md:py-20">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Insights</h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Short, useful perspectives on investing, operations, and management.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "What we look for in an operating plan",
                  meta: "Operational discipline • 3 min read",
                },
                {
                  title: "Cash flow durability: the overlooked lever",
                  meta: "Underwriting • 4 min read",
                },
                {
                  title: "KPIs that actually drive better decisions",
                  meta: "Reporting • 5 min read",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-sm font-semibold text-zinc-950">{p.title}</div>
                  <div className="mt-2 text-xs text-zinc-500">{p.meta}</div>
                  <div className="mt-4 text-sm text-zinc-600">
                    (Placeholder) Add real posts or remove this section for a leaner site.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-200 bg-white">
        <Container>
          <div className="py-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contact</h2>
                <p className="mt-3 max-w-md text-zinc-600">
                  Share a few details and we’ll route your message to the appropriate contact.
                </p>

                <div className="mt-6 space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
                  <div className="text-sm font-semibold text-zinc-950">Direct</div>
                  <div className="text-sm text-zinc-700">
                    Email:{" "}
                    <a className="underline hover:no-underline" href="mailto:info@vbanksinc.com">
                      info@vbanksinc.com
                    </a>
                  </div>
                  <div className="text-sm text-zinc-700">
                    Phone:{" "}
                    <a className="underline hover:no-underline" href="tel:+19193674755">
                      (919) 367-4755
                    </a>
                  </div>
                  <div className="text-sm text-zinc-700">
                    LinkedIn:{" "}
                    <a
                      className="underline hover:no-underline"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      aria-label="LinkedIn (replace with your URL)"
                    >
                      Add your LinkedIn URL
                    </a>
                  </div>
                </div>
              </div>

              {/* Static form (no backend). Add Formspree, Netlify Forms, or a simple API route later. */}
              <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium text-zinc-800">Name</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-400"
                      placeholder="Your name"
                      name="name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-zinc-800">Email</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-400"
                      placeholder="you@company.com"
                      name="email"
                      type="email"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-zinc-800">Company</label>
                      <input
                        className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-400"
                        placeholder="Company"
                        name="company"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-zinc-800">Topic</label>
                      <select
                        className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-400"
                        name="topic"
                        defaultValue="Investment opportunity"
                      >
                        <option>Investment opportunity</option>
                        <option>Management services</option>
                        <option>Partnership / JV</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-zinc-800">Message</label>
                    <textarea
                      className="mt-2 min-h-[130px] w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-400"
                      placeholder="A brief description of what you're looking for…"
                      name="message"
                    />
                  </div>

                  <button
                    type="button"
                    className="mt-2 inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
                    onClick={() => alert("Hook this form to Formspree/Netlify/Vercel API route when ready.")}
                  >
                    Send message
                  </button>

                  <div className="text-xs text-zinc-500">
                    By submitting, you agree we may contact you about your inquiry.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <Container>
          <div className="flex flex-col gap-3 py-10 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} VBanks Inc. All rights reserved.</div>
            <div className="flex gap-5">
              <a className="hover:text-zinc-900" href="#contact">
                Contact
              </a>
              <a
                className="hover:text-zinc-900"
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Privacy Policy (add link)"
              >
                Privacy
              </a>
              <a
                className="hover:text-zinc-900"
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Terms (add link)"
              >
                Terms
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
