import { ogImage, ogSize } from "@/lib/og";
import { content } from "@/lib/content";

export const alt = "Portfolio de Mattéo Lafrancesca";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  const { firstName, lastName, role } = content.identity;
  return ogImage({ label: role, title: firstName, accent: lastName });
}
