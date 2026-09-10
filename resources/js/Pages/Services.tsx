import ServiceCard from '@/Components/ServiceCard';
import AppLayout from '@/Layouts/AppLayout';
import type { NirvaCategory, NirvaMeta, NirvaService } from '@/types/nirva';
import { Head, Link } from '@inertiajs/react';

interface Props {
    categories: Record<'ai' | 'bpo', NirvaCategory>;
    aiServices: NirvaService[];
    bpoServices: NirvaService[];
    meta: NirvaMeta;
}

function ServiceSection({
    category,
    services,
    accent,
}: {
    category: NirvaCategory;
    services: NirvaService[];
    accent: 'cyan' | 'emerald';
}) {
    const badge =
        accent === 'cyan'
            ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-300'
            : 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300';

    return (
        <div className="mt-12">
            <p
                className={`inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest ${badge}`}
            >
                {category.title}
            </p>
            <p className="mt-3 max-w-2xl text-sm text-slate-400">
                {category.blurb}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((s) => (
                    <ServiceCard key={s.slug} service={s} />
                ))}
            </div>
        </div>
    );
}

export default function Services({
    categories,
    aiServices,
    bpoServices,
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
                    <h1 className="text-4xl font-black text-white">Services</h1>
                    <p className="mt-3 max-w-2xl text-base text-slate-300">
                        Two ways to work with NIRVA: AI-powered services where
                        intelligent agents do the heavy lifting, and classic BPO
                        where dedicated specialists run your operations. Click
                        any service for full details.
                    </p>

                    <ServiceSection
                        category={categories.ai}
                        services={aiServices}
                        accent="cyan"
                    />
                    <ServiceSection
                        category={categories.bpo}
                        services={bpoServices}
                        accent="emerald"
                    />

                    <div className="mt-12 text-center">
                        <Link
                            href="/contact"
                            className="inline-block rounded-lg bg-cyan-400 px-8 py-3 text-sm font-bold text-[#0B1120] transition hover:bg-cyan-300"
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
