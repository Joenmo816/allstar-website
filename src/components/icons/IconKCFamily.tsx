export default function IconKCFamily({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#2e7d32"/>
          <stop offset="1" stopColor="#0d47a1"/>
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="148" height="148" rx="18" fill="url(#g)" stroke="white" strokeWidth="4"/>
      <polygon points="30,95 80,55 130,95 130,130 30,130" fill="white" opacity="0.95"/>
      <circle cx="60" cy="95" r="8" fill="#2e7d32"/><rect x="54" y="103" width="12" height="20" fill="#2e7d32"/>
      <circle cx="86" cy="95" r="8" fill="#0d47a1"/><rect x="80" y="103" width="12" height="20" fill="#0d47a1"/>
    </svg>
  );
}