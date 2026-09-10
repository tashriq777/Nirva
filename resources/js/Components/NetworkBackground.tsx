export default function NetworkBackground({
    className = '',
}: {
    className?: string;
}) {
    // Subtle network/node motif for hero sections only — dots + thin lines.
    return (
        <svg
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 h-full w-full opacity-40 ${className}`}
            viewBox="0 0 800 400"
            preserveAspectRatio="xMidYMid slice"
        >
            <defs>
                <linearGradient id="nirva-line" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
                </linearGradient>
            </defs>
            <g stroke="url(#nirva-line)" strokeWidth="1">
                <line x1="60" y1="80" x2="200" y2="140" />
                <line x1="200" y1="140" x2="340" y2="90" />
                <line x1="340" y1="90" x2="480" y2="160" />
                <line x1="480" y1="160" x2="620" y2="100" />
                <line x1="620" y1="100" x2="740" y2="170" />
                <line x1="200" y1="140" x2="260" y2="260" />
                <line x1="340" y1="90" x2="430" y2="250" />
                <line x1="480" y1="160" x2="560" y2="270" />
                <line x1="120" y1="280" x2="260" y2="260" />
                <line x1="260" y1="260" x2="430" y2="250" />
                <line x1="430" y1="250" x2="560" y2="270" />
                <line x1="560" y1="270" x2="700" y2="300" />
            </g>
            <g fill="#22D3EE">
                {[
                    [60, 80],
                    [200, 140],
                    [340, 90],
                    [480, 160],
                    [620, 100],
                    [740, 170],
                    [260, 260],
                    [430, 250],
                    [560, 270],
                    [120, 280],
                    [700, 300],
                ].map(([cx, cy], i) => (
                    <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r={i % 3 === 0 ? 5 : 3.5}
                        opacity={i % 3 === 0 ? 0.9 : 0.55}
                    />
                ))}
            </g>
            <g fill="#10B981" opacity="0.7">
                <circle cx="340" cy="90" r="2" />
                <circle cx="560" cy="270" r="2" />
                <circle cx="200" cy="140" r="2" />
            </g>
        </svg>
    );
}
