import AppLayout from '@/Layouts/AppLayout';
import type { NirvaMeta } from '@/types/nirva';
import { Head, Link } from '@inertiajs/react';

interface HowWeWorkStep {
    title: string;
    text: string;
}

interface Props {
    mission: string;
    vision: string;
    audiences: string[];
    revenueModels: string[];
    howWeWork: HowWeWorkStep[];
    meta: NirvaMeta;
}

export default function About({
    mission,
    vision,
    audiences,
    revenueModels,
    howWeWork,
    meta,
}: Props) {
    return (
        <AppLayout>
            <Head title={meta.title}>
                <meta name="description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="website" />
            </Head>

            <section className="bg-[#0B1120]">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-black text-white">
                        About NIRVA
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
                        NIRVA is an AI-powered BPO company helping businesses
                        streamline operations through intelligent automation and
                        professional outsourcing services.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="rounded-2xl border border-slate-700/60 bg-[#111C33]/80 p-6">
                            <h2 className="text-xl font-bold text-cyan-300">
                                Our Mission
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                {mission}
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-700/60 bg-[#111C33]/80 p-6">
                            <h2 className="text-xl font-bold text-cyan-300">
                                Our Vision
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                {vision}
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="rounded-2xl border border-slate-700/60 bg-[#0F1729] p-6">
                            <h2 className="text-xl font-bold text-cyan-300">
                                Who we serve (B2B)
                            </h2>
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                                {audiences.map((a) => (
                                    <li key={a}>{a}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-slate-700/60 bg-[#0F1729] p-6">
                            <h2 className="text-xl font-bold text-cyan-300">
                                Revenue model
                            </h2>
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                                {revenueModels.map((r) => (
                                    <li key={r}>{r}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <h2 className="mt-14 text-2xl font-extrabold text-white">
                        How we deliver
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                        The Human + AI collaboration model behind every NIRVA
                        engagement.
                    </p>
                    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                        {howWeWork.map((step, i) => (
                            <div
                                key={step.title}
                                className="rounded-2xl border border-slate-700/60 bg-[#111C33]/80 p-6"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/15 text-base font-black text-cyan-300">
                                    {i + 1}
                                </span>
                                <h3 className="mt-4 font-bold text-white">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/contact"
                            className="inline-block rounded-lg bg-cyan-400 px-8 py-3 text-sm font-bold text-[#0B1120] transition hover:bg-cyan-300"
                        >
                            Work With Us
                        </Link>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
