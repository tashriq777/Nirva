import AppLayout from '@/Layouts/AppLayout';
import type { PageProps } from '@/types';
import type { NirvaCategory, NirvaMeta, NirvaService } from '@/types/nirva';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

interface GetStartedOptions {
    companySizes: string[];
    painPoints: string[];
    budgets: string[];
    timelines: string[];
}

interface Props {
    services: NirvaService[];
    categories: Record<'ai' | 'bpo', NirvaCategory>;
    options: GetStartedOptions;
    selectedServices: string[];
    meta: NirvaMeta;
}

const trustItems = [
    '8 services across AI + BPO',
    '24/7 coverage on key services',
    'Human experts in the loop',
    'Tailored plan within 24 hours',
];

const nextSteps = [
    {
        title: 'We review your needs',
        text: 'A specialist reads every inquiry and maps it to the right services — no bots triaging your business.',
    },
    {
        title: 'We schedule a call',
        text: 'You get a focused discovery call at a time that suits your team and timezone.',
    },
    {
        title: 'We propose a custom plan',
        text: 'Scope, staffing, timeline, and pricing in one clear proposal. No obligation.',
    },
];

export default function GetStarted({
    services,
    categories,
    options,
    selectedServices,
    meta,
}: Props) {
    const { flash } =
        usePage<PageProps<{ flash: { success?: string } }>>().props;

    const initialServices = selectedServices
        .map((slug) => services.find((s) => s.slug === slug)?.name)
        .filter((name): name is string => Boolean(name));

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        company: '',
        company_size: '',
        services: initialServices,
        pain_point: '',
        budget: '',
        timeline: '',
        message: '',
    });

    const toggleService = (name: string) => {
        setData(
            'services',
            data.services.includes(name)
                ? data.services.filter((s) => s !== name)
                : [...data.services, name],
        );
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('get-started.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const inputCls =
        'w-full rounded-lg border border-slate-700 bg-[#0F1729] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400';
    const labelCls = 'mb-1 block text-sm font-semibold text-slate-200';

    const aiServices = services.filter((s) => s.category === 'ai');
    const bpoServices = services.filter((s) => s.category === 'bpo');

    const serviceGroup = (title: string, list: NirvaService[]) => (
        <div key={title}>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                {title}
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {list.map((s) => (
                    <label
                        key={s.slug}
                        className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm transition ${
                            data.services.includes(s.name)
                                ? 'border-cyan-400/70 bg-cyan-400/10 text-slate-100'
                                : 'border-slate-700 bg-[#0F1729] text-slate-300 hover:border-slate-500'
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={data.services.includes(s.name)}
                            onChange={() => toggleService(s.name)}
                            className="mt-0.5 h-4 w-4 rounded border-slate-600 bg-slate-800 text-cyan-400 focus:ring-cyan-400"
                        />
                        <span>
                            <span className="font-semibold">{s.name}</span>
                            <span className="block text-xs text-slate-500">
                                {s.short ?? s.description}
                            </span>
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );

    return (
        <AppLayout>
            <Head title={meta.title}>
                <meta name="description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="website" />
            </Head>

            {/* Hero */}
            <section className="bg-[#0B1120]">
                <div className="mx-auto max-w-7xl px-4 pb-4 pt-16 sm:px-6 lg:px-8">
                    <p className="mb-3 inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
                        Get Started
                    </p>
                    <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                        Let&apos;s build your outsourcing solution
                    </h1>
                    <p className="mt-4 max-w-2xl text-base text-slate-300">
                        Tell us about your business — we&apos;ll respond within
                        24 hours with a tailored plan.
                    </p>

                    {/* Trust strip */}
                    <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {trustItems.map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-2 rounded-xl border border-slate-700/60 bg-[#111C33]/60 px-4 py-3 text-sm font-semibold text-slate-200"
                            >
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                                    <svg
                                        className="h-3.5 w-3.5"
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
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Form + sidebar */}
            <section className="bg-[#0B1120]">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    {flash.success && (
                        <div className="mb-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm font-semibold text-emerald-300">
                            {flash.success}
                        </div>
                    )}

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                        <form
                            onSubmit={submit}
                            className="rounded-2xl border border-slate-700/60 bg-[#111C33]/80 p-6 lg:col-span-3"
                        >
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className={labelCls}>
                                        Name *
                                    </label>
                                    <input
                                        id="name"
                                        className={inputCls}
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        placeholder="Jane Cooper"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className={labelCls}>
                                        Work email *
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className={inputCls}
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        placeholder="jane@company.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="company"
                                        className={labelCls}
                                    >
                                        Company *
                                    </label>
                                    <input
                                        id="company"
                                        className={inputCls}
                                        value={data.company}
                                        onChange={(e) =>
                                            setData('company', e.target.value)
                                        }
                                        placeholder="Acme Inc."
                                    />
                                    {errors.company && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.company}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="company_size"
                                        className={labelCls}
                                    >
                                        Company size *
                                    </label>
                                    <select
                                        id="company_size"
                                        className={inputCls}
                                        value={data.company_size}
                                        onChange={(e) =>
                                            setData(
                                                'company_size',
                                                e.target.value,
                                            )
                                        }
                                    >
                                        <option value="">
                                            Select team size…
                                        </option>
                                        {options.companySizes.map((size) => (
                                            <option key={size} value={size}>
                                                {size} people
                                            </option>
                                        ))}
                                    </select>
                                    {errors.company_size && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.company_size}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-5 space-y-4">
                                <div>
                                    <span className={labelCls}>
                                        Services you&apos;re interested in *
                                    </span>
                                    {serviceGroup(
                                        categories.ai.title,
                                        aiServices,
                                    )}
                                </div>
                                <div>
                                    {serviceGroup(
                                        categories.bpo.title,
                                        bpoServices,
                                    )}
                                </div>
                                {errors.services && (
                                    <p className="text-xs text-red-400">
                                        {errors.services}
                                    </p>
                                )}
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="pain_point"
                                        className={labelCls}
                                    >
                                        Current pain point *
                                    </label>
                                    <select
                                        id="pain_point"
                                        className={inputCls}
                                        value={data.pain_point}
                                        onChange={(e) =>
                                            setData(
                                                'pain_point',
                                                e.target.value,
                                            )
                                        }
                                    >
                                        <option value="">
                                            What hurts most?…
                                        </option>
                                        {options.painPoints.map((p) => (
                                            <option key={p} value={p}>
                                                {p}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.pain_point && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.pain_point}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="timeline"
                                        className={labelCls}
                                    >
                                        Timeline *
                                    </label>
                                    <select
                                        id="timeline"
                                        className={inputCls}
                                        value={data.timeline}
                                        onChange={(e) =>
                                            setData('timeline', e.target.value)
                                        }
                                    >
                                        <option value="">
                                            When do you want to start?…
                                        </option>
                                        {options.timelines.map((t) => (
                                            <option key={t} value={t}>
                                                {t}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.timeline && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.timeline}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-5">
                                <label htmlFor="budget" className={labelCls}>
                                    Budget range{' '}
                                    <span className="font-normal text-slate-500">
                                        (optional)
                                    </span>
                                </label>
                                <select
                                    id="budget"
                                    className={inputCls}
                                    value={data.budget}
                                    onChange={(e) =>
                                        setData('budget', e.target.value)
                                    }
                                >
                                    <option value="">Select a range…</option>
                                    {options.budgets.map((b) => (
                                        <option key={b} value={b}>
                                            {b}
                                        </option>
                                    ))}
                                </select>
                                {errors.budget && (
                                    <p className="mt-1 text-xs text-red-400">
                                        {errors.budget}
                                    </p>
                                )}
                            </div>

                            <div className="mt-5">
                                <label htmlFor="message" className={labelCls}>
                                    Anything else{' '}
                                    <span className="font-normal text-slate-500">
                                        (optional)
                                    </span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className={inputCls}
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                    placeholder="Goals, volumes, tools you use, deadlines…"
                                />
                                {errors.message && (
                                    <p className="mt-1 text-xs text-red-400">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="mt-6 w-full rounded-lg bg-cyan-400 px-6 py-3 text-sm font-bold text-[#0B1120] transition hover:bg-cyan-300 disabled:opacity-60 sm:w-auto"
                            >
                                {processing ? 'Sending…' : 'Request My Plan'}
                            </button>
                        </form>

                        {/* Sidebar */}
                        <aside className="space-y-6 lg:col-span-2">
                            <div className="rounded-2xl border border-slate-700/60 bg-[#0F1729] p-6">
                                <h2 className="text-xl font-bold text-white">
                                    What happens next
                                </h2>
                                <ol className="mt-4 space-y-4">
                                    {nextSteps.map((step, i) => (
                                        <li
                                            key={step.title}
                                            className="flex gap-3"
                                        >
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

                            <div className="rounded-2xl border border-slate-700/60 bg-[#111C33]/60 p-6 text-sm text-slate-300">
                                Have a quick question instead?{' '}
                                <Link
                                    href="/contact"
                                    className="font-bold text-cyan-300 hover:text-cyan-200"
                                >
                                    Contact us
                                </Link>{' '}
                                — no long form required.
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
