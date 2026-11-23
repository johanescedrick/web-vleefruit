export default function Logo({ light = false }: { light?: boolean }) {
  const ink = light ? "#faf7f0" : "#163a27";
  return (
    <span className="flex items-center gap-2">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="18" r="11" fill="none" stroke={ink} strokeWidth="2.2" />
        <path d="M16 7c0-3 2-5 5-5" fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M17 7c3.5-.5 6 1 7 3.5-3 .8-5.6.2-7-3.5z" fill="#e8892b" />
        <path d="M11 18l3.4 3.4L21 15" fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span
        className="font-display text-[22px] font-bold tracking-tight"
        style={{ color: ink }}
      >
        vleefruit
      </span>
    </span>
  );
}
