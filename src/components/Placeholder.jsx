// Local placeholder graphic used in place of Figma photography/asset exports.
// The real Figma asset host (figma.com) is blocked by this environment's
// network egress policy, so product photos, screenshots and decorative
// illustrations are represented with simple labeled placeholders instead.
export default function Placeholder({ label, className = '', tone = 'light' }) {
  const toneClasses =
    tone === 'dark'
      ? 'bg-azul/20 text-white border-white/30'
      : 'bg-gris text-azul border-azul/20'
  return (
    <div
      className={`flex items-center justify-center border border-dashed text-center font-poppins text-xs font-medium leading-snug p-2 ${toneClasses} ${className}`}
      role="img"
      aria-label={label}
    >
      {label}
    </div>
  )
}
