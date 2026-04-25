interface FloralDecorProps {
  className?: string;
  flip?: boolean;
}

export default function FloralDecor({ className, flip }: FloralDecorProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
      aria-hidden="true"
    >
      {/* Center stem */}
      <path d="M160 10 Q160 40 160 70" stroke="#c8a97e" strokeWidth="1" strokeLinecap="round" />

      {/* Left branch */}
      <path d="M160 30 Q130 20 110 28" stroke="#c8a97e" strokeWidth="1" strokeLinecap="round" />
      <path d="M160 45 Q120 30 90 42" stroke="#c8a97e" strokeWidth="1" strokeLinecap="round" />
      <path d="M160 55 Q115 42 80 58" stroke="#c8a97e" strokeWidth="1" strokeLinecap="round" />

      {/* Right branch */}
      <path d="M160 30 Q190 20 210 28" stroke="#c8a97e" strokeWidth="1" strokeLinecap="round" />
      <path d="M160 45 Q200 30 230 42" stroke="#c8a97e" strokeWidth="1" strokeLinecap="round" />
      <path d="M160 55 Q205 42 240 58" stroke="#c8a97e" strokeWidth="1" strokeLinecap="round" />

      {/* Flowers left */}
      <circle cx="108" cy="27" r="4" fill="#c8a97e" opacity="0.7" />
      <circle cx="108" cy="27" r="7" fill="none" stroke="#c8a97e" strokeWidth="0.8" opacity="0.4" />
      <circle cx="87" cy="41" r="3" fill="#7a9e87" opacity="0.6" />
      <circle cx="78" cy="57" r="5" fill="#c8a97e" opacity="0.5" />
      <circle cx="78" cy="57" r="8" fill="none" stroke="#c8a97e" strokeWidth="0.8" opacity="0.3" />

      {/* Flowers right */}
      <circle cx="212" cy="27" r="4" fill="#c8a97e" opacity="0.7" />
      <circle cx="212" cy="27" r="7" fill="none" stroke="#c8a97e" strokeWidth="0.8" opacity="0.4" />
      <circle cx="233" cy="41" r="3" fill="#7a9e87" opacity="0.6" />
      <circle cx="242" cy="57" r="5" fill="#c8a97e" opacity="0.5" />
      <circle cx="242" cy="57" r="8" fill="none" stroke="#c8a97e" strokeWidth="0.8" opacity="0.3" />

      {/* Small leaves left */}
      <ellipse cx="95" cy="35" rx="5" ry="2.5" fill="#7a9e87" opacity="0.5" transform="rotate(-30 95 35)" />
      <ellipse cx="72" cy="50" rx="5" ry="2.5" fill="#7a9e87" opacity="0.45" transform="rotate(-20 72 50)" />

      {/* Small leaves right */}
      <ellipse cx="225" cy="35" rx="5" ry="2.5" fill="#7a9e87" opacity="0.5" transform="rotate(30 225 35)" />
      <ellipse cx="248" cy="50" rx="5" ry="2.5" fill="#7a9e87" opacity="0.45" transform="rotate(20 248 50)" />

      {/* Top bloom */}
      <circle cx="160" cy="8" r="5" fill="#c8a97e" opacity="0.8" />
      <circle cx="160" cy="8" r="9" fill="none" stroke="#c8a97e" strokeWidth="0.8" opacity="0.4" />

      {/* Far left / right sprigs */}
      <path d="M90 42 Q65 35 50 45" stroke="#c8a97e" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      <circle cx="48" cy="44" r="3" fill="#c8a97e" opacity="0.45" />
      <path d="M230 42 Q255 35 270 45" stroke="#c8a97e" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      <circle cx="272" cy="44" r="3" fill="#c8a97e" opacity="0.45" />
    </svg>
  );
}
