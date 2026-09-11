import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function Nav() {
    const [open, setOpen] = useState(false);
    const { url } = usePage();

    const isActive = (href: string) =>
        href === '/' ? url === '/' : url.startsWith(href);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0B1120]/90 backdrop-blur">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 font-black text-[#0B1120]">
                        N
                    </span>
                    <span className="text-xl font-extrabold tracking-wide text-white">
                        NIRVA
                        <span className="ml-2 hidden text-xs font-medium text-slate-400 sm:inline">
                            Smarter Operations. Faster Growth.
                        </span>
                    </span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={`text-sm font-semibold transition hover:text-cyan-300 ${
                                isActive(l.href)
                                    ? 'text-cyan-300'
                                    : 'text-slate-300'
                            }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <Link
                        href="/get-started"
                        className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-[#0B1120] transition hover:bg-cyan-300"
                    >
                        Get Started
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 md:hidden"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        {open ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {open && (
                <div className="border-t border-slate-800 px-4 py-3 md:hidden">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className={`block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-slate-800 ${
                                isActive(l.href)
                                    ? 'text-cyan-300'
                                    : 'text-slate-200'
                            }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <Link
                        href="/get-started"
                        onClick={() => setOpen(false)}
                        className="mt-2 block rounded-lg bg-cyan-400 px-3 py-2 text-center text-sm font-bold text-[#0B1120]"
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </header>
    );
}
