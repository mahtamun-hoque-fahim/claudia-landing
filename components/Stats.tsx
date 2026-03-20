interface StatsProps {
  downloadCount: number;
}

export default function Stats({ downloadCount }: StatsProps) {
  const stats = [
    { value: downloadCount.toLocaleString(), label: "Downloads" },
    { value: "200+", label: "Languages highlighted" },
    { value: "0", label: "Dollars to use it" },
    { value: "MV3", label: "Manifest version" },
  ];

  return (
    <div className="border-y border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
          {stats.map(({ value, label }) => (
            <div key={label} className="py-6 px-4 text-center">
              <div className="font-syne font-black text-3xl text-accent tracking-tight leading-none mb-1">
                {value}
              </div>
              <div className="text-[11.5px] font-mono text-muted uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
