export default function Logo() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Shield */}
      <path
        d="M32 4L54 12V30C54 45 44 56 32 60C20 56 10 45 10 30V12L32 4Z"
        fill="url(#shieldGradient)"
        filter="url(#glow)"
      />

      {/* Inner border */}
      <path
        d="M32 9L49 15V30C49 42 41 51 32 55C23 51 15 42 15 30V15L32 9Z"
        fill="none"
        stroke="rgba(255,255,255,.18)"
        strokeWidth="1.5"
      />

      {/* V */}
      <path
        d="M22 22L32 45L42 22"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Blockchain nodes */}
      <circle cx="22" cy="22" r="2" fill="white" />
      <circle cx="32" cy="45" r="2" fill="white" />
      <circle cx="42" cy="22" r="2" fill="white" />
    </svg>
  );
}
