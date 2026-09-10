import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="border-t border-slate-800/80 bg-[#0B1120]">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 font-black text-[#0B1120]">
                            N
                        </span>
                        <span className="text-xl font-extrabold text-white">
                            NIRVA
                        </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-400">
                        AI-Powered Business Process Outsourcing. Smarter
                        Operations. Faster Growth.
                    </p>
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                        Pages
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>
                            <Link
                                href="/"
                                className="text-slate-400 hover:text-cyan-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className="text-slate-400 hover:text-cyan-300"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-slate-400 hover:text-cyan-300"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="text-slate-400 hover:text-cyan-300"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                        Services
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-400">
                        <li>AI Cold Calling</li>
                        <li>AI Customer Support</li>
                        <li>AI Healthcare Scribing</li>
                        <li>AI Automation</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                        Contact
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-400">
                        <li>hello@nirva.example</li>
                        <li>+1 (555) 000-0000</li>
                        <li className="flex gap-3 pt-1">
                            <a
                                href="https://linkedin.com"
                                className="hover:text-cyan-300"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://x.com"
                                className="hover:text-cyan-300"
                            >
                                X
                            </a>
                            <a
                                href="https://facebook.com"
                                className="hover:text-cyan-300"
                            >
                                Facebook
                            </a>
                        </li>
                    </ul>
                    <p className="mt-3 text-xs text-slate-500">
                        Contact details are placeholders — real info goes live
                        before launch.
                    </p>
                </div>
            </div>
            <div className="border-t border-slate-800/80 py-5 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} NIRVA. All rights reserved.
            </div>
        </footer>
    );
}
