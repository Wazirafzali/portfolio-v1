import { brandMarkPaths } from "@/data/brand";

export default function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="16" fill="#09090b" />
      {brandMarkPaths.map((d, index) => <path key={d} d={d} fill={index < 2 ? "#22d3ee" : "#60a5fa"} />)}
    </svg>
  );
}
