import AppLayout from '@/Layouts/AppLayout';
import type { PageProps } from '@/types';
import type { NirvaContact, NirvaMeta, NirvaService } from '@/types/nirva';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

interface Props {
    services: NirvaService[];
    contact: NirvaContact;
    selectedService: string | null;
    meta: NirvaMeta;
}

export default function Contact({
    services,
    contact,
    selectedService,
    meta,
}: Props) {
    const { flash } =
        usePage<PageProps<{ flash: { success?: string } }>>().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        company: '',
        service: selectedService ?? '',
        message: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('contact.store'), {
            preserveScroll: true,
            onSuccess: () => reset('message'),
        });
    };

    const inputCls =
        'w-full rounded-lg border border-slate-700 bg-[#0F1729] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400';

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
                        Contact NIRVA
                    </h1>
                    <p className="mt-3 max-w-2xl text-base text-slate-300">
                        Tell us about your project — we reply fast with a
                        tailored outsourcing and automation plan.
                    </p>

                    {flash.success && (
                        <div className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm font-semibold text-emerald-300">
                            {flash.success}
                        </div>
                    )}

                    <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
                        <form
                            onSubmit={submit}
                            className="rounded-2xl border border-slate-700/60 bg-[#111C33]/80 p-6 lg:col-span-3"
                        >
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-1 block text-sm font-semibold text-slate-200"
                                    >
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
                                    <label
                                        htmlFor="email"
                                        className="mb-1 block text-sm font-semibold text-slate-200"
                                    >
                                        Email *
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
                                        className="mb-1 block text-sm font-semibold text-slate-200"
                                    >
                                        Company{' '}
                                        <span className="font-normal text-slate-500">
                                            (optional)
                                        </span>
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
                                        htmlFor="service"
                                        className="mb-1 block text-sm font-semibold text-slate-200"
                                    >
                                        Service of interest *
                                    </label>
                                    <select
                                        id="service"
                                        className={inputCls}
                                        value={data.service}
                                        onChange={(e) =>
                                            setData('service', e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Select a service…
                                        </option>
                                        {services.map((s) => (
                                            <option key={s.slug} value={s.name}>
                                                {s.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.service && (
                                        <p className="mt-1 text-xs text-red-400">
                                            {errors.service}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-5">
                                <label
                                    htmlFor="message"
                                    className="mb-1 block text-sm font-semibold text-slate-200"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className={inputCls}
                                    value={data.message}
                                    onChange={(e) =>
                                        setData('message', e.target.value)
                                    }
                                    placeholder="Tell us about your goals, volume, and timeline… (min. 10 characters)"
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
                                {processing ? 'Sending…' : 'Send Message'}
                            </button>
                        </form>

                        <aside className="rounded-2xl border border-slate-700/60 bg-[#0F1729] p-6 lg:col-span-2">
                            <h2 className="text-xl font-bold text-white">
                                Company info
                            </h2>
                            <dl className="mt-4 space-y-3 text-sm">
                                <div>
                                    <dt className="font-semibold text-slate-400">
                                        Email
                                    </dt>
                                    <dd className="text-slate-200">
                                        {contact.email}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-slate-400">
                                        Phone
                                    </dt>
                                    <dd className="text-slate-200">
                                        {contact.phone}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-slate-400">
                                        Address
                                    </dt>
                                    <dd className="text-slate-200">
                                        {contact.address}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-slate-400">
                                        Socials
                                    </dt>
                                    <dd className="flex gap-3">
                                        {contact.socials.map((s) => (
                                            <a
                                                key={s.label}
                                                href={s.href}
                                                className="text-cyan-300 hover:text-cyan-200"
                                            >
                                                {s.label}
                                            </a>
                                        ))}
                                    </dd>
                                </div>
                            </dl>
                            <p className="mt-4 text-xs text-slate-500">
                                Details are placeholders — real contact info
                                goes live before launch.
                            </p>
                        </aside>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
