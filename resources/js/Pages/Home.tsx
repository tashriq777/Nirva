import NetworkBackground from '@/Components/NetworkBackground';
import ServiceCard from '@/Components/ServiceCard';
import AppLayout from '@/Layouts/AppLayout';
import type { NirvaMeta, NirvaService } from '@/types/nirva';
import { Head, Link } from '@inertiajs/react';

interface Props {
    hero: { brand: string; title: string; tagline: string; intro: string };
    services: NirvaService[];
    whyChoose: string[];
    meta: NirvaMeta;
}

export default function Home({ hero, services, whyChoose, meta }: Props) {
    return (
        <AppLayout>
            <Head title={meta.title}>
                <meta name="description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="website" />
            </Head>

            {/* Hero */}
            <section className="relative overflow-hidden bg-[#0B1120]">
                <NetworkBackground />
                <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
                    <p className="mb-3 inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                        {hero.brand} — AI-Powered BPO
                    </p>
                    <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                        NIRVA — AI-Powered Business Process Outsourcing
                    </h1>
                    <p className="mt-4 text-xl font-semibold text-cyan-300 sm:text-2xl">
                        {hero.tagline}
                    </p>
                    <p className="mt-4 max-w-2xl text-base text-slate-300">
                        {hero.intro}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="rounded-lg bg-cyan-400 px-6 py-3 text-sm font-bold text-[#0B1120] transition hover:bg-cyan-300"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/services"
                            className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Core services grid */}
            <section className="bg-[#0F1729]">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-extrabold text-white">
                        Core Services
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                        Eight capabilities that combine AI, automation, and
                        human expertise.
                    </p>
                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((s) => (
                            <ServiceCard key={s.slug} service={s} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose NIRVA */}
            <section className="bg-[#0B1120]">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-extrabold text-white">
                        Why Choose NIRVA
                    </h2>
                    <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {whyChoose.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-3 rounded-xl border border-slate-700/60 bg-[#111C33]/60 p-4"
                            >
                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </span>
                                <span className="text-sm font-semibold text-slate-200">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-slate-800/80 bg-[#0F1729]">
                <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                        Ready for smarter operations and faster growth?
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
                        Tell us about your goals — we will design a tailored AI
                        + outsourcing plan for your team.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-block rounded-lg bg-cyan-400 px-8 py-3 text-sm font-bold text-[#0B1120] transition hover:bg-cyan-300"
                    >
                        Contact NIRVA
                    </Link>
                </div>
            </section>
        </AppLayout>
    );
}
