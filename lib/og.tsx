import { ImageResponse } from "next/og";
import { colors, Logo } from "@/lib/brand";

export const ogSize = { width: 1200, height: 630 };

// Carte de partage : libellé, grand titre, texte optionnel, signature.
export function ogImage({ label, title, text, accent }: { label: string; title: string; text?: string; accent?: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: colors.bg, color: colors.fg }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, textTransform: "uppercase", color: colors.muted }}>{label}</div>
          <Logo size={72} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: title.length > 18 ? 88 : 120, fontWeight: 900, lineHeight: 1, textTransform: "uppercase" }}>{title}</div>
          {accent && <div style={{ display: "flex", marginTop: 12, fontSize: 84, fontStyle: "italic", color: colors.accent }}>{accent}</div>}
          {text && <div style={{ display: "flex", marginTop: 32, maxWidth: 900, fontSize: 32, lineHeight: 1.35, color: colors.muted }}>{text}</div>}
        </div>
        <div style={{ display: "flex", width: 120, height: 6, background: colors.accent }} />
      </div>
    ),
    ogSize,
  );
}
