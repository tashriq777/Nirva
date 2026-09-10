import type { NirvaService } from '@/types/nirva';
import { Link } from '@inertiajs/react';
import ServiceIcon from './ServiceIcon';

export default function ServiceCard({
    service,
    linkTo = `/services/${service.slug}`,
}: {
    service: NirvaService;
    linkTo?: string;
}) {
    return (
        <Link
            href={linkTo}
            className="group rounded-2xl border border-slate-700/60 bg-[#111C33]/80 p-6 transition hover:border-cyan-400/60 hover:bg-[#14203B]"
        >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300 transition group-hover:bg-cyan-400/25">
                <ServiceIcon icon={service.icon} />
            </div>
            <h3 className="mb-1 text-lg font-bold text-white">
                {service.name}
            </h3>
            <p className="text-sm text-slate-400">
                {service.short ?? service.description}
            </p>
        </Link>
    );
}
