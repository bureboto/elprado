// Small hand-authored inline icons used in place of Figma icon exports
// (asset download blocked by network policy — see Placeholder.jsx).

export function DotIcon({ className = 'size-6', filled = true }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function CheckIcon({ className = 'size-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#0050CF" />
      <path d="M7 12.5l3 3 7-7" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowIcon({ className = 'size-4' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#fff" />
      <path d="M6 4l4 4-4 4" stroke="#0050CF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StarsIcon({ className = 'h-6' }) {
  return (
    <div className={`flex gap-1 items-center justify-center ${className}`} aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="size-5" aria-hidden="true">
          <path
            fill="#F5B301"
            d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.79L10 14.9l-5.21 2.74 1-5.79-4.21-4.1 5.82-.85z"
          />
        </svg>
      ))}
    </div>
  )
}

export function PhoneIcon({ className = 'size-6' }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-white/20 ${className}`}>
      <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true">
        <path
          fill="#fff"
          d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1z"
        />
      </svg>
    </span>
  )
}

export function MailIcon({ className = 'size-6' }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-white/20 ${className}`}>
      <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true">
        <path fill="#fff" d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm1.4 2L12 12.5 19.6 7H4.4zM2 7.4V17h20V7.4l-9.4 6.7a1 1 0 01-1.2 0L2 7.4z" />
      </svg>
    </span>
  )
}

export function PinIcon({ className = 'size-6' }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-white/20 ${className}`}>
      <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true">
        <path fill="#fff" d="M12 2C7.6 2 4 5.6 4 10c0 5.7 7 11.6 7.3 11.9.2.1.5.1.7 0C12.3 21.6 20 15.7 20 10c0-4.4-3.6-8-8-8zm0 10.8A2.8 2.8 0 1112 7.2a2.8 2.8 0 010 5.6z" />
      </svg>
    </span>
  )
}

export function DocIcon({ className = 'size-6' }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-white/20 ${className}`}>
      <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden="true">
        <path fill="#fff" d="M6 2h9l5 5v15a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm8 1.5V8h4.5L14 3.5z" />
      </svg>
    </span>
  )
}

export function PlayIcon({ className = 'size-14' }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full bg-white/90 ${className}`}>
      <svg viewBox="0 0 24 24" className="size-6 translate-x-0.5" aria-hidden="true">
        <path fill="#0050CF" d="M8 5v14l11-7z" />
      </svg>
    </span>
  )
}
