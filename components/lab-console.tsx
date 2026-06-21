const lines = [
  { label: "DDR", value: "relationships.scan()", color: "text-lab-cyan" },
  { label: "AI", value: "context.packages.ready", color: "text-lab-violet" },
  { label: "PERF", value: "hypothesis.test(42ms)", color: "text-lab-green" },
  { label: "PLUGIN", value: "native.bridge.sync", color: "text-lab-amber" }
];

export function LabConsole() {
  return (
    <div className="lab-panel hidden w-full max-w-md p-4 lg:block">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-lab-cyan/80" />
          <span className="size-2 rounded-full bg-lab-violet/80" />
          <span className="size-2 rounded-full bg-lab-green/80" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          lab telemetry
        </span>
      </div>
      <div className="space-y-3 font-mono text-xs">
        {lines.map((line) => (
          <div key={line.label} className="grid grid-cols-[72px_1fr] gap-3">
            <span className={line.color}>{line.label}</span>
            <span className="truncate text-slate-300">{line.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
