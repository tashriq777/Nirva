import ServiceCard from '@/Components/ServiceCard';
import ServiceIcon from '@/Components/ServiceIcon';
import AppLayout from '@/Layouts/AppLayout';
import type { NirvaMeta, NirvaService } from '@/types/nirva';
import { Head, Link } from '@inertiajs/react';

interface Props {
    service: NirvaService;
    related: NirvaService[];
    categoryLabel: string;
    meta: NirvaMeta;
}

export default function ServiceDetail({
    service,
    related,
    categoryLabel,
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
                    {/* Breadcrumb */}
                    <nav className="text-xs font-semibold text-slate-500">
                        <Link href="/services" className="hover:text-cyan-300">
                            Services
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-300">{service.name}</span>
                    </nav>

                    {/* Header */}
                    <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
                        <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                            <ServiceIcon
                                icon={service.icon}
                                className="h-8 w-8"
                            />
                        </div>
                        <div>
                            <p className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                                {categoryLabel}
                            </p>
                            <h1 className="mt-3 text-4xl font-black text-white">
                                {service.name}
                            </h1>
                            <p className="mt-2 text-lg font-semibold text-cyan-300">
                                {service.short ?? service.description}
                            </p>
                        </div>
                    </div>

                    {/* Overview */}
                    <div className="mt-10 max-w-3xl space-y-4">
                        {service.overview.map((para, i) => (
                            <p
                                key={i}
                                className="text-base leading-relaxed text-slate-300"
                            >
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Benefits */}
                    <h2 className="mt-14 text-2xl font-extrabold text-white">
                        Key benefits
                    </h2>
                    <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {service.benefits.map((b) => (
                            <li
                                key={b}
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
                                    {b}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                        {/* What's included */}
                        <div className="rounded-2xl border border-slate-700/60 bg-[#0F1729] p-6">
                            <h2 className="text-xl font-bold text-white">
                                What&apos;s included
                            </h2>
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
                                {service.included.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Process */}
                        <div className="rounded-2xl border border-slate-700/60 bg-[#0F1729] p-6">
                            <h2 className="text-xl font-bold text-white">
                                How it works
                            </h2>
                            <ol className="mt-4 space-y-4">
                                {service.process.map((step, i) => (
                                    <li key={step.title} className="flex gap-3">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-300">
                                            {i + 1}
                                        </span>
                                        <div>
                                            <p className="text-sm font-bold text-slate-100">
                                                {step.title}
                                            </p>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-400">
                                                {step.text}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* FAQs */}
                    <h2 className="mt-14 text-2xl font-extrabold text-white">
                        Frequently asked questions
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                        {service.faqs.map((faq) => (
                            <div
                                key={faq.q}
                                className="rounded-2xl border border-slate-700/60 bg-[#111C33]/60 p-5"
                            >
                                <p className="font-bold text-white">{faq.q}</p>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Related */}
                    {related.length > 0 && (
                        <>
                            <h2 className="mt-14 text-2xl font-extrabold text-white">
                                Related services
                            </h2>
                            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {related.map((s) => (
                                    <ServiceCard key={s.slug} service={s} />
                                ))}
                            </div>
                        </>
                    )}

                    {/* CTA */}
                    <div className="mt-14 rounded-2xl border border-cyan-400/30 bg-[#0F1729] p-8 text-center">
                        <h2 className="text-2xl font-extrabold text-white">
                            Ready to get started with {service.name}?
                        </h2>
                        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-400">
                            Tell us about your goals and we will design a
                            tailored plan for your team.
                        </p>
                        <Link
                            href={`/get-started?service=${service.slug}`}
                            className="mt-6 inline-block rounded-lg bg-cyan-400 px-8 py-3 text-sm font-bold text-[#0B1120] transition hover:bg-cyan-300"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
