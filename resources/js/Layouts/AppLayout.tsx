import Footer from '@/Components/Footer';
import Nav from '@/Components/Nav';
import type { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col bg-[#0B1120] font-sans text-slate-200 antialiased">
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
