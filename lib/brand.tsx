// Éléments graphiques générés (favicon, images de partage), aux couleurs du portfolio.
export const colors = { bg: "#090d0c", fg: "#e6eae7", muted: "#8a9690", accent: "#ff5a1f" };

// Logo « </> » sur fond sombre (apple-icon, cartes de partage). Le favicon est app/icon.svg, sans fond.
export function Logo({ size }: { size: number }) {
  return (
    <div style={{ width: size, height: size, display: "flex", background: colors.bg, borderRadius: size * 0.22 }}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9.5,10 4,16 9.5,22" stroke={colors.fg} />
        <polyline points="22.5,10 28,16 22.5,22" stroke={colors.fg} />
        <line x1="18" y1="6" x2="14" y2="26" stroke={colors.accent} />
      </svg>
    </div>
  );
}
